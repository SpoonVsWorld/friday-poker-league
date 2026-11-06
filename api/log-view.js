// ------------------------------------------------------------------
// Runs on Vercel's servers (not in anyone's browser). app.js calls
// this once per visit (see the fetch("/api/log-view") call) instead
// of writing a page_views row directly from the browser, because the
// browser can't be trusted to honestly report its own IP address —
// this function reads it from the request itself, which Vercel sets
// and a visitor's own JavaScript cannot forge.
//
// City/region/country come from Vercel's free geo headers (no external
// lookup service, no API key) and are approximate — based on the
// visitor's internet provider, not GPS.
//
// Fails silently: if anything here goes wrong, we just don't log that
// one visit. Nothing here can break the app for the visitor.
// ------------------------------------------------------------------
 
const SUPABASE_URL = "https://kvdsmrlzsjzovbegdalq.supabase.co";
// Public "read-only-ish" anon key, same one already shipped in app.js.
// The page_views table's RLS policy is what actually allows this
// specific insert (see 03-page-views.sql / 08-page-views-visitor-info.sql).
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2ZHNtcmx6c2p6b3ZiZWdkYWxxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgxOTQ4MzAsImV4cCI6MjEwMzc3MDgzMH0.gGIFNPXR7b4Iq_eRiFIEr4-TF6UE53HKvwXnKX8caxM";
 

// (Matt, 6 Nov 2026) a shared key the game sends with every call. It is in the game's source, so anyone who
// reads code can find it - the point is only to turn away drive-by scripts and bots hitting the endpoint
// directly. The real limits are counted in the database (see supabase_rate_limits.sql).
const SP_KEY = "sp7f3a91c4e2";
function keyOk(req) {
  const k = req.headers["x-sp-key"];
  return typeof k === "string" && k === SP_KEY;
}

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
 
    // Which page this visit was for. The poker app sends nothing (default
    // "poker"); Spoon Platoon sends {page:"spoonplatoon"}. Anything else is
    // ignored rather than trusted, since the browser picks this value.
    let page = "poker";
    let name = null; // Spoon Platoon's call sign (title screen), if the player typed one
    try {
      const raw = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
      if (raw && raw.page === "spoonplatoon") page = "spoonplatoon";
      if (raw && typeof raw.name === "string" && raw.name.trim()) name = raw.name.trim().slice(0, 24);
    } catch {}
    const num = (v) => { const n = parseFloat(v); return Number.isFinite(n) ? n : null; };

    const body = {
      page,
      ip_address: ip || null,
      city: decode(req.headers["x-vercel-ip-city"]),
      region: decode(req.headers["x-vercel-ip-country-region"]),
      country: decode(req.headers["x-vercel-ip-country"]),
      user_agent: req.headers["user-agent"] || null,
      name,
      // Vercel's geo headers also carry an approximate lat/lon (the ISP's city): the Admin map plots these
      latitude: num(req.headers["x-vercel-ip-latitude"]),
      longitude: num(req.headers["x-vercel-ip-longitude"]),
    };
 
    await fetch(`${SUPABASE_URL}/rest/v1/page_views`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(body),
    });
  } catch (err) {
    // Swallow errors — logging a visit should never surface a problem
    // to the visitor.
  }
 
  res.status(204).end();
}
 
