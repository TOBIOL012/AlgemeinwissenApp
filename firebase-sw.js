importScripts(
    "https://www.gstatic.com/firebasejs/9.21.0/firebase-app-compat.js",
    "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth-compat.js",
    "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore-compat.js"
);

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

// Firebase initialisieren (falls nicht bereits initialisiert)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

// Synchronisation von Coins, XP und Streak
self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "syncStats") {
        const uid = event.data.uid;
        firestore.collection("users").doc(uid).onSnapshot((doc) => {
            if (doc.exists) {
                const data = doc.data();
                self.clients.matchAll().then((clients) => {
                    clients.forEach((client) => {
                        client.postMessage({ type: "updateStats", data });
                    });
                });
            }
        });
    }
});