-- "What's new" banner shown to players
-- Run once in the Supabase SQL editor (Project > SQL Editor > New query).
--
-- One singleton row (id = 1) holding whatever announcement you want
-- players to see right now. The app shows it as a dismissible banner
-- at the top of the page, and it's editable from the Admin screen
-- ("Announcement Banner" section) - no SQL needed day to day. Each
-- visitor's browser remembers (locally, not in this table) the
-- `updated_at` value it last dismissed, so saving a new message - even
-- the exact same text - makes the banner reappear for everyone until
-- they dismiss it again.
--
-- Unlike most tables in this app, this one IS gated by login: anyone
-- can read it (so the banner shows), but only an authenticated admin
-- session can write to it, matching how the Admin screen itself is
-- already protected by Supabase auth.
--
-- You normally won't need to touch SQL for this at all - the Admin
-- screen handles it. These are here only as a manual fallback:
--   update announcements
--   set message = 'New: real card deck added to the tables!', updated_at = now()
--   where id = 1;
--
--   update announcements set message = null, updated_at = now() where id = 1;

create table if not exists announcements (
  id integer primary key default 1,
  message text,
  updated_at timestamptz not null default now(),
  constraint announcements_singleton check (id = 1)
);

insert into announcements (id, message) values (1, null) on conflict (id) do nothing;

alter table announcements enable row level security;

drop policy if exists "announcements_public_select" on announcements;
drop policy if exists "announcements_authenticated_update" on announcements;
create policy "announcements_public_select" on announcements for select using (true);
create policy "announcements_authenticated_update" on announcements for update using (auth.role() = 'authenticated');
