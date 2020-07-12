import * as listeners from './listeners';
import * as iframe from './iframe';

export const start = async () => {
  try {
    iframe.start();
    listeners.start();
  } catch (e) {
    throw new Error(e);
  }
};
