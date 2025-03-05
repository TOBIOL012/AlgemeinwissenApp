


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
window.userData = {
    username: "",
    coins: null,
    xp: 0,
    streak: 0,
    higheststreak: 0,
    streakOnIce: 3,
    creationDate: "",
    streakHistory: [],
    xpHistory: [],
    profilepictures: ["AlbertEinstein.png"],
    currentprofile: "AlbertEinstein.png",
    profilecolor: "#5d8ee2",
    token: 0
};

window.ranking = [];
window.userRank = 0;

// Benutzer-Daten aus Firestore abrufen und überwachen
function initUserData(uid) {
    firestore.collection("users").doc(uid).onSnapshot((doc) => {
        if (doc.exists) {
            window.userData = { ...doc.data() };
            console.log("📊 Benutzerdaten aktualisiert:", window.userData);
            
            // Dispatch des Events, dass Firebase-Daten geladen wurden
            document.dispatchEvent(new Event('firebaseDataLoaded'));
            
            // Danach Ranking abrufen
            fetchRankingAndUpdate();
        } else {
            console.warn("❌ Kein Dokument für UID gefunden:", uid);
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
        window.userRank = window.ranking.findIndex(user => user.UID === localStorage.getItem("uid")) + 1;
        console.log(localStorage.getItem("uid"));

        console.log("🏆 Rangliste aktualisiert:", window.ranking);
        console.log("📌 Deine Platzierung:", window.userRank);

        // Dispatch des Events, dass die Rangliste geladen wurde
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
    console.warn("⚠️ Keine UID gefunden. Benutzer nicht eingeloggt?");
}

console.log(window.userData);