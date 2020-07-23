import { DOM } from './dom';

export const onPlay = (callback) => {
  document.querySelector(DOM.PLAY_BUTTON).addEventListener('click', callback);
};
