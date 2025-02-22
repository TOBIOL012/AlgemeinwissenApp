importScripts('https://www.gstatic.com/firebasejs/9.21.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.21.0/firebase-storage-compat.js');


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

const cacheFiles = [
    "index.html", "index2.html", "index3.html", "index10.html", "haupt.html", "startseite.html", "mehrspieler.html", "profil.html", "ranking-mehrspieler.html", "fragen-mehrspieler.html", "fragen-fehler.html", "kategorien.html", "kategorien-fehler.html", "kategorien-mehrspieler.html", "schwierigkeiten.html", "statistik.html", "abmelden.html", "anmelden.html", "belohnung.html", "belohnung-mehrspieler.html", "calendar.html", "endranking-mehrspieler.html", "einstellungen.html", "dev.html", "xp-pfad.html", "fehler.html",
    "main.js", "global.js", "startseite.js", "mehrspieler.js", "profil.js", "ranking-mehrspieler.js", "fragen-mehrspieler.js", "fragen-fehler.js", "kategorien-fehler.js", "kategorien-mehrspieler.js", "statistik.js", "belohnung.js", "belohnung-mehrspieler.js", "endranking-mehrspieler.js", "einstellungen.js", "fehler.js", "index2.js", "service-worker.js", "mini-kalendar.js", "ranking.js", "calendar.js", "profil-auswahl.js"
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('app-cache').then(async (cache) => {
            for (const file of cacheFiles) {
                try {
                    await cache.add(file);
                    console.log(`✅ Gecached: ${file}`);
                } catch (error) {
                    console.error(`❌ Fehler beim Caching von: ${file}`, error);
                }
            }
        })
    );
});

self.addEventListener('message', (event) => {
    
    if (!event.data) {
        console.error("❌ Nachricht war leer!");
        return;
    }

    if (event.data.type === "initUserData") {

        const uid = event.data.uid;

        // Benutzer-Daten überwachen
        firestore.collection("users").doc(uid).onSnapshot((doc) => {
            if (doc.exists) {
                const userData = doc.data();
                sendMessageToClients({ type: "userDataUpdated", data: userData });

                // Rangliste abrufen und Position des Nutzers bestimmen
                const targetName = userData.username;
                const targetXp = userData.xp;
                const targetUid = uid;
                
                fetchRankingAndNotify(targetName, targetXp, targetUid);
            } else {
                console.warn("❌ Kein Dokument gefunden für UID:", uid);
            }
        });
    }
});

async function fetchRankingAndNotify(targetName, targetXp, targetUid) {

    try {
        // URL zur CSV-Datei in Firebase Storage
        const storageUrl = 'https://firebasestorage.googleapis.com/v0/b/besserwisser-95b63.firebasestorage.app/o/player_ranking.csv?alt=media&token=abd74572-2f9c-4bdf-8f07-ff8bbb821a16';

        // CSV-Datei herunterladen
        const response = await fetch(storageUrl);
        const csvText = await response.text();

        // CSV-Daten parsen
        const ranking = parseCSV(csvText);

        // Sortiere die Rangliste (falls nicht bereits sortiert)
        ranking.sort((a, b) => b.xp - a.xp);
        // Finde die Position des Nutzers basierend auf Name und XP
        const userRank = ranking.findIndex(user => user.UID === targetUid) + 1;

        sendMessageToClients({ type: "rankingUpdated", ranking, userRank });
    } catch (error) {
        console.error("❌ Fehler beim Abrufen der Rangliste:", error);
    }
}

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

function sendMessageToClients(message) {
    self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
            client.postMessage(message);
        });
    });
}
