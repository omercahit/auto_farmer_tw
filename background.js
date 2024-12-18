chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
    });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "showNotification") {
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icon.png", // Eklentinizin bir simgesini buraya ekleyin
            title: message.title,
            message: message.message
        });
    }
});

