self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("editor-cache").then(cache => {
      return cache.addAll([
        "./UME-lite.html",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
