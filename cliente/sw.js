const CACHE = 'salon-cliente-v2';

// Al instalar: limpia cachés viejos y toma control inmediato
self.addEventListener('install', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.skipWaiting())
  );
});

// Al activar: toma control de todas las pestañas abiertas
self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});

// Fetch: siempre red primero, caché como fallback (no sirve stale)
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // Firebase, EmailJS y APIs externas: siempre red, nunca cachear
  if (
    e.request.url.includes('firestore') ||
    e.request.url.includes('firebase') ||
    e.request.url.includes('emailjs') ||
    e.request.url.includes('googleapis') && e.request.url.includes('fonts')
  ) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Guardar copia fresca en caché
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request)
        .then(cached => cached || caches.match('/cliente/'))
      )
  );
});
