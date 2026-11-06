-- Spoon Platoon "Campaign conquered by" board (Matt, 3 Nov 2026).
-- Run once in the Supabase SQL editor (Project > SQL Editor > New query).
--
-- When a player finishes Operation 20, ironflag.html posts their call sign
-- to /api/campaign-win (a Vercel function, see api/campaign-win.js), which
-- inserts a row here through campaign_win() below. The game's title screen
-- shows the public roll (one line per call sign: first win and best total
-- time) through campaign_hall(); the Admin screen (Site Stats) lists every
-- win with IP, city and device.

create table if not exists campaign_wins (
  id bigserial primary key,
  name text not null,
  total_secs integer,
  difficulty text,
  session_id text,
  self boolean not null default false,
  ip_address text,
  city text,
  region text,
  country text,
  user_agent text,
  won_at timestamptz not null default now()
);

create index if not exists campaign_wins_won_at_idx on campaign_wins (won_at);

alter table campaign_wins enable row level security;

drop policy if exists "campaign_wins_admin_select" on campaign_wins;
drop policy if exists "campaign_wins_admin_delete" on campaign_wins;
create policy "campaign_wins_admin_select" on campaign_wins for select using (auth.role() = 'authenticated');
create policy "campaign_wins_admin_delete" on campaign_wins for delete using (auth.role() = 'authenticated');

-- insert (anon key via the Vercel function; runs as the table owner)
create or replace function campaign_win(
  p_name text, p_secs integer, p_diff text, p_sid text, p_self boolean,
  p_ip text, p_city text, p_region text, p_country text, p_ua text
) returns void
language sql security definer set search_path = public as $$
  insert into campaign_wins (name, total_secs, difficulty, session_id, self, ip_address, city, region, country, user_agent)
  values (p_name, p_secs, p_diff, p_sid, coalesce(p_self, false), p_ip, p_city, p_region, p_country, p_ua);
$$;
revoke all on function campaign_win(text, integer, text, text, boolean, text, text, text, text, text) from public;
grant execute on function campaign_win(text, integer, text, text, boolean, text, text, text, text, text) to anon, authenticated, service_role;

-- public roll for the title screen: one line per call sign (case-insensitive), in the order they first beat it
create or replace function campaign_hall()
returns table (name text, first_won timestamptz, best_secs integer, wins bigint)
language sql security definer set search_path = public stable as $$
  select (array_agg(name order by won_at))[1] as name, min(won_at) as first_won, min(total_secs) as best_secs, count(*) as wins
  from campaign_wins
  group by lower(name)
  order by min(won_at)
  limit 200;
$$;
revoke all on function campaign_hall() from public;
grant execute on function campaign_hall() to anon, authenticated, service_role;

-- (5 Nov 2026) how much heavy ordnance the run cost: counted by the game (ironflag.html tally()) and sent with the win
alter table campaign_wins add column if not exists nukes integer;
alter table campaign_wins add column if not exists orbs integer;
drop function if exists campaign_win(text, integer, text, text, boolean, text, text, text, text, text);
create or replace function campaign_win(
  p_name text, p_secs integer, p_diff text, p_sid text, p_self boolean,
  p_ip text, p_city text, p_region text, p_country text, p_ua text,
  p_nukes integer default null, p_orbs integer default null
) returns void
language sql security definer set search_path = public as $$
  insert into campaign_wins (name, total_secs, difficulty, session_id, self, ip_address, city, region, country, user_agent, nukes, orbs)
  values (p_name, p_secs, p_diff, p_sid, coalesce(p_self, false), p_ip, p_city, p_region, p_country, p_ua, p_nukes, p_orbs);
$$;
revoke all on function campaign_win(text, integer, text, text, boolean, text, text, text, text, text, integer, integer) from public;
grant execute on function campaign_win(text, integer, text, text, boolean, text, text, text, text, text, integer, integer) to anon, authenticated, service_role;

-- the public roll carries the best (lowest) warhead count that call sign has managed
drop function if exists campaign_hall();
create or replace function campaign_hall()
returns table (name text, first_won timestamptz, best_secs integer, wins bigint, nukes integer, orbs integer)
language sql security definer set search_path = public stable as $$
  select (array_agg(name order by won_at))[1] as name, min(won_at) as first_won, min(total_secs) as best_secs, count(*) as wins,
         min(nukes) as nukes, min(orbs) as orbs
  from campaign_wins
  group by lower(name)
  order by min(won_at)
  limit 200;
$$;
revoke all on function campaign_hall() from public;
grant execute on function campaign_hall() to anon, authenticated, service_role;
