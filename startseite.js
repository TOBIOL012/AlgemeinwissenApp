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
function syncStatsFromFirestore() {
    const uid = localStorage.getItem("uid");

    if (!uid) {
        console.error("Kein Benutzer angemeldet.");
        return;
    }

    firestore.collection("users").doc(uid).onSnapshot((doc) => {
        if (doc.exists) {
            const data = doc.data();

            // Cloud-Daten in die UI aktualisieren
            coinsElement.textContent = data.coins || 0;
            xpElement.textContent = data.xp || 0;
            streakElement.textContent = data.streak || 0;

            // Cloud-Daten lokal speichern
            localStorage.setItem("lastCoins", data.coins || 0);
            localStorage.setItem("lastXp", data.xp || 0);
            localStorage.setItem("lastStreak", data.streak || 0);
        } else {
            console.error("Benutzerdaten nicht gefunden.");
        }
    }, (error) => {
        console.error("Fehler beim Synchronisieren mit Firestore:", error);
    });
}

// Initiale Synchronisation starten
document.addEventListener("DOMContentLoaded", () => {
    loadLocalStats(); // Lokale Werte laden
    syncStatsFromFirestore(); // Cloud-Daten laden und synchronisieren
});