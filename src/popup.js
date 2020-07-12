import * as netflixActions from './actions/netflix';

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.executeScript(tabs[0].id, {
    file: './netflix.js',
  });
});
