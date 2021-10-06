const push = require('web-push');

const vapidKeys = {
  publicKey: 'BNfHtKa0DJZlIGpqpNdhwWshIB_RnsnGd6xmG2IIG4l69Yby_eTPEp2awB2pOs6Vi3zMbq-xeK-HPATtGPrVDnM',
  privateKey: 'DikogaDjSUmoaY6x8Q7FVCjTIweh50qvnk_306K6mNs'
}; // Сгененрированные ключи

const sub = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/c_s-sHM6kEY:APA91bFRE_9qeP6B5tdd6qR4cgC1fk60r-NweKK_zIW4c3Aj8gLOEOu6UJzszToncub4bRiWfW_j84GRzbEU6S94eB8WDrllhoH9mFP6yPL2XStITptfXFLj1GgRx2Is4OaUFtXcWhcf",
  "expirationTime": null,
  "keys": {
      "p256dh": "BAuvSUDbF5AZqCB8GbtwEg2NRyfl90epodDH_LKtg3_af7aEFP_b2m2mL5pPm2LHUO0b05ybrUSTXcvIr3D_7xo",
      "auth": "2_ZVdHjvSo_mYoyK_e5IVw"
  }
}; // Объект подписки переданный с фронта

push.setVapidDetails('mailto:mirrimkir000@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);
push.sendNotification(sub, 'test'); // Отправляем сообщение и трирерим pushManager