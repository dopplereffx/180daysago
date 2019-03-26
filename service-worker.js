const CACHE = "180-v3";
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(["/", "/index.html", "/logo-32x32.png"]);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
