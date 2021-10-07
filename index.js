navigator.serviceWorker.register('./service-worker.js'); // Регистрируем

console.log(navigator.serviceWorker.getRegistrations());

const init = async () => {
  const sw = await navigator.serviceWorker.ready; // Запускаем
  const push = await sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: 'BNfHtKa0DJZlIGpqpNdhwWshIB_RnsnGd6xmG2IIG4l69Yby_eTPEp2awB2pOs6Vi3zMbq-xeK-HPATtGPrVDnM', // БЭК генерирует ключ и мы его запрашиваем перед подпиской
  }); // Подписываем. Объект подписки отдать на БЭК.

  console.log(push);
}

init();