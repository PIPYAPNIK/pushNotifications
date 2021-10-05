// Register event listener for the 'push' event.
self.addEventListener('push', (event) => {
  const payload = event.data ? event.data.text() : 'no payload';
  event.waitUntil(
    self.registration.showNotification('It`s alive!!!!', {
      body: payload,
    })
  );
});