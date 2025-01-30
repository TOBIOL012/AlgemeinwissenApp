// DOM-Elemente
const coinsElement = document.getElementById("coins-value");
const xpElement = document.getElementById("xp-value");
const streakElement = document.getElementById("streak-value");

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(reg => console.log('Service Worker registriert:', reg))
        .catch(err => console.error('Service Worker Fehler:', err));
}

// Lokale Werte laden
function loadLocalStats() {
    const lastCoins = localStorage.getItem("lastCoins") || 0;
    const lastXp = localStorage.getItem("lastXp") || 0;
    const lastStreak = localStorage.getItem("lastStreak") || 0;

    coinsElement.textContent = lastCoins;
    xpElement.textContent = lastXp;
    streakElement.textContent = lastStreak;
}

// Cloud-Daten synchronisieren
function syncStatsFromServiceWorker() {
    if (!navigator.serviceWorker.controller) {
        console.error("❌ Kein aktiver Service Worker gefunden. Registrierung überprüfen!");
        return;
    }

    console.log("📨 Sende Nachricht an Service Worker:", { type: "initUserData", uid: localStorage.getItem("uid") });
    
    try {
        navigator.serviceWorker.controller.postMessage({ type: "initUserData", uid: localStorage.getItem("uid") });
        console.log("✅ Nachricht erfolgreich gesendet!");
    } catch (error) {
        console.error("❌ Fehler beim Senden der Nachricht an den Service Worker:", error);
    }
    
    navigator.serviceWorker.addEventListener("message", (event) => {
        console.log("📩 Nachricht vom Service Worker erhalten:", event.data);
        
        if (event.data.type === "userDataUpdated") {
            const data = event.data.data;
            console.log("✅ Aktualisierte Benutzerdaten:", data);
            
            // Cloud-Daten in die UI aktualisieren
            coinsElement.textContent = data.coins || 0;
            xpElement.textContent = data.xp || 0;
            streakElement.textContent = data.streak || 0;
            
            // Cloud-Daten lokal speichern
            localStorage.setItem("lastCoins", data.coins || 0);
            localStorage.setItem("lastXp", data.xp || 0);
            localStorage.setItem("lastStreak", data.streak || 0);
        }
    });
}

// Initiale Synchronisation starten
document.addEventListener("DOMContentLoaded", () => {
    loadLocalStats(); // Lokale Werte laden
    syncStatsFromServiceWorker(); // Daten vom Service Worker holen
});

