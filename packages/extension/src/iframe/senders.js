import { container } from '.';

export default (message) => {
  const messageToPostMessage = {
    VIDEO_PLAYED: () =>
      container.contentWindow.postMessage({
        type: message,
      }),
  };

  return messageToPostMessage[message];
};
