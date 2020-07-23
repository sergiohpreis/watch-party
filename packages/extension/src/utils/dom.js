export const waitForElement = async (reference) => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      console.log('Searching for', reference);
      if (checkIfElementExists(reference)) {
        console.log('Found', reference);
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
