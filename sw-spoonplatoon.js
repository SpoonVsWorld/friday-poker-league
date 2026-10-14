// Spoon Platoon service worker. Deliberately minimal: it exists so browsers
// treat the game as an installable app (home-screen / desktop icon), and it
// passes every request straight through to the network. It does NOT cache the
// ~10MB game file - the poker app's sw.js (scope "/") already handles that
// site's caching, and this worker is registered with scope "/ironflag.html"
// only, so the two never fight over the same pages.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(fetch(event.request));
});
