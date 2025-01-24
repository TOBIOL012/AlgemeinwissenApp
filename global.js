// Firebase-Konfiguration
const firebaseConfig = {
    apiKey: "AIzaSyCHdNTXnLblziPQkH0Kg2WjoTKk4vts1mE",
    authDomain: "besserwisser-95b63.firebaseapp.com",
    projectId: "besserwisser-95b63",
    storageBucket: "besserwisser-95b63.appspot.com",
    messagingSenderId: "522066225262",
    appId: "1:522066225262:web:4bec0b45ceff85913c1e7f",
    measurementId: "G-P8SBRHWS84",
};

console.log("Firebase wird initialisiert...");

// Firebase initialisieren (falls nicht bereits initialisiert)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
const auth = firebase.auth();

// Lokale Werte sofort laden
function loadLocalStats() {
    console.log("hallo");
    const coins = localStorage.getItem("lastCoins") || 0;
    const xp = localStorage.getItem("lastXp") || 0;
    const streak = localStorage.getItem("lastStreak") || 0;

    updateStats(coins, xp, streak);
}

// Globale Funktionen für Coins, XP und Streak
function increaseValue(field, amount) {
    auth.onAuthStateChanged((user) => {
        if (user) {
            const uid = user.uid;
            firestore.collection("users").doc(uid).update({
                [field]: firebase.firestore.FieldValue.increment(amount),
            }).then(() => {
                console.log(`${field} wurde um ${amount} erhöht.`);
            }).catch((error) => {
                console.error(`Fehler beim Erhöhen von ${field}:`, error);
            });
        } else {
            console.error("Benutzer nicht eingeloggt.");
        }
    });
}

function decreaseValue(field, amount) {
    increaseValue(field, -amount);
}

function setValue(field, value) {
    auth.onAuthStateChanged((user) => {
        if (user) {
            const uid = user.uid;
            firestore.collection("users").doc(uid).update({
                [field]: value,
            }).then(() => {
                console.log(`${field} wurde auf ${value} gesetzt.`);
            }).catch((error) => {
                console.error(`Fehler beim Setzen von ${field}:`, error);
            });
        } else {
            console.error("Benutzer nicht eingeloggt.");
        }
    });
}

// Synchronisation von Coins, XP und Streak
function syncStats() {
    auth.onAuthStateChanged((user) => {
        if (user) {
            const uid = user.uid;
            firestore.collection("users").doc(uid).onSnapshot((doc) => {
                if (doc.exists) {
                    const data = doc.data();

                    // Lokale Speicherung
                    localStorage.setItem("lastCoins", data.coins);
                    localStorage.setItem("lastXp", data.xp);
                    localStorage.setItem("lastStreak", data.streak);

                    // UI aktualisieren
                    updateStats(data.coins, data.xp, data.streak);
                } else {
                    console.error("Dokument nicht gefunden.");
                }
            }, (error) => {
                console.error("Fehler bei onSnapshot: ", error);
            });
        }
    });
}

// Globale Funktion zum Lesen von Daten (z. B. Coins)
function readData(field, callback) {
    auth.onAuthStateChanged((user) => {
        if (user) {
            const uid = user.uid;
            firestore.collection("users").doc(uid).get().then((doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    callback(data[field]);
                } else {
                    console.error("Dokument nicht gefunden.");
                    callback(null);
                }
            }).catch((error) => {
                console.error(`Fehler beim Lesen von ${field}:`, error);
                callback(null);
            });
        } else {
            console.error("Benutzer nicht eingeloggt.");
            callback(null);
        }
    });
}

function extendStreak() {
    auth.onAuthStateChanged((user) => {
        if (user) {
            const uid = user.uid;
            const today = new Date().toISOString().split("T")[0]; // Aktuelles Datum

            firestore.collection("users").doc(uid).get().then((doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    const lastUpdateDate = data.lastUpdateDate || null;

                    // Prüfe, ob die Streak aktualisiert werden soll
                    if (lastUpdateDate !== today) {
                        // Verlängere die Streak
                        const updatedStreak = (data.streak || 0) + 1;

                        // Füge `1` zum Verlauf hinzu
                        const updatedStreakHistory = [...(data.streakHistory || []), 1];

                        // Aktualisiere Firestore
                        firestore.collection("users").doc(uid).update({
                            streak: updatedStreak,
                            lastUpdateDate: today,
                            streakHistory: updatedStreakHistory
                        }).then(() => {
                            console.log("Streak verlängert und Verlauf aktualisiert.");
                        }).catch((error) => {
                            console.error("Fehler beim Aktualisieren der Streak:", error);
                        });
                    } else {
                        console.log("Streak wurde heute bereits aktualisiert.");
                    }
                } else {
                    console.error("Benutzerdokument nicht gefunden.");
                }
            }).catch((error) => {
                console.error("Fehler beim Abrufen des Benutzerdokuments:", error);
            });
        } else {
            console.error("Benutzer nicht eingeloggt.");
        }
    });
}

// Globale Funktion verfügbar machen
window.readData = readData;
window.extendStreak = extendStreak;

// Coins, XP und Streak in der UI aktualisieren
function updateStats(coins, xp, streak) {
    const coinsDisplay = document.querySelector(".coin-text");
    const xpDisplay = document.querySelector("#xp-total");
    const streakDisplay = document.querySelector(".streak-text");

    if (coinsDisplay) coinsDisplay.textContent = coins;
    if (xpDisplay) xpDisplay.textContent = xp;
    if (streakDisplay) streakDisplay.textContent = streak;
}

// Globale Funktionen verfügbar machen
window.increaseValue = increaseValue;
window.decreaseValue = decreaseValue;
window.setValue = setValue;

// Lokale Werte laden und Synchronisation starten
loadLocalStats();
syncStats();

function changeIframeSrc(iframeId, url) {
    const iframe = document.getElementById(iframeId);
    if (iframe) {
        iframe.src = url;
    } else {
        console.error(`Iframe mit ID ${iframeId} nicht gefunden.`);
    }
}

window.navigate = function(url) {
    if (window.location.href.indexOf('haupt.html') > -1) {
        parent.changeIframeSrc('mainIframe', url);
    } else {
        window.location.href = url;
    }
};