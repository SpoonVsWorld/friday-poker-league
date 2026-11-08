-- Spoon Platoon: a durable record of each play session, for the Admin dashboard (Matt, 7 Nov 2026).
-- Run once in the Supabase SQL editor (Project > SQL Editor > New query).
--
-- game_presence is the LIVE view and its rows are deleted after two days, so nothing long-term can be built
-- from it. This keeps one summary row per browser session instead: when it started, when it was last seen, the
-- furthest operation it reached, the device and the approximate place. It is maintained by game_heartbeat()
-- itself, so the game sends nothing extra - the same 30-second heartbeat now updates both tables.
--
-- game_stats() does all the counting in the database and hands the Admin screen one JSON blob, so the browser
-- never pulls thousands of rows just to average them.

create table if not exists game_sessions (
  session_id text primary key,
  name text,
  mode text,
  max_op integer,                 -- furthest operation number seen in this session
  self boolean not null default false,
  ip_address text,
  city text,
  region text,
  country text,
  user_agent text,
  latitude double precision,
  longitude double precision,
  first_seen timestamptz not null default now(),
  last_seen timestamptz not null default now(),
  beats integer not null default 0
);
create index if not exists game_sessions_first_seen_idx on game_sessions (first_seen desc);

alter table game_sessions enable row level security;
drop policy if exists "game_sessions_admin_select" on game_sessions;
drop policy if exists "game_sessions_admin_delete" on game_sessions;
create policy "game_sessions_admin_select" on game_sessions for select using (auth.role() = 'authenticated');
create policy "game_sessions_admin_delete" on game_sessions for delete using (auth.role() = 'authenticated');

-- the heartbeat now keeps both the live row and the durable summary
drop function if exists game_heartbeat(text, text, text, text, boolean, text, text, text, text, text, timestamptz, double precision, double precision);
create or replace function game_heartbeat(
  p_sid text, p_name text, p_mode text, p_detail text, p_self boolean,
  p_ip text, p_city text, p_region text, p_country text, p_ua text, p_started timestamptz,
  p_lat double precision default null, p_lon double precision default null
) returns json
language plpgsql security definer set search_path = public as $$
declare w boolean; tok text; op integer;
begin
  if not rate_ok('hb:' || coalesce(p_ip, 'none'), 150, interval '1 hour') then
    return json_build_object('watch', false);
  end if;

  insert into game_presence (session_id, name, mode, detail, self, ip_address, city, region, country, user_agent, started_at, last_seen, latitude, longitude)
  values (p_sid, p_name, p_mode, p_detail, coalesce(p_self, false), p_ip, p_city, p_region, p_country, p_ua, coalesce(p_started, now()), now(), p_lat, p_lon)
  on conflict (session_id) do update set
    name = excluded.name, mode = excluded.mode, detail = excluded.detail, self = excluded.self,
    ip_address = excluded.ip_address, city = excluded.city, region = excluded.region, country = excluded.country,
    user_agent = excluded.user_agent, last_seen = now(), latitude = excluded.latitude, longitude = excluded.longitude;

  -- "Operation 7 · Iron Curtain · 1:49 in ..." -> 7
  op := nullif(substring(coalesce(p_detail, '') from 'Operation ([0-9]+)'), '')::integer;

  insert into game_sessions (session_id, name, mode, max_op, self, ip_address, city, region, country, user_agent, latitude, longitude, first_seen, last_seen, beats)
  values (p_sid, p_name, p_mode, op, coalesce(p_self, false), p_ip, p_city, p_region, p_country, p_ua, p_lat, p_lon, coalesce(p_started, now()), now(), 1)
  on conflict (session_id) do update set
    name = coalesce(excluded.name, game_sessions.name),
    mode = coalesce(excluded.mode, game_sessions.mode),
    max_op = greatest(coalesce(game_sessions.max_op, 0), coalesce(excluded.max_op, 0)),
    self = excluded.self,
    city = coalesce(excluded.city, game_sessions.city),
    region = coalesce(excluded.region, game_sessions.region),
    country = coalesce(excluded.country, game_sessions.country),
    user_agent = coalesce(excluded.user_agent, game_sessions.user_agent),
    latitude = coalesce(excluded.latitude, game_sessions.latitude),
    longitude = coalesce(excluded.longitude, game_sessions.longitude),
    last_seen = now(),
    beats = game_sessions.beats + 1;

  select coalesce(watch_at > now() - interval '2 minutes', false), watch_token into w, tok
    from game_presence where session_id = p_sid;
  if random() < 0.02 then perform rate_sweep(); end if;
  return json_build_object('watch', w, 'token', case when w then tok else null end);
