const push = require('web-push');

const vapidKeys = {
  publicKey: 'BNfHtKa0DJZlIGpqpNdhwWshIB_RnsnGd6xmG2IIG4l69Yby_eTPEp2awB2pOs6Vi3zMbq-xeK-HPATtGPrVDnM',
  privateKey: 'DikogaDjSUmoaY6x8Q7FVCjTIweh50qvnk_306K6mNs'
}; // Сгененрированные ключи

const sub = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/dtfM5rAuh5w:APA91bFP1henHtRYvOBNoDc5IV9iYfh2RMDHM44kWwBZaZs7vxFK3NvaUkjhtXGHdxzCIlxpR-RE-v7jJdbmLT4JGxyMMV8jcNNSN35A47oHGJTs43TgIDJyPKOSaePgoGCmoeLlMDg_",
  "expirationTime": null,
  "keys": {
      "p256dh": "BCZtj-jmJN37t1CrqfeuoltaMglOjzlxrGe-ashUFENqID4CX4qxesZhg6ZTgDW9-Cd-bStIvUcKDKbCIWUw014",
      "auth": "8q77eicmUnSrujk_NTzLPg"
  }
}; // Объект подписки переданный с фронта

push.setVapidDetails('mailto:mirrimkir000@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);
push.sendNotification(sub, 'test'); // Отправляем сообщение и трирерим pushManager