/**
 * Zenn Studios — Service Worker
 *
 * Strategy:
 *  - Static assets (JS, CSS, images, fonts): Cache-first, falling back to network.
 *  - HTML navigation requests:               Network-first, falling back to cache,
 *                                            then to the offline page.
 *  - API / external requests:                Network-only (never cached).
 */

const CACHE_VERSION = "v1";
const STATIC_CACHE = `zenn-static-${CACHE_VERSION}`;
const PAGE_CACHE = `zenn-pages-${CACHE_VERSION}`;
const OFFLINE_URL = "/offline";

// Assets to pre-cache on install
const PRECACHE_ASSETS = [
  "/",
  "/about",
  "/work",
  "/capabilities",
  "/insights",
  "/labs",
  "/enquiry",
  "/offline",
];

// ── Install ──────────────────────────────────────────────────────────────────
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ── Activate ─────────────────────────────────────────────────────────────────
self.addEventListener("activate", (event) => {
  const validCaches = [STATIC_CACHE, PAGE_CACHE];

  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => !validCaches.includes(key))
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

// ── Fetch ────────────────────────────────────────────────────────────────────
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignore non-GET, cross-origin, and Next.js internals
  if (
    request.method !== "GET" ||
    url.origin !== self.location.origin ||
    url.pathname.startsWith("/_next/webpack-hmr") ||
    url.pathname.startsWith("/_next/static/webpack")
  ) {
    return;
  }

  // Static assets — Cache-first
  if (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/images/") ||
    /\.(png|jpg|jpeg|svg|gif|webp|woff2?|ttf|otf|ico)$/.test(url.pathname)
  ) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // HTML navigation — Network-first with offline fallback
  if (request.mode === "navigate" || request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(networkFirstWithOfflineFallback(request));
    return;
  }

  // Everything else — Network-first
  event.respondWith(networkFirst(request, PAGE_CACHE));
});

// ── Strategies ───────────────────────────────────────────────────────────────

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;

  const network = await fetch(request);
  if (network.ok) {
    const cache = await caches.open(cacheName);
    cache.put(request, network.clone());
  }
  return network;
}

async function networkFirst(request, cacheName) {
  try {
    const network = await fetch(request);
    if (network.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, network.clone());
    }
    return network;
  } catch {
    const cached = await caches.match(request);
    return cached ?? Response.error();
  }
}

async function networkFirstWithOfflineFallback(request) {
  try {
    const network = await fetch(request);
    if (network.ok) {
      const cache = await caches.open(PAGE_CACHE);
      cache.put(request, network.clone());
    }
    return network;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;

    // Last resort: serve the offline page
    const offlinePage = await caches.match(OFFLINE_URL);
    return offlinePage ?? new Response("You are offline.", {
      status: 503,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
