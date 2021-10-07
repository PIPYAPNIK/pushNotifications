const push = require('web-push');

const vapidKeys = {
  publicKey: 'BNfHtKa0DJZlIGpqpNdhwWshIB_RnsnGd6xmG2IIG4l69Yby_eTPEp2awB2pOs6Vi3zMbq-xeK-HPATtGPrVDnM',
  privateKey: 'DikogaDjSUmoaY6x8Q7FVCjTIweh50qvnk_306K6mNs'
}; // Сгененрированные ключи

const sub = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/cabiHyjuwcQ:APA91bFEAkNwaqgqG4eu-oqjrZErEGYeIE7MQ7Q5eDdkzX62U9HTRsBqNfpbwLU0TK7ayGYfr_GZrnfUwzPW9F3PyU9oeTYkASugu-llsQUXdhFpvhaZQPqlHZVeMx3M2ogAX-TDUKia",
  "expirationTime": null,
  "keys": {
      "p256dh": "BFzIaU13EM25SjrRqxPOfPK99nCo3ysse8ZVR-QP03eNLg6SNvqP6WmIoy6p5rGhhHRBTGwGx0ZLoYxZiC5JLA8",
      "auth": "tkVwpbpv2g031weO3O6huw"
  }
}; // Объект подписки переданный с фронта

push.setVapidDetails('mailto:mirrimkir000@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);
push.sendNotification(sub, 'test'); // Отправляем сообщение и трирерим pushManager