// Register a Service Worker.
navigator.serviceWorker.register('./service-worker.js');

const init = async () => {
  const sw = await navigator.serviceWorker.ready;
  const push = await sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: 'BNfHtKa0DJZlIGpqpNdhwWshIB_RnsnGd6xmG2IIG4l69Yby_eTPEp2awB2pOs6Vi3zMbq-xeK-HPATtGPrVDnM',
  });

  console.log(push);
}

init();