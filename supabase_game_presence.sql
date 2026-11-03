-- "Playing now" for Spoon Platoon (Admin > Site Stats).
-- Run once in the Supabase SQL editor (Project > SQL Editor > New query).
--
-- While the game is open, ironflag.html sends a heartbeat every 30 s to
-- /api/heartbeat (a Vercel function, see api/heartbeat.js), which upserts
-- one row per browser session here with what the player is doing, the
-- name they typed in the online lobby (if any), and the approximate
-- location Vercel derives from their IP. The Admin screen lists every row
-- whose last_seen is under a minute old as "playing now" and refreshes
-- itself every 15 s. Rows older than two days are cleaned up by the Admin
-- screen when it loads.
--
-- Heartbeats arrive through the game_heartbeat() function below (anon key,
-- via the Vercel function); only a logged-in admin can read or delete rows.

create table if not exists game_presence (
  session_id text primary key,
  name text,
  mode text,
  detail text,
  self boolean not null default false,
  ip_address text,
  city text,
  region text,
  country text,
  user_agent text,
  started_at timestamptz not null default now(),
  last_seen timestamptz not null default now()
);

create index if not exists game_presence_last_seen_idx on game_presence (last_seen desc);

alter table game_presence enable row level security;

drop policy if exists "game_presence_anon_insert" on game_presence;
drop policy if exists "game_presence_anon_update" on game_presence;
drop policy if exists "game_presence_admin_select" on game_presence;
drop policy if exists "game_presence_admin_delete" on game_presence;
create policy "game_presence_admin_select" on game_presence for select using (auth.role() = 'authenticated');
create policy "game_presence_admin_delete" on game_presence for delete using (auth.role() = 'authenticated');

-- The heartbeat itself goes through this function (called by api/heartbeat.js
-- with the anon key). It runs as the table owner, so the anon role needs no
-- insert/update/select policies on the table at all - it can only call this.
-- (3 Nov 2026) approximate coordinates for the Admin "Where it's played" map, from Vercel's geo headers;
-- page_views gets the same plus the player's call sign
alter table game_presence add column if not exists latitude double precision;
alter table game_presence add column if not exists longitude double precision;
alter table page_views add column if not exists name text;
alter table page_views add column if not exists latitude double precision;
alter table page_views add column if not exists longitude double precision;
drop function if exists game_heartbeat(text, text, text, text, boolean, text, text, text, text, text, timestamptz);

create or replace function game_heartbeat(
  p_sid text, p_name text, p_mode text, p_detail text, p_self boolean,
  p_ip text, p_city text, p_region text, p_country text, p_ua text, p_started timestamptz,
  p_lat double precision default null, p_lon double precision default null
) returns void
language sql security definer set search_path = public as $$
  insert into game_presence (session_id, name, mode, detail, self, ip_address, city, region, country, user_agent, started_at, last_seen, latitude, longitude)
  values (p_sid, p_name, p_mode, p_detail, coalesce(p_self, false), p_ip, p_city, p_region, p_country, p_ua, coalesce(p_started, now()), now(), p_lat, p_lon)
  on conflict (session_id) do update set
    name = excluded.name, mode = excluded.mode, detail = excluded.detail, self = excluded.self,
    ip_address = excluded.ip_address, city = excluded.city, region = excluded.region, country = excluded.country,
    user_agent = excluded.user_agent, last_seen = now(), latitude = excluded.latitude, longitude = excluded.longitude;
$$;
revoke all on function game_heartbeat(text, text, text, text, boolean, text, text, text, text, text, timestamptz, double precision, double precision) from public;
grant execute on function game_heartbeat(text, text, text, text, boolean, text, text, text, text, text, timestamptz, double precision, double precision) to anon, authenticated, service_role;
