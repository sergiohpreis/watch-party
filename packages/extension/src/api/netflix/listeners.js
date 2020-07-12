import REFERENCES from './references';
import * as when from './when';
import * as message from './message';

export const whenUserClick = async () => {
  await when.appStart();
  document
    .querySelector(REFERENCES.app_container)
    .addEventListener('mousedown', () => {
      message.sendPlayerStatus();
    });
};

export const start = () => {
  whenUserClick();
};
