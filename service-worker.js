self.addEventListener('push', function(event) {
  let message = event.data ? event.data.text() : 'no payload';

  async function notyWork() {
    const notifications = await registration.getNotifications();
    let notyTitle = 'One noty';
    let notyOptions = {
      body: message,
      data: {},
    };

    if (notifications && notifications.length) {
      let messageCount = 1;
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

    registration.showNotification(
      notyTitle,
      notyOptions,
    );
  };

  event.waitUntil(notyWork());
});