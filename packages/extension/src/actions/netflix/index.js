import references from './references';
import { waitForElement } from '../../utils/dom';

export const waitForVideoStart = async () =>
  waitForElement(references.video_container);

export const waitForPlayButton = async () =>
  waitForElement(references.play_button);

export const waitForPauseButton = async () =>
  waitForElement(references.pause_button);

export const playVideo = async () => {
  try {
    await waitForPlayButton();
    document.querySelector(references.play_button).click();
    Promise.resolve();
  } catch (e) {
    Promise.reject(e.message);
  }
};

export const pauseVideo = async () => {
  try {
    await waitForPauseButton();
    document.querySelector(references.pause_button).click();
    return Promise.resolve();
  } catch (e) {
    return Promise.reject(e.message);
  }
};

pauseVideo()
  .then(() => console.log('Pausou'))
  .catch((e) => console.log('Não Pausou', e));
