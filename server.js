const push = require('web-push');

const vapidKeys = {
  publicKey: 'BNfHtKa0DJZlIGpqpNdhwWshIB_RnsnGd6xmG2IIG4l69Yby_eTPEp2awB2pOs6Vi3zMbq-xeK-HPATtGPrVDnM',
  privateKey: 'DikogaDjSUmoaY6x8Q7FVCjTIweh50qvnk_306K6mNs'
}; // Сгененрированные ключи

const sub = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/dYSBuhTYt5k:APA91bECtF7C96hwh1EuRNfKhNQmI1yxUNdjF1kDow7PeqYkithQOTpY3gLjT9d5cJKjtF84H14QP272XbpdGfIwniOEzorYxbVcj-KihgDEYMBvWN6HMtMzuTkZqepCE6ZZNvIIHkht",
  "expirationTime": null,
  "keys": {
      "p256dh": "BDYU-cAdOsjCrtIEAI9AVNibCILFOIf_9ViuKYkPcvpKgBoql6aS6CV_4XE9XsSpUX4FdO0qrOx0yRURAEq_eaI",
      "auth": "LWmF0bay0NylAEIwHEZ_pA"
  }
}; // Объект подписки переданный с фронта

push.setVapidDetails('mailto:mirrimkir000@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);
push.sendNotification(sub, 'test'); // Отправляем сообщение и трирерим pushManager