import { iframe } from '.';

export default (message) => {
  const messageToPostMessage = {
    VIDEO_PLAYED: () => {
      iframe.contentWindow.postMessage(
        {
          type: message,
        },
        '*'
      );
    },
  };

  return messageToPostMessage[message]();
};
