chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html',
    {minWidth: 350, minHeight: 530,
    maxWidth: 350, maxHeight: 530});
});
