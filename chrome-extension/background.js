chrome.contextMenus.create({
  id: "getSelectedTextContextMenu",
  title: "Dự đoán lừa đảo",
  contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "getSelectedTextContextMenu") {
    getSelectedText(tab);
  }
});

// function getSelectedText(tab) {
//     chrome.scripting.executeScript({
//       target: {tabId: tab.id},
//       function: () => {
//         const selectedText = window.getSelection().toString();
//         console.log(selectedText);
//         let apiCall = new XMLHttpRequest();
//         apiCall.open("GET", "http://127.0.0.1:8000/api/scam_prediction/" + encodeURIComponent(selectedText));
//         apiCall.send();
//         apiCall.onload = () => {

//           console.log(apiCall.response);

//           ret = JSON.parse(apiCall.response);
//           str = 'Khả năng lừa đảo: ' + ret['accuracy'] + '\n';
//           str += 'Lý do:\n' + ret['reasons'];
          
//           chrome.runtime.sendMessage({ args: str });

//           console.log(str);
//         }
//       }
//     });
//   }

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
