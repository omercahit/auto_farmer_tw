const activeASelector = '.farm_icon_a:not(.farm_icon_disabled):not(.start_locked)';
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function clickActiveAElements() {
    const activeAElements = document.querySelectorAll(activeASelector);
    for (const element of activeAElements) {
        element.click();
        console.log('Tıklandı:', element);
        await delay(201);
    }
    console.log('Tüm aktif A elemanlarına tıklama işlemi tamamlandı.');
}

clickActiveAElements();
