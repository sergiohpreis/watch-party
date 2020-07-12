export const waitForElement = async (reference) => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      if (checkIfElementExists(reference)) {
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

export const checkIfElementExists = (reference) =>
  document.querySelectorAll(reference).length;
