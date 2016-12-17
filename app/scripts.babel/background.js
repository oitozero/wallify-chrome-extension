'use strict';

chrome.runtime.onInstalled.addListener(details => {
  // console.log('previousVersion', details.previousVersion);
});

// chrome.browserAction.setBadgeText({text: '\'Hello World'});

chrome.browserAction.onClicked.addListener(function(tab) {
  // chrome.tabs.create({'url': chrome.extension.getURL('app.html')}, function(tab) {
  chrome.tabs.create({'url': chrome.extension.getURL('options.html')}, function(tab) {
    // Tab opened.
  });
});
