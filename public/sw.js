const CACHE_NAME = "buildsupply-v1";
const STATIC_URLS = [
  "/",
  "/about",
  "/products",
  "/calculator",
  "/blogs",
  "/faqs",
  "/resources",
  "/contact",
];

// Install event - cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_URLS).catch((error) => {
        console.log("Cache addAll error:", error);
      });
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - network first, fallback to cache
self.addEventListener("fetch", (event) => {
  // Don't cache non-GET requests
  if (event.request.method !== "GET") {
    return;
  }

  // Skip chrome extensions and API calls
  if (
    event.request.url.startsWith("chrome-extension://") ||
    event.request.url.includes("/_next/")
  ) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clone the response
        const clonedResponse = response.clone();

        // Cache successful responses
        if (response.status === 200) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clonedResponse);
          });
        }

        return response;
      })
      .catch(() => {
        // Return cached version if network fails
        return caches.match(event.request).then((response) => {
          if (response) {
            return response;
          }

          // Return offline page if available
          if (event.request.mode === "navigate") {
            return caches.match("/");
          }

          return new Response("Offline - Content not available", {
            status: 503,
            statusText: "Service Unavailable",
            headers: new Headers({
              "Content-Type": "text/plain",
            }),
          });
        });
      })
  );
});
