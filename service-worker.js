self.addEventListener('push', function(event) {
  let message = event.data ? event.data.message : 'no payload';

  event.waitUntil(async () => {
    const notifications = await registration.getNotifications();
    
    if (notifications.length === 1) {
      registration.showNotification(
        `New Message`,
        {
          body: message,
        },
      );
    }

    if (notifications.length > 1) {
      let messageCount = 0;
      notifications.map(el => {
        el.close();
        messageCount++;
      });

      registration.showNotification(
        `New Messagesssss`,
        {
          body: `You hame ${messageCount} messages`,
        },
      );
    }
  });
});