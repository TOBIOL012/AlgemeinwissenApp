// Firebase initialisieren
const firebaseConfig = {
    apiKey: "AIzaSyCHdNTXnLblziPQkH0Kg2WjoTKk4vts1mE",
    authDomain: "besserwisser-95b63.firebaseapp.com",
    projectId: "besserwisser-95b63",
    storageBucket: "besserwisser-95b63.appspot.com",
    messagingSenderId: "522066225262",
    appId: "1:522066225262:web:4bec0b45ceff85913c1e7f",
    measurementId: "G-P8SBRHWS84"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

// Globale Benutzer-Daten

window.ranking = [];
window.userRank = null;
let wasOffline = false;

// Standardwerte für Benutzerdaten
function getDefaultUserData() {
    return {
        username: localStorage.getItem("username"),
        coins: localStorage.getItem("coins"),
        xp: localStorage.getItem("xp"),
        streak: localStorage.getItem("streak"),
        higheststreak: null,
        streakOnIce: null,
        creationDate: localStorage.getItem("beigetreten"),
        streakHistory: [],
        xpHistory: [],
        profilepictures: ["AlbertEinstein.png"],
        currentprofile: localStorage.getItem("currentprofile") || "AlbertEinstein.png",
        profilecolor: localStorage.getItem("profilecolor") || "rgb(93, 165, 113)",
        token: null,
        dailyTasks: [],
        lifeTasks: [],
    };
}

window.userData = getDefaultUserData();

// Internetverbindung prüfen
function checkInternetConnection() {
    if (!navigator.onLine) {
        console.warn("❌ Kein Internetzugang! Setze Benutzerdaten zurück.");
        window.userData = getDefaultUserData();
        document.dispatchEvent(new Event('firebaseDataLoaded'));
        wasOffline = true;
    } else if (wasOffline) {
        console.log("✅ Internetverbindung wiederhergestellt! Lese Daten aus Firestore.");
        wasOffline = false;
        const uid = localStorage.getItem("uid");
        if (uid) {
            initUserData(uid);
        } else {
            fetchRankingAndUpdate();
        }
    }
}

// Benutzer-Daten aus Firestore abrufen und überwachen
function initUserData(uid) {
    firestore.collection("users").doc(uid).onSnapshot((doc) => {
        if (doc.exists) {
            window.userData = { ...doc.data() };
            console.log("📊 Benutzerdaten aktualisiert:", window.userData);
            document.dispatchEvent(new Event('firebaseDataLoaded'));
            fetchRankingAndUpdate();
        } else {
            console.warn("❌ Kein Dokument für UID gefunden:", uid);
            fetchRankingAndUpdate();
            document.dispatchEvent(new Event('firebaseDataLoaded'));
        }
    });
}

// Rangliste abrufen und Position bestimmen
async function fetchRankingAndUpdate() {
    console.log("🔍 Lade Rangliste...");
    try {
        const storageUrl = 'https://firebasestorage.googleapis.com/v0/b/besserwisser-95b63.firebasestorage.app/o/player_ranking.csv?alt=media&token=abd74572-2f9c-4bdf-8f07-ff8bbb821a16';
        const response = await fetch(storageUrl);
        const csvText = await response.text();

        window.ranking = parseCSV(csvText);
        window.ranking.sort((a, b) => b.xp - a.xp);
        if (uid) {
            window.userRank = window.ranking.findIndex(user => user.UID === localStorage.getItem("uid")) + 1;
        }

        console.log("🏆 Rangliste aktualisiert:", window.ranking);
        console.log("📌 Deine Platzierung:", window.userRank);
        document.dispatchEvent(new Event('rankingDataLoaded'));
    } catch (error) {
        console.error("❌ Fehler beim Abrufen der Rangliste:", error);
    }
}

// CSV in JSON konvertieren
function parseCSV(csvText) {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',');
    return lines.slice(1).map(line => {
        const values = line.split(',');
        let entry = {};
        headers.forEach((header, index) => {
            entry[header.trim()] = values[index].trim();
        });
        return entry;
    });
}

// UID setzen und initialisieren
const uid = localStorage.getItem("uid");
if (uid) {
    initUserData(uid);
} else {
    setTimeout(fetchRankingAndUpdate, 200);
    setTimeout(() => document.dispatchEvent(new Event('firebaseDataLoaded')), 200);
}


// Regelmäßige Prüfung der Internetverbindung
setInterval(checkInternetConnection, 1000);
setTimeout(checkInternetConnection, 500);
