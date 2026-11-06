-- Spoon Platoon / poker app: rate limits on everything the public can write (Matt, 6 Nov 2026).
-- Run once in the Supabase SQL editor (Project > SQL Editor > New query).
--
-- The three public endpoints (api/log-view.js, api/heartbeat.js, api/campaign-win.js) take anonymous POSTs,
-- so without this anyone with a browser console could post thousands of fake campaign wins or flood the visit
-- counter. The limits are counted in the database, which is the one place every route has to pass through,
-- and they are generous enough that real play never touches them:
--   page views        40 per IP per hour
--   game heartbeats  150 per IP per hour  (one player playing non-stop is 120)
--   campaign wins      5 per IP per hour, and one per browser session per 10 minutes
-- Going over does not error - the write is simply dropped, so a flood costs the attacker nothing and changes
-- nothing. Admin writes (logged in) are not rate limited at all.

create table if not exists api_rate (
  key text primary key,
  window_start timestamptz not null default now(),
  n integer not null default 0
);

alter table api_rate enable row level security;   -- nothing but the functions below touches it

-- true if this key is still under its limit for the current window (and counts the hit)
create or replace function rate_ok(p_key text, p_limit integer, p_window interval)
returns boolean
language plpgsql security definer set search_path = public as $$
declare cur api_rate%rowtype;
begin
  if p_key is null then return true; end if;
  select * into cur from api_rate where key = p_key for update;
  if not found then
    insert into api_rate (key, window_start, n) values (p_key, now(), 1)
      on conflict (key) do update set n = api_rate.n + 1;
    return true;
  end if;
  if cur.window_start < now() - p_window then
    update api_rate set window_start = now(), n = 1 where key = p_key;
    return true;
  end if;
  if cur.n >= p_limit then
    return false;
  end if;
  update api_rate set n = cur.n + 1 where key = p_key;
  return true;
end;
$$;
revoke all on function rate_ok(text, integer, interval) from public;

-- housekeeping: drop windows nobody has touched in a day (called from the heartbeat, cheaply)
create or replace function rate_sweep() returns void
language sql security definer set search_path = public as $$
  delete from api_rate where window_start < now() - interval '1 day';
$$;
revoke all on function rate_sweep() from public;

-- ---------------------------------------------------------------- page views
-- page_views is written by the anon key directly (its "anyone can log a view" policy), so the limit goes in a
-- trigger rather than a function.
create or replace function page_views_guard() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if auth.role() = 'authenticated' then return new; end if;
  if not rate_ok('pv:' || coalesce(new.ip_address, 'none'), 40, interval '1 hour') then return null; end if;
  return new;
end;
$$;
drop trigger if exists page_views_rate on page_views;
create trigger page_views_rate before insert on page_views for each row execute function page_views_guard();

-- ---------------------------------------------------------------- heartbeats + the spectate handshake
-- (6 Nov 2026) watch_token: the Admin screen writes a fresh random token when you press Watch, the heartbeat
-- hands it to that player's game, and the game then only accepts a spectator - and a voice-of-god clip - that
-- presents the same token. Without it, anyone who learned a session id could listen in or talk over the player.
alter table game_presence add column if not exists watch_token text;

drop function if exists game_heartbeat(text, text, text, text, boolean, text, text, text, text, text, timestamptz, double precision, double precision);
create or replace function game_heartbeat(
  p_sid text, p_name text, p_mode text, p_detail text, p_self boolean,
  p_ip text, p_city text, p_region text, p_country text, p_ua text, p_started timestamptz,
  p_lat double precision default null, p_lon double precision default null
) returns json
language plpgsql security definer set search_path = public as $$
declare w boolean; tok text;
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
  select coalesce(watch_at > now() - interval '2 minutes', false), watch_token into w, tok
    from game_presence where session_id = p_sid;
  if random() < 0.02 then perform rate_sweep(); end if;
  return json_build_object('watch', w, 'token', case when w then tok else null end);
end;
$$;
revoke all on function game_heartbeat(text, text, text, text, boolean, text, text, text, text, text, timestamptz, double precision, double precision) from public;
grant execute on function game_heartbeat(text, text, text, text, boolean, text, text, text, text, text, timestamptz, double precision, double precision) to anon, authenticated, service_role;

-- ---------------------------------------------------------------- campaign wins
drop function if exists campaign_win(text, integer, text, text, boolean, text, text, text, text, text, integer, integer);
create or replace function campaign_win(
  p_name text, p_secs integer, p_diff text, p_sid text, p_self boolean,
  p_ip text, p_city text, p_region text, p_country text, p_ua text,
  p_nukes integer default null, p_orbs integer default null
) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not rate_ok('win:' || coalesce(p_ip, 'none'), 5, interval '1 hour') then return; end if;
  if p_sid is not null and not rate_ok('wins:' || p_sid, 1, interval '10 minutes') then return; end if;
  insert into campaign_wins (name, total_secs, difficulty, session_id, self, ip_address, city, region, country, user_agent, nukes, orbs)
  values (p_name, p_secs, p_diff, p_sid, coalesce(p_self, false), p_ip, p_city, p_region, p_country, p_ua, p_nukes, p_orbs);
end;
$$;
revoke all on function campaign_win(text, integer, text, text, boolean, text, text, text, text, text, integer, integer) from public;
grant execute on function campaign_win(text, integer, text, text, boolean, text, text, text, text, text, integer, integer) to anon, authenticated, service_role;
