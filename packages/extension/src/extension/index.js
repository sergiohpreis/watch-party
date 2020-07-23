import * as popupActions from '../popup/actions';

popupActions.onStartSession(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      file: './init.js',
    });
  });
});
