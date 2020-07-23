import { waitForElement } from '../../utils/dom';
import { DOM } from './dom';

export const waitForPlayButton = async () => waitForElement(DOM.PLAY_BUTTON);
