chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function(tab) {
      console.log("The currently active tab has URL:", tab.url);
    });
});chrome.contextMenus.create({
  id: "getSelectedTextContextMenu",
  title: "Dự đoán lừa đảo",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "getSelectedTextContextMenu") {
    getSelectedText(tab);
  }
});

function getSelectedText(tab) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var currentTab = tabs[0];
        if (currentTab.id === tab.id) {
            chrome.tabs.sendMessage(tab.id, { message: "getSelectedText" });
        } else {
            console.log("Tab is not active or not in the current window.");
        }
    });
}

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    try {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var currentTab = tabs[0];
        if (currentTab.id === tab.id) {
            chrome.tabs.sendMessage(tab.id, { message: "okay" });
        } else {
            console.log("Tab is not active or not in the current window.");
        }
      });
      // await chrome.scripting.executeScript({
      //   target: { tabId: tab.id },
      //   func: () => {
      //     const pageInfo = { url: window.location.href, title: document.title };
      //     console.log(pageInfo.url);
      //   },
      // });
    } catch (err) {
      console.error(`Failed to execute script: ${err}`);
    }
  }
});