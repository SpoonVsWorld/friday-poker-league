// ------------------------------------------------------------------
// Spoon Platoon "Campaign conquered by" board. Runs on Vercel's servers.
//   POST { name, secs, diff, sid, self }  - ironflag.html, the moment
//        Operation 20 is won: one campaign_wins row via campaign_win()
//        (see supabase_campaign_wins.sql). IP / city come from Vercel's
//        headers, not from the browser.
//   GET  - the public roll for the title screen: [{name, first_won,
//        best_secs, wins}] in the order they first beat it (campaign_hall()).
// ------------------------------------------------------------------

const SUPABASE_URL = "https://kvdsmrlzsjzovbegdalq.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2ZHNtcmx6c2p6b3ZiZWdkYWxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgxOTQ4MzAsImV4cCI6MjEwMzc3MDgzMH0.gGIFNPXR7b4Iq_eRiFIEr4-TF6UE53HKvwXnKX8caxM";

const HEADERS = {
  apikey: SUPABASE_ANON_KEY,
  Authorization: "Bearer " + SUPABASE_ANON_KEY,
  "Content-Type": "application/json",
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const r = await fetch(SUPABASE_URL + "/rest/v1/rpc/campaign_hall", { method: "POST", headers: HEADERS, body: "{}" });
      const rows = r.ok ? await r.json() : [];
      res.setHeader("Cache-Control", "s-maxage=30, stale-while-revalidate=300");
      res.status(200).json(Array.isArray(rows) ? rows : []);
    } catch {
      res.status(200).json([]);
    }
    return;
  }
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  try {
    let raw = {};
    try {
      raw = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
    } catch {}

    const str = (v, n) => (typeof v === "string" && v.trim() ? v.trim().slice(0, n) : null);
    const name = str(raw.name, 16);
    if (!name) {
      res.status(400).end();
      return;
    }
    const secs = Number.isFinite(+raw.secs) && +raw.secs > 0 ? Math.round(+raw.secs) : null;
    const count = (v) => (Number.isFinite(+v) && +v >= 0 && +v < 10000 ? Math.round(+v) : null);

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

    const params = {
      p_name: name,
      p_secs: secs,
      p_diff: str(raw.diff, 12),
      p_sid: str(raw.sid, 40),
      p_self: raw.self === true,
      p_ip: ip || null,
      p_city: decode(req.headers["x-vercel-ip-city"]),
      p_region: decode(req.headers["x-vercel-ip-country-region"]),
      p_country: decode(req.headers["x-vercel-ip-country"]),
      p_ua: req.headers["user-agent"] || null,
      p_nukes: count(raw.nukes),
      p_orbs: count(raw.orbs),
    };

    await fetch(SUPABASE_URL + "/rest/v1/rpc/campaign_win", { method: "POST", headers: HEADERS, body: JSON.stringify(params) });
  } catch {
    // best-effort
  }

  res.status(204).end();
}
