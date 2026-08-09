const CACHE = 'tn-cliente-v2';
self.addEventListener('install', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (e.request.url.includes('firestore') || e.request.url.includes('firebase') || e.request.url.includes('emailjs') || e.request.url.includes('googleapis')) return;
  e.respondWith(fetch(e.request).then(res => {
    if (res && res.status === 200) { const clone = res.clone(); caches.open(CACHE).then(c => c.put(e.request, clone)); }
    return res;
  }).catch(() => caches.match(e.request).then(c => c || caches.match('/tn/cliente/'))));
});
