const activeASelector = '.farm_icon_a:not(.farm_icon_disabled):not(.start_locked)';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function clickActiveAElements() {
    const activeAElements = document.querySelectorAll(activeASelector);

    if (activeAElements.length === 0) {
        showNotification("Hiç Aktif A Bulunamadı", "Tıklanacak aktif A elemanı yok.");
        return;
    }

    for (const element of activeAElements) {
        element.click();
        console.log('Tıklandı:', element);
        await delay(201);
    }

    showNotification("Tıklamalar Tamamlandı", "Tüm aktif A elemanlarına başarıyla tıklandı.");
    console.log('Tüm aktif A elemanlarına tıklama işlemi tamamlandı.');
}

function showNotification(title, message) {
    chrome.runtime.sendMessage({ action: "showNotification", title, message });
}

clickActiveAElements();
