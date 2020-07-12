import references from './references';
import { waitForElement } from '../../utils/dom';

const iframe = document.createElement('iframe');

export const startIframe = async () => {
  iframe.style.width = '30%';
  iframe.style.height = '100%';
  iframe.style.position = 'absolute';
  iframe.style.right = 0;
  iframe.style.zIndex = 999999999999;
  iframe.setAttribute('src', 'http://localhost:3000');
};

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

export const listenToVideoStatus = async () => {
  try {
    setTimeout(() => {
      iframe.contentWindow.postMessage(
        {
          status: 'playing',
        },
        '*'
      );
    }, 3000);
    return Promise.resolve();
  } catch (e) {
    return Promise.reject(e.message);
  }
};

export const start = async () => {
  try {
    startIframe();
    await waitForElement(references.app_container);
    document.querySelector(references.app_container).appendChild(iframe);
    listenToVideoStatus();
  } catch (e) {
    throw new Error(e);
  }
};
