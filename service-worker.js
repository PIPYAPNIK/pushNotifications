self.addEventListener('push', function(event) {
  let message = event.data ? event.data.message : 'no payload';

  async function notyWork() {
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
        messageCount++;
        el.close();
      });

      registration.showNotification(
        `New Messagesssss`,
        {
          body: `You hame ${messageCount} messages`,
        },
      );
    }
  };

  event.waitUntil(notyWork());
});