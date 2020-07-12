import REFERENCES from './references';
import { waitForElement } from '../../utils/dom';

export const appStart = async () => waitForElement(REFERENCES.app_container);

export const playButtonAvailable = async () =>
  waitForElement(REFERENCES.play_button);

export const pauseButtonAvailable = async () =>
  waitForElement(REFERENCES.pause_button);
