export const waitForElement = async (reference) => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (document.querySelectorAll(reference).length) {
        clearInterval(interval);
        clearTimeout(autoClearInterval);
        resolve();
      }
    }, 1000);
    const autoClearInterval = setTimeout(() => {
      clearInterval(interval);
      clearTimeout(autoClearInterval);
      reject(`Elemento ${reference} não encontrado`);
    }, 10000);
  });
};
