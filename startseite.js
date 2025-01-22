// DOM-Elemente
const coinsElement = document.getElementById("coins-value");
const xpElement = document.getElementById("xp-value");
const streakElement = document.getElementById("streak-value");

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
    // UID aus dem localStorage holen
    const uid = localStorage.getItem("uid");

    if (!uid) {
        console.error("Kein Benutzer angemeldet.");
        return;
    }

    console.log("Daten vom Service Worker abrufen...");

    // Anfrage an den Service Worker senden
    fetch('/getUserData')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP-Fehler: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data) {
                // Cloud-Daten in die UI aktualisieren
                coinsElement.textContent = data.coins || 0;
                xpElement.textContent = data.xp || 0;
                streakElement.textContent = data.streak || 0;

                // Cloud-Daten lokal speichern
                localStorage.setItem("lastCoins", data.coins || 0);
                localStorage.setItem("lastXp", data.xp || 0);
                localStorage.setItem("lastStreak", data.streak || 0);

                console.log("Synchronisation erfolgreich:", data);
            } else {
                console.error("Keine Daten vom Service Worker erhalten.");
            }
        })
        .catch(error => {
            console.error("Fehler beim Abrufen der Daten vom Service Worker:", error);
        });
}

// Initiale Synchronisation starten
document.addEventListener("DOMContentLoaded", () => {
    loadLocalStats(); // Lokale Werte laden
    syncStatsFromFirestore(); // Cloud-Daten laden und synchronisieren
});