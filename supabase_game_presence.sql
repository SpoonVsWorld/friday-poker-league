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
-- Same trust model as page_views: the anon key (via the Vercel function)
-- can insert/update presence rows; only a logged-in admin can read or
-- delete them.

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
create policy "game_presence_anon_insert" on game_presence for insert with check (true);
create policy "game_presence_anon_update" on game_presence for update using (true) with check (true);
create policy "game_presence_admin_select" on game_presence for select using (auth.role() = 'authenticated');
create policy "game_presence_admin_delete" on game_presence for delete using (auth.role() = 'authenticated');
