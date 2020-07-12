import REFERENCES from './references';
import { checkIfElementExists } from '../../utils/dom';

export const getStatus = () => {
  if (checkIfElementExists(REFERENCES.play_button)) {
    return 'playing';
  }

  if (checkIfElementExists(REFERENCES.pause_button)) {
    return 'paused';
  }
};

export const play = async () => {
  try {
    await waitForPlayButton();
    document.querySelector(REFERENCES.play_button).click();
    Promise.resolve();
  } catch (e) {
    Promise.reject(e.message);
  }
};

export const pause = async () => {
  try {
    await waitForPauseButton();
    document.querySelector(REFERENCES.pause_button).click();
    return Promise.resolve();
  } catch (e) {
    return Promise.reject(e.message);
  }
};
