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
      notifications.map(noty => {
        if (noty.data && noty.data.count) {
          messageCount += noty.data.count;
        } else {
          messageCount++;
        }
        el.close();
      });

      registration.showNotification(
        `New Messagesssss`,
        {
          body: `You hame ${messageCount} messages`,
          data: {
            count: messageCount,
          },
        },
      );
    }
  };

  event.waitUntil(notyWork());
});