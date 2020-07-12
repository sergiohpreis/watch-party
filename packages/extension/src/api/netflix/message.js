import * as iframe from './iframe';
import * as player from './player';

export const sendPlayerStatus = () => {
  const status = player.getStatus();
  iframe.container.contentWindow.postMessage(
    {
      status,
    },
    '*'
  );
};
