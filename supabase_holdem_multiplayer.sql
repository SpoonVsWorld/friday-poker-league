-- Shared multiplayer Texas Hold'em table
-- Run this once in the Supabase SQL editor (Project > SQL Editor > New query),
-- AFTER supabase_blackjack_leaderboard.sql if you haven't already run that.
--
-- This creates one shared table (holdem_table, a single settings/state row)
-- and an 8-seat roster (holdem_seats) that every visitor's browser reads and
-- writes to directly, synced live via Supabase Realtime. There is no login
-- on this site, so — same trust model as everything else here (Feedback,
-- Blackjack chips) — anyone could technically edit any seat or read anyone's
-- hole cards via the raw API. The UI never shows you someone else's cards,
-- but this is worth knowing: it's fine for a trusted friend group, not a
-- security boundary.

-- ------------------------------------------------------------------
-- holdem_table — one singleton row (id = 1) holding the whole table's
-- shared state: community cards, pot/street info, whose turn it is, which
-- seat is currently "host" (the browser responsible for dealing, running
-- AI turns, and enforcing the auto-fold timeout), and the AI-fill setting.
-- ------------------------------------------------------------------
create table if not exists holdem_table (
  id integer primary key default 1,
  fill_empty_with_ai boolean not null default true,
  street text not null default 'waiting',        -- waiting | preflop | flop | turn | river | showdown
  community_cards jsonb not null default '[]'::jsonb,
  current_bet integer not null default 0,
  min_raise integer not null default 20,
  dealer_seat integer,
  action_seat integer,
  hand_number integer not null default 0,
  host_seat integer,
  host_last_beat timestamptz,
  action_deadline timestamptz,
  pending_seats jsonb not null default '[]'::jsonb, -- ordered seat_numbers still owed an action this betting round
  hand_seats jsonb not null default '[]'::jsonb,     -- seat_numbers dealt into the current hand (fixed at deal time)
  log jsonb not null default '[]'::jsonb,
  version integer not null default 0,
  updated_at timestamptz not null default now(),
  constraint holdem_table_singleton check (id = 1)
);

insert into holdem_table (id) values (1) on conflict (id) do nothing;

-- ------------------------------------------------------------------
-- holdem_seats — 8 fixed seats. Empty seats have player_id null and
-- is_ai false; an AI-filled seat has is_ai true; a human-occupied seat
-- has player_id set to that league player's id.
-- ------------------------------------------------------------------
create table if not exists holdem_seats (
  seat_number integer primary key check (seat_number >= 0 and seat_number < 8),
  player_id uuid references players(id) on delete set null,
  player_name text,
  is_ai boolean not null default false,
  personality text,                               -- tight | loose | aggressive (AI seats only)
  status text not null default 'empty',           -- empty | seated | waiting | sitting_out
  stack integer not null default 1000,
  hole_cards jsonb not null default '[]'::jsonb,
  bet_this_street integer not null default 0,
  total_contributed integer not null default 0,
  folded boolean not null default false,
  all_in boolean not null default false,
  idle_hands integer not null default 0,           -- consecutive hands auto-folded (never acted) in a row;
                                                     -- resets to 0 on any real action, hitting the limit
                                                     -- (see HOLDEM_IDLE_HAND_LIMIT in app.js) frees the seat
  last_seen timestamptz,
  joined_at timestamptz,
  updated_at timestamptz not null default now()
);

-- Re-running this file on a database that already has holdem_seats from
-- before idle_hands existed (no-op if the column's already there).
alter table holdem_seats add column if not exists idle_hands integer not null default 0;

insert into holdem_seats (seat_number)
select n from generate_series(0, 7) as n
on conflict (seat_number) do nothing;

alter table holdem_table enable row level security;
alter table holdem_seats enable row level security;

create policy "holdem_table_public_select" on holdem_table for select using (true);
create policy "holdem_table_public_update" on holdem_table for update using (true);

create policy "holdem_seats_public_select" on holdem_seats for select using (true);
create policy "holdem_seats_public_update" on holdem_seats for update using (true);

-- Realtime: push live changes to every connected browser.
alter publication supabase_realtime add table holdem_table;
alter publication supabase_realtime add table holdem_seats;
