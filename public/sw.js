// Minimal service worker — required by Chrome/Edge to enable the native
// install prompt (beforeinstallprompt). NetworkOnly fetch handler: no caching,
// no offline shell, so deploys are never served stale.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Pass-through fetch handler. Presence of this listener is what makes the
// browser consider the site installable; behavior stays NetworkOnly.
self.addEventListener('fetch', (event) => {
  // no-op — let the browser handle the request normally
});
