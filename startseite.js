const coinsElement = document.getElementById("coins-value");
const xpElement = document.getElementById("xp-value");
const streakElement = document.getElementById("streak-value");
const dot = document.querySelector(".notification-dot");

// ❗ Falsche Fragen aus dem Speicher holen und Punktanzeige aktualisieren
function updateNotificationDot() {
    const incorrectQuestions = JSON.parse(localStorage.getItem('incorrectQuestions')) || [];
    const categoryErrors = incorrectQuestions.length;
    if (categoryErrors > 0) {
        dot.textContent = categoryErrors;
        dot.style.display = 'block';
    } else {
        dot.textContent = '';
        dot.style.display = 'none';
    }
}

// ❗ Lokale Werte laden
function loadLocalStats() {
    coinsElement.textContent = localStorage.getItem("lastCoins") || 0;
    xpElement.textContent = localStorage.getItem("lastXp") || 0;
    streakElement.textContent = localStorage.getItem("lastStreak") || 0;
    updateNotificationDot();
}

// ❗ Cloud-Daten aus Firebase.js synchronisieren
function syncStatsFromFirestore() {
    if (!window.userData) {
        console.error("❌ Keine Benutzerdaten von Firebase vorhanden.");
        return;
    }
    console.log("✅ Live-Daten synchronisiert:", window.userData);

    coinsElement.textContent = window.userData.coins || 0;
    xpElement.textContent = window.userData.xp || 0;
    streakElement.textContent = window.userData.streak || 0;

    localStorage.setItem("lastCoins", window.userData.coins || 0);
    localStorage.setItem("lastXp", window.userData.xp || 0);
    localStorage.setItem("lastStreak", window.userData.streak || 0);
}

// ❗ Initiale Synchronisation beim Laden
document.addEventListener("DOMContentLoaded", () => {
    loadLocalStats(); // Lokale Werte anzeigen
});

document.addEventListener("firebaseDataLoaded", () => {
    console.log("🔄 Neue hallo:", value);
    syncStatsFromFirestore(); // Firestore-Werte abrufen
}); 
/* Navigation
const frames = document.querySelectorAll("div[id='iframe']");
const navButtons = document.querySelectorAll(".nav-bar .nav-button");

navButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        frames.forEach(frame => frame.style.display = "none");
        if (frames[index]) {
            frames[index].style.display = "flex";
        }
    });
});
*/

//Navigation Test
const frames = document.querySelectorAll("div[id='iframe']");
const navButtons = document.querySelectorAll(".nav-bar .nav-button");

// Letzten aktiven Frame aus localStorage abrufen
const lastActiveFrameIndex = localStorage.getItem("activeFrameIndex");

// Falls vorhanden, den gespeicherten Frame aktivieren
if (lastActiveFrameIndex !== null && frames[lastActiveFrameIndex]) {
    frames.forEach(frame => frame.style.display = "none");
    frames[lastActiveFrameIndex].style.display = "flex";
}

// Event-Listener für die Navigation setzen
navButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        frames.forEach(frame => frame.style.display = "none");

        if (frames[index]) {
            if (index === 3) {
                frames[index].style.display = "block";
            } else{
                frames[index].style.display = "flex";
            }
            localStorage.setItem("activeFrameIndex", index); // Aktiven Frame speichern
        }
    });
});

function themeColor(color) {
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.setAttribute('name', 'theme-color');
            document.head.appendChild(metaThemeColor);
        }
        metaThemeColor.setAttribute('content', color);

    }

    window.themeColor = themeColor;