end;
$$;
revoke all on function game_heartbeat(text, text, text, text, boolean, text, text, text, text, text, timestamptz, double precision, double precision) from public;
grant execute on function game_heartbeat(text, text, text, text, boolean, text, text, text, text, text, timestamptz, double precision, double precision) to anon, authenticated, service_role;

-- everything the Admin "Game insights" panel shows, counted in the database. Admin only.
create or replace function game_stats(p_days integer default 30)
returns json
language plpgsql security definer set search_path = public as $$
declare out json;
begin
  if auth.role() <> 'authenticated' then return null; end if;
  select json_build_object(
    'days', p_days,
    'views_by_day', (
      select coalesce(json_agg(json_build_object('d', d::date, 'n', n) order by d), '[]'::json) from (
        select date_trunc('day', viewed_at) as d, count(*) as n
        from page_views where page = 'spoonplatoon' and viewed_at > now() - (p_days || ' days')::interval
        group by 1) v),
    'visitors_total', (select count(distinct ip_address) from page_views where page = 'spoonplatoon'),
    'visitors_window', (select count(distinct ip_address) from page_views where page = 'spoonplatoon' and viewed_at > now() - (p_days || ' days')::interval),
    'returning', (
      select count(*) from (
        select ip_address from page_views where page = 'spoonplatoon' group by ip_address having count(*) > 1) r),
    'sessions', (select count(*) from game_sessions where not self),
    'sessions_window', (select count(*) from game_sessions where not self and first_seen > now() - (p_days || ' days')::interval),
    'mobile_pct', (
      select case when count(*) = 0 then null else
        round(100.0 * count(*) filter (where user_agent ~* 'mobile|android|iphone|ipad') / count(*)) end
      from game_sessions where not self and user_agent is not null),
    'median_secs', (
      select round(percentile_cont(0.5) within group (order by extract(epoch from (last_seen - first_seen))))
      from game_sessions where not self and beats > 1),
    'longest_secs', (
      select round(max(extract(epoch from (last_seen - first_seen)))) from game_sessions where not self),
    'call_signs', (select count(distinct lower(name)) from game_sessions where name is not null and not self),
    'busiest_hour', (
      select to_char(date_trunc('hour', viewed_at at time zone 'America/Indiana/Indianapolis'), 'HH24') from page_views
      where page = 'spoonplatoon' group by 1 order by count(*) desc limit 1),   -- local time, not UTC
    'funnel', (
      select coalesce(json_agg(json_build_object('op', op, 'reached', reached) order by op), '[]'::json) from (
        select g.op, (select count(*) from game_sessions s where not s.self and coalesce(s.max_op, 0) >= g.op) as reached
        from generate_series(1, 20) as g(op)) f),
    'campaign_sessions', (select count(*) from game_sessions where not self and coalesce(max_op, 0) > 0)
  ) into out;
  return out;
end;
$$;
revoke all on function game_stats(integer) from public;
grant execute on function game_stats(integer) to authenticated, service_role;

-- a few numbers about the poker league, same idea
create or replace function league_stats()
returns json
language plpgsql security definer set search_path = public as $$
declare out json;
begin
  if auth.role() <> 'authenticated' then return null; end if;
  select json_build_object(
    -- fridays holds scheduled nights too, so "last" means the last one that actually has results
    'last_friday', (select max(f.game_date) from fridays f where exists (select 1 from results r where r.friday_id = f.id)),
    'next_friday', (select min(game_date) from fridays where game_date >= current_date),
    'fridays_total', (select count(*) from fridays),
    'players_active', (select count(*) from players where coalesce(is_active, true)),
    'players_total', (select count(*) from players),
    'feedback_open', (select count(*) from feedback where coalesce(type, '') <> 'comment'),
    'feedback_total', (select count(*) from feedback),
    'feedback_recent', (select count(*) from feedback where created_at > now() - interval '30 days'),
    'high_hands', (select count(*) from high_hands),
    -- active players with no result in the last five weeks: who has quietly stopped turning up
    'players_missing', (
      select count(*) from players p where coalesce(p.is_active, true) and not exists (
        select 1 from results r join fridays f on f.id = r.friday_id
        where r.player_id = p.id and f.game_date > (current_date - 35)))
  ) into out;
  return out;
end;
$$;
revoke all on function league_stats() from public;
grant execute on function league_stats() to authenticated, service_role;
