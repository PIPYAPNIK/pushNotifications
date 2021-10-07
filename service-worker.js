self.addEventListener('push', function(event) {
  let message = event.data ? event.data.message : 'no payload';

  event.waitUntil(
    self.registration.showNotification('It`s alive!!!!', {
      body: message,
    })
  );
});

/*
  const promiseChain = registration.getNotifications()
    .then(notifications => {
      let currentNotification;

      for(let i = 0; i < notifications.length; i++) {
        if (notifications[i].data) {
          currentNotification = notifications[i];
        }
      }
      return currentNotification;
    }).then((currentNotification) => {
      let notificationTitle;
      const options = {};

      if (currentNotification) {
        const messageCount = currentNotification.data.newMessageCount + 1;

        options.body = `You have ${messageCount} new messages.`;
        options.data = {
          newMessageCount: messageCount
        };
        notificationTitle = `New Messages`;

        currentNotification.close();
      } else {
        options.body = `"${message}"`;
        options.data = {
          newMessageCount: 1
        };
        notificationTitle = `New Message`;
      }

      return registration.showNotification(
        notificationTitle,
        options,
      );
    });
*/