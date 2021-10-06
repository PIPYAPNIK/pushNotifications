self.addEventListener('push', function(event) {
  let message = event.data ? event.data.message : 'no payload';

  event.waitUntil(
    self.registration.showNotification('It`s alive!!!!', {
      body: message,
    })
  );
});