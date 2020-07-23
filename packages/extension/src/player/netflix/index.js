import * as listeners from './listeners';
import * as iframe from '../../iframe/index';

export const startListeners = () => {
  listeners.onPlay(() => {
    iframe.send('VIDEO_PLAYED');
  });
};
