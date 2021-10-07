self.addEventListener('push', function(event) {
  let message = event.data ? event.data.text() : 'no payload';

  async function notyWork() {
    const notifications = await self.registration.getNotifications();
    let notyTitle = '';
    let notyOptions = {};
    
    if (notifications.length === 1) {
      notyTitle = 'One noty';
      notyOptions.body = message;
    }

    if (notifications.length > 1) {
      let messageCount = 0;
      notifications.map(noty => {
        if (noty.data && noty.data.count) {
          messageCount += noty.data.count;
        } else {
          messageCount++;
        }
        noty.close();
      });

      notyTitle = `Many messages`;
      notyOptions.body = `You hame ${messageCount} messages`;
      notyOptions.data.count = messageCount;
    }

    self.registration.showNotification(
      notyTitle,
      notyOptions,
    );
  };

  event.waitUntil(notyWork());
});