import send from './senders';
import listen from './listener';
import * as helpers from './helpers';

export const iframe = document.createElement('iframe');

export const start = (streamService) => {
  helpers.addStyle(iframe, {
    width: '30%',
    height: '100%',
    position: 'absolute',
    right: 0,
    zIndex: 999999999999,
  });
  helpers.setSrc(iframe, 'http://localhost:3000');
  helpers.appendToApp(iframe, streamService);
  listen();
};

export { send };
