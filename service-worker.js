const showNotification = (title, body, icon, data) => {
  const notificationOptions = {
    body: body,
    icon: icon ? icon : 'images/touch/chrome-touch-icon-192x192.png',
    tag: 'notification',
    data: data
  };

  self.registration.showNotification(title, notificationOptions);
  return;
}

self.addEventListener('push', async (event) => {
  let message = event.data ? event.data.message : 'no payload';
  event.waitUntil(() => {
    const notifications = await self.registration.getNotifications();
    console.log(notifications);

    if (notifications && notifications.length !== 0) {
      let notificationCount = 1;
      for (let i = 0; i <= notifications.length - 1; i++) {
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

    showNotification('Test title', message, icon, notificationData);
  }
  );
});