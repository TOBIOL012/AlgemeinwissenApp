// Firebase-SDKs importieren
importScripts('https://www.gstatic.com/firebasejs/9.21.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.21.0/firebase-auth-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore-compat.js');

// Firebase-Konfiguration
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
const auth = firebase.auth();

let globalUserData = {};

// Benutzerdaten synchronisieren und speichern
function syncUserData() {
    auth.onAuthStateChanged(user => {
        if (user) {
            const uid = user.uid;
            firestore.collection("users").doc(uid).onSnapshot(doc => {
                if (doc.exists) {
                    globalUserData = doc.data();
                    console.log('Benutzerdaten aktualisiert:', globalUserData);
                } else {
                    console.error("Dokument nicht gefunden.");
                }
            }, error => {
                console.error("Fehler bei der Synchronisation:", error);
            });
        } else {
            console.log("Kein Benutzer angemeldet.");
            globalUserData = {};
        }
    });
}

// Synchronisierung starten
syncUserData();

// Datenanfragen im Fetch-Event abfangen
self.addEventListener('fetch', (event) => {
    if (event.request.url.endsWith('/getUserData')) {
        console.log('Anfrage nach Benutzerdaten empfangen.');
        event.respondWith(
            new Response(JSON.stringify(globalUserData), {
                headers: { 'Content-Type': 'application/json' }
            })
        );
    } else {
        console.log('Fetching:', event.request.url);
        event.respondWith(fetch(event.request));
    }
});