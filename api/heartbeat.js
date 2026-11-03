// ------------------------------------------------------------------
// Spoon Platoon "playing now" heartbeat. Runs on Vercel's servers.
// ironflag.html POSTs here every 30 s while the game is open:
//   { sid, name, mode, detail, started, self }
// and this upserts one game_presence row per session through the
// game_heartbeat() database function (see supabase_game_presence.sql).
// Like api/log-view.js, the IP and the approximate city come from the
// request itself (Vercel's headers), not from the browser, so they
// can't be made up by the player.
//
// Fails silently: a lost heartbeat just means that player shows as
// "last seen" a little earlier on the Admin screen.
// ------------------------------------------------------------------

const SUPABASE_URL = "https://kvdsmrlzsjzovbegdalq.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2ZHNtcmx6c2p6b3ZiZWdkYWxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgxOTQ4MzAsImV4cCI6MjEwMzc3MDgzMH0.gGIFNPXR7b4Iq_eRiFIEr4-TF6UE53HKvwXnKX8caxM";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  try {
    let raw = {};
    try {
      raw = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    } catch {}

    const num = (v) => { const n = parseFloat(v); return Number.isFinite(n) ? n : null; };
    const str = (v, n) => (typeof v === "string" && v.trim() ? v.trim().slice(0, n) : null);
    const sid = str(raw.sid, 40);
    if (!sid || !/^[A-Za-z0-9_-]+$/.test(sid)) {
      res.status(400).end();
      return;
    }

    const forwardedFor = String(req.headers["x-forwarded-for"] || "");
    const ip = forwardedFor.split(",")[0].trim() || req.socket?.remoteAddress || null;
    const decode = (v) => {
      if (!v) return null;
      try {
        return decodeURIComponent(String(v));
      } catch {
        return String(v);
      }
    };

    let started = null;
    if (raw.started) {
      const d = new Date(raw.started);
      if (!isNaN(d) && Date.now() - d.getTime() < 2 * 24 * 3600 * 1000) started = d.toISOString();
    }

    const params = {
      p_sid: sid,
      p_name: str(raw.name, 24),
      p_mode: str(raw.mode, 60),
      p_detail: str(raw.detail, 80),
      p_self: raw.self === true,
      p_ip: ip || null,
      p_city: decode(req.headers["x-vercel-ip-city"]),
      p_region: decode(req.headers["x-vercel-ip-country-region"]),
      p_country: decode(req.headers["x-vercel-ip-country"]),
      p_ua: req.headers["user-agent"] || null,
      p_started: started,
      p_lat: num(req.headers["x-vercel-ip-latitude"]),
      p_lon: num(req.headers["x-vercel-ip-longitude"]),
    };

    // game_heartbeat() is a security-definer function: it does the upsert itself, so the anon key
    // never needs read/write access to the table.
    await fetch(SUPABASE_URL + "/rest/v1/rpc/game_heartbeat", {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: "Bearer " + SUPABASE_ANON_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
  } catch {
    // swallow - presence is best-effort
  }

  res.status(204).end();
}
