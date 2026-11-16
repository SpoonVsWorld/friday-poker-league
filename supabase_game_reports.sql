-- Spoon Platoon "Report a problem" (Matt, 16 Nov 2026).
-- Run once in the Supabase SQL editor (Project > SQL Editor > New query).
--
-- The game's title screen has a Report a problem button. It posts to api/report.js, which calls
-- game_report() below. Players are anonymous, so the write goes through a security-definer function
-- rather than a table grant, and it is rate limited the same way as the other public endpoints
-- (see supabase_rate_limits.sql): 6 reports per IP per hour, and one per browser session per minute.
-- Going over does not error — the report is simply dropped.
--
-- Reading them is admin only: the dashboard's Spoon Platoon tab lists them, and marking one done or
-- deleting it needs a logged-in session.

create table if not exists game_reports (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  kind text not null default 'other',       -- crash | graphics | controls | sound | other
  message text not null,
  name text,                                -- their call sign, if they gave one
  mode text,                                -- what they were playing when they hit Report
  version text,                             -- asset version + when the page was last built
  device text,                              -- screen, pixel ratio, touch/keyboard, low-memory path
  gpu text,                                 -- WebGL renderer string where the browser gives it up
  errors text,                              -- the last few script errors the page saw, if any
  session_id text,                          -- ties back to game_sessions
  ip_address text,
  city text,
  region text,
  country text,
  user_agent text,
  done boolean not null default false,      -- ticked off in the dashboard
  self boolean not null default false        -- Matt's own browser, kept out of the counts
);

create index if not exists game_reports_created_idx on game_reports (created_at desc);
create index if not exists game_reports_open_idx on game_reports (done, created_at desc);

alter table game_reports enable row level security;

-- Nothing anonymous reads or writes this table directly; only game_report() below writes to it.
drop policy if exists game_reports_admin_read on game_reports;
create policy game_reports_admin_read on game_reports for select
  using (auth.role() = 'authenticated');

drop policy if exists game_reports_admin_update on game_reports;
create policy game_reports_admin_update on game_reports for update
  using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

drop policy if exists game_reports_admin_delete on game_reports;
create policy game_reports_admin_delete on game_reports for delete
  using (auth.role() = 'authenticated');

-- One report. Returns true when it was filed, false when the limit turned it away.
create or replace function game_report(
  p_kind text, p_message text, p_name text, p_mode text, p_version text,
  p_device text, p_gpu text, p_errors text, p_sid text, p_self boolean,
  p_ip text, p_city text, p_region text, p_country text, p_ua text
) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if p_message is null or length(btrim(p_message)) = 0 then return false; end if;

  -- Matt's own browser is never rate limited, and never counted
  if not coalesce(p_self, false) then
    if p_ip is not null and not rate_ok('report:ip:' || p_ip, 6, interval '1 hour') then
      return false;
    end if;
    if p_sid is not null and not rate_ok('report:sid:' || p_sid, 1, interval '1 minute') then
      return false;
    end if;
  end if;

  insert into game_reports (kind, message, name, mode, version, device, gpu, errors,
                            session_id, self, ip_address, city, region, country, user_agent)
  values (coalesce(nullif(btrim(p_kind), ''), 'other'), btrim(p_message), nullif(btrim(coalesce(p_name, '')), ''),
          p_mode, p_version, p_device, p_gpu, nullif(btrim(coalesce(p_errors, '')), ''),
          p_sid, coalesce(p_self, false), p_ip, p_city, p_region, p_country, p_ua);
  return true;
end;
$$;

revoke all on function game_report(text, text, text, text, text, text, text, text, text, boolean, text, text, text, text, text) from public;
grant execute on function game_report(text, text, text, text, text, text, text, text, text, boolean, text, text, text, text, text) to anon, authenticated, service_role;
