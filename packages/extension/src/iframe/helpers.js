import { DOM as NETFLIX_DOM } from '../player/netflix/dom';
import { waitForElement } from '../utils/dom';

const getContainerByStreamService = (streamService) => {
  const containerByStreamService = {
    netflix: () => NETFLIX_DOM.APP_CONTAINER,
  };

  return containerByStreamService[streamService]();
};

export const addStyle = (iframe, style) => {
  Object.keys(style).forEach((attr) => {
    iframe.style[attr] = style[attr];
  });
};

export const setSrc = (iframe, src) => {
  iframe.setAttribute('src', src);
};

export const appendToApp = async (iframe, streamService) => {
  const container = getContainerByStreamService(streamService);
  await waitForElement(container);
  document.querySelector(container).appendChild(iframe);
};
