self.addEventListener('push', (event) => {
  let message = event.data ? event.data.message : 'no payload';
  event.waitUntil(function() {
    return self.registration.getNotifications(notificationFilter)
      .then(function(notifications) {
        if (notifications && notifications.length !== 0) {
          let notificationCount = 1;
          for (let i = 0; i < notifications.length; i++) {
            let existingNotification = notifications[i];
            if (existingNotification.data && existingNotification.data.notificationCount) {
              notificationCount += existingNotification.data.notificationCount;
            } else {
              notificationCount++;
            }
            existingNotification.close();
          }
          message = 'You have ' + notificationCount + ' weather updates.';
          notificationData.notificationCount = notificationCount;
        }

        const notificationOptions = {
          body: message,
          tag: 'notification',
          data: notificationData,
        };
    
        return self.registration.showNotification('Test notification', notificationOptions);
      });
  });
});