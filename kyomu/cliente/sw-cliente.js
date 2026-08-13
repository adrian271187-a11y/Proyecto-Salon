const CACHE = 'kyomu-cliente-v7';
const ASSETS = ['/kyomu/cliente/', '/kyomu/cliente/index.html', '/kyomu/cliente/manifest.json', '/kyomu/img/logo.jpeg'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).catch(()=>{})); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => { if(e.request.method!=='GET'||e.request.url.includes('firestore')||e.request.url.includes('googleapis')) return;
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))); });
