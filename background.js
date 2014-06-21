chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html',
    {minWidth: 630, minHeight: 650,
    maxWidth: 630, maxHeight: 650});
});
