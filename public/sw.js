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
