self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('cnv-store').then((cache) => cache.addAll([
      './index.html',
      './manifest.json',
      // මෙතනට ඔබේ අනිත් ෆයිල් වල නම් දාන්න පුලුවන්
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
