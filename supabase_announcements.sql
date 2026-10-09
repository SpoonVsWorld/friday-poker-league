-- "What's new" banner shown to players
-- Run once in the Supabase SQL editor (Project > SQL Editor > New query).
--
-- One singleton row (id = 1) holding whatever announcement you want
-- players to see right now. The app shows it as a dismissible banner
-- at the top of the page. Each visitor's browser remembers (locally,
-- not in this table) the `updated_at` value it last dismissed, so
-- changing the message - even to the exact same text - makes the
-- banner reappear for everyone until they dismiss it again.
--
-- To post a new announcement, update the message and bump updated_at:
--   update announcements
--   set message = 'New: real card deck added to the tables!', updated_at = now()
--   where id = 1;
--
-- To hide the banner again (without deleting the row):
--   update announcements set message = null, updated_at = now() where id = 1;
--
-- Same trust model as the rest of this app: there's no login, so this
-- is read-only through the public anon key the app uses. You post
-- updates yourself from here, the SQL editor - not from inside the app.

create table if not exists announcements (
  id integer primary key default 1,
  message text,
  updated_at timestamptz not null default now(),
  constraint announcements_singleton check (id = 1)
);

insert into announcements (id, message) values (1, null) on conflict (id) do nothing;

alter table announcements enable row level security;

create policy "announcements_public_select" on announcements for select using (true);
