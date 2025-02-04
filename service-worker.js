importScripts('https://www.gstatic.com/firebasejs/9.21.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore-compat.js');

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
    "main.js", "global.js", "startseite.js", "mehrspieler.js", "profil.js", "ranking-mehrspieler.js", "fragen-mehrspieler.js", "fragen-fehler.js", "kategorien-fehler.js", "kategorien-mehrspieler.js", "statistik.js", "belohnung.js", "belohnung-mehrspieler.js", "endranking-mehrspieler.js", "einstellungen.js", "fehler.js", "index2.js", "service-worker.js", "mini-kalendar.js"
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
    console.log("📩 Nachricht im Service Worker erhalten:", event.data);
    

    if (!event.data) {
        console.error("❌ Nachricht war leer!");
        return;
    }

    if (event.data.type === "initUserData") {
        console.log("✅ Nachricht korrekt empfangen, starte Firestore-Abfrage");

        const uid = event.data.uid;
        console.log("🔍 Firestore-Daten für UID abrufen:", uid);

        firestore.collection("users").doc(uid).onSnapshot((doc) => {
            if (doc.exists) {
                console.log("📨 Sende Benutzerdaten an Client:", doc.data());

                self.clients.matchAll().then((clients) => {
                    console.log(`👀 ${clients.length} Clients gefunden`);
                    clients.forEach((client) => {
                        console.log("📤 Sende Daten an Client:", client);
                        client.postMessage({ type: "userDataUpdated", data: doc.data() });
                    });
                });
            } else {
                console.warn("❌ Kein Dokument gefunden für UID:", uid);
            }
        });
    }
});
