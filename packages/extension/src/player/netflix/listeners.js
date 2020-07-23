import { DOM } from './dom';
import { waitForElement } from '../../utils/dom';

export const onPlay = async (callback) => {
  await waitForElement(DOM.PLAY_PAUSE_BUTTON);
  document
    .querySelector(DOM.PLAY_PAUSE_BUTTON)
    .addEventListener('click', callback);
};
