const push = require('web-push');

const vapidKeys = {
  publicKey: 'BNfHtKa0DJZlIGpqpNdhwWshIB_RnsnGd6xmG2IIG4l69Yby_eTPEp2awB2pOs6Vi3zMbq-xeK-HPATtGPrVDnM',
  privateKey: 'DikogaDjSUmoaY6x8Q7FVCjTIweh50qvnk_306K6mNs'
};

const sub = {};

push.setVapidDetails('mailto:mirrimkir000@gmail.com', ...vapidKeys);
push.sendNotification(sub, 'test');