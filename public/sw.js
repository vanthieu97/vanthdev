const CACHE_NAME = 'vanthdev-v1';
const PRECACHE_URLS = [
  '/vanthdev-logo.svg',
  '/vanthdev-logo-192.png',
  '/icon.png',
  '/apple-icon.png',
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        return Promise.allSettled(
          PRECACHE_URLS.map(function (u) {
            return cache.add(u);
          })
        );
      })
      .then(function () {
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches
      .keys()
      .then(function (names) {
        return Promise.all(
          names
            .filter(function (n) {
              return n !== CACHE_NAME;
            })
            .map(function (n) {
              return caches.delete(n);
            })
        );
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith('/api/') && url.pathname.includes('news')) {
    event.respondWith(staleWhileRevalidate(event.request));
    return;
  }
  if (
    url.pathname.startsWith('/_next/static/') ||
    url.pathname.match(/\.(ico|png|jpg|jpeg|webp|svg|woff2?|css|js)$/i) ||
    url.pathname === '/vanthdev-logo.svg' ||
    url.pathname.startsWith('/vanthdev-logo') ||
    url.pathname.startsWith('/icon') ||
    url.pathname.startsWith('/apple-icon') ||
    url.pathname.startsWith('/og-')
  ) {
    event.respondWith(cacheFirst(event.request));
    return;
  }
  if (
    url.pathname === '/' ||
    url.pathname === '/news' ||
    url.pathname === '/gia-vang' ||
    url.pathname === '/champions-league' ||
    url.pathname.startsWith('/en') ||
    url.pathname.startsWith('/film-reviews') ||
    url.pathname.startsWith('/news/') ||
    url.pathname.startsWith('/lunar-new-year-countdown') ||
    url.pathname.startsWith('/smash-glass') ||
    url.pathname.startsWith('/solar-system')
  ) {
    event.respondWith(staleWhileRevalidate(event.request));
  }
});

function cacheFirst(request) {
  return caches.match(request).then(function (cached) {
    return (
      cached ||
      fetch(request).then(function (res) {
        if (res.ok && res.type === 'basic') {
          var clone = res.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(request, clone);
          });
        }
        return res;
      })
    );
  });
}

function staleWhileRevalidate(request) {
  return caches
    .match(request)
    .then(function (cached) {
      var fetchPromise = fetch(request)
        .then(function (res) {
          if (res.ok && res.type === 'basic') {
            var clone = res.clone();
            caches.open(CACHE_NAME).then(function (cache) {
              cache.put(request, clone);
            });
          }
          return res;
        })
        .catch(function () {
          return null;
        });
      if (cached) {
        fetchPromise;
        return cached;
      }
      return fetchPromise
        .then(function (fresh) {
          return fresh || caches.match(request);
        })
        .then(function (r) {
          return r || new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
        });
    })
    .catch(function () {
      return caches.match(request);
    });
}

self.addEventListener('push', function (event) {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body ?? '',
      icon: data.icon ?? '/vanthdev-logo-192.png',
      badge: '/vanthdev-logo-192.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        url: data.url ?? '/',
      },
    };
    event.waitUntil(self.registration.showNotification(data.title ?? 'vanthdev', options));
  }
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  const url = event.notification.data?.url ?? '/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          return client.navigate(url).then((c) => (c ? c.focus() : null));
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});
