import { waitForElement } from '../../utils/dom';
import REFERENCES from './references';

export const container = document.createElement('iframe');

export const addStyle = (iframe, style) => {
  Object.keys(style).forEach((attr) => {
    iframe.style[attr] = style[attr];
  });
};

export const setSrc = (iframe, src) => {
  iframe.setAttribute('src', src);
};

export const appendToApp = async (iframe) => {
  await waitForElement(REFERENCES.app_container);
  document.querySelector(REFERENCES.app_container).appendChild(iframe);
};

export const start = () => {
  addStyle(container, {
    width: '30%',
    height: '100%',
    position: 'absolute',
    right: 0,
    zIndex: 999999999999,
  });
  setSrc(container, 'http://localhost:3000');
  appendToApp(container);
};
