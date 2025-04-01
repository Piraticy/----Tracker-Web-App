chrome.action.onClicked.addListener(() => {
    chrome.tabs.create({ url: "https://script.google.com/macros/s/AKfycbyCGWECzDFmjFJ5s01jZh0qFnpqGE-zPQauXHCx-yIu37qhbSW3fBz6mIRNkBDXSlPjiw/exec" });
});
chrome.runtime.onInstalled.addListener(() => {
    console.log("Finance Tracker Extension Installed");
});