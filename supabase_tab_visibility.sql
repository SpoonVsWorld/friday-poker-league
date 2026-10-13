-- Which public tabs (Standings, Players, Slots, Iron Flag, etc.) are
-- currently shown to players.
-- Run once in the Supabase SQL editor (Project > SQL Editor > New query).
--
-- One singleton row (id = 1) holding a JSON array of the tab keys that
-- should be HIDDEN right now (an empty array means every tab shows).
-- Editable from the Admin screen ("Visible Tabs" section) - no SQL
-- needed day to day.
--
-- Same pattern as supabase_announcements.sql: anyone can read it (so the
-- tab bar renders correctly for players), but only an authenticated admin
-- session can write to it.
--
-- You normally won't need to touch SQL for this at all - the Admin
-- screen handles it. These are here only as a manual fallback, e.g. to
-- hide Iron Flag and Slots:
--   update tab_visibility
--   set hidden_tabs = '["ironflag", "slots"]'::jsonb, updated_at = now()
--   where id = 1;
--
--   update tab_visibility set hidden_tabs = '[]'::jsonb, updated_at = now() where id = 1;

create table if not exists tab_visibility (
  id integer primary key default 1,
  hidden_tabs jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now(),
  constraint tab_visibility_singleton check (id = 1)
);

insert into tab_visibility (id, hidden_tabs) values (1, '[]'::jsonb) on conflict (id) do nothing;

alter table tab_visibility enable row level security;

drop policy if exists "tab_visibility_public_select" on tab_visibility;
drop policy if exists "tab_visibility_authenticated_update" on tab_visibility;
create policy "tab_visibility_public_select" on tab_visibility for select using (true);
create policy "tab_visibility_authenticated_update" on tab_visibility for update using (auth.role() = 'authenticated');
