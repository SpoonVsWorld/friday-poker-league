// ------------------------------------------------------------------
// Spoon Platoon "Report a problem". Runs on Vercel's servers.
//   POST { kind, message, name, mode, version, device, gpu, errors, sid, self }
//        - ironflag.html, from the Report a problem button on the title screen.
//        Files one game_reports row via game_report() (see supabase_game_reports.sql).
//        IP / city come from Vercel's headers, not from the browser.
//   Answers 204 whatever happens: a player who has hit the rate limit, or a bot
//   poking the endpoint, learns nothing and sees no error.
// ------------------------------------------------------------------

const SUPABASE_URL = "https://kvdsmrlzsjzovbegdalq.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2ZHNtcmx6c2p6b3ZiZWdkYWxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgxOTQ4MzAsImV4cCI6MjEwMzc3MDgzMH0.gGIFNPXR7b4Iq_eRiFIEr4-TF6UE53HKvwXnKX8caxM";

const HEADERS = {
  apikey: SUPABASE_ANON_KEY,
  Authorization: "Bearer " + SUPABASE_ANON_KEY,
  "Content-Type": "application/json",
};

// the same shared key the game sends with every call (see api/campaign-win.js)
const SP_KEY = "sp7f3a91c4e2";
function keyOk(req) {
  const k = req.headers["x-sp-key"];
  return typeof k === "string" && k === SP_KEY;
}

const KINDS = ["crash", "graphics", "controls", "sound", "other"];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }
  if (!keyOk(req)) {
    res.status(204).end();
    return;
  }

  try {
    let raw = {};
    try {
      raw = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    } catch {}

    const str = (v, n) => (typeof v === "string" && v.trim() ? v.trim().slice(0, n) : null);
    const message = str(raw.message, 2000);
    if (!message) {
      res.status(204).end();
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

    const kind = str(raw.kind, 16);
    const params = {
      p_kind: KINDS.includes(kind) ? kind : "other",
      p_message: message,
      p_name: str(raw.name, 16),
      p_mode: str(raw.mode, 120),
      p_version: str(raw.version, 80),
      p_device: str(raw.device, 200),
      p_gpu: str(raw.gpu, 200),
      p_errors: str(raw.errors, 1200),
      p_sid: str(raw.sid, 40),
      p_self: raw.self === true,
      p_ip: ip || null,
      p_city: decode(req.headers["x-vercel-ip-city"]),
      p_region: decode(req.headers["x-vercel-ip-country-region"]),
      p_country: decode(req.headers["x-vercel-ip-country"]),
      p_ua: req.headers["user-agent"] || null,
    };

    // A report that is turned away by the rate limit still answers 204 — a flood learns nothing.
    // A database that is not set up yet answers 500, so the player is told honestly that it did not
    // go through rather than being thanked for nothing.
    const r = await fetch(SUPABASE_URL + "/rest/v1/rpc/game_report", {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(params),
    });
    if (!r.ok) {
      res.status(500).end();
      return;
    }
  } catch {
    res.status(500).end();
    return;
  }

  res.status(204).end();
}
