// Aktif A konfigürasyonları için seçici
const activeASelector = '.farm_icon_a:not(.farm_icon_disabled):not(.start_locked)';

// Tıklamalar arasına gecikme eklemek için bir yardımcı fonksiyon
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Tüm aktif A'lara tıklayan bir asenkron fonksiyon
async function clickActiveAElements() {
    const activeAElements = document.querySelectorAll(activeASelector); // Aktif A elemanlarını seç
    for (const element of activeAElements) {
        element.click(); // Tıklama işlemi
        console.log('Tıklandı:', element); // Konsola bilgi yazdır
        await delay(201); // 201 ms bekle
    }
    console.log('Tüm aktif A elemanlarına tıklama işlemi tamamlandı.');
}

// Fonksiyonu çalıştır
clickActiveAElements();
