document.addEventListener("DOMContentLoaded", function () {
    const uid = localStorage.getItem("uid");
    let updateData = {};
    let coins = null;
    let ice = null;
    let tokens = null;

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

    function updateUI() {
        document.getElementById("coins").textContent = coins;
        document.getElementById("streak-count").textContent = `${ice}/2`;
        document.getElementById("token-count").textContent = `${tokens}/200`;
    }

    window.buyStreak = function () {
        if (coins >= 200 && ice < 2) {
            firestore.collection("users").doc(uid).update({
                streakOnIce: firebase.firestore.FieldValue.increment(1),
                coins: firebase.firestore.FieldValue.increment(-200)
            })
            .then(() => {
                console.log("wat");
                streakOnIce++;
                coins -= 200;
            })
            .catch(error => {
                console.error("Fehler beim Aktualisieren:", error);
            });
        }
    };

    window.buyTokens = function () {
        if (coins >= 200 && tokens <= 190) {
            firestore.collection("users").doc(uid).update({
                token: firebase.firestore.FieldValue.increment(10),
                coins: firebase.firestore.FieldValue.increment(-200)
            })
            .then(() => {
                console.log("wat");
                token = token + 10;
                coins -= 200;
            })
            .catch(error => {
                console.error("Fehler beim Aktualisieren:", error);
            });
        }
    };

    

    function syncStatsFromServiceWorker() {
        if (!navigator.serviceWorker.controller) {
            console.error("❌ Kein aktiver Service Worker gefunden. Registrierung überprüfen!");
            return;
        }
    
        console.log("📨 Sende Nachricht an Service Worker:", { type: "initUserData", uid: localStorage.getItem("uid") });
        
        try {
            navigator.serviceWorker.controller.postMessage({ type: "initUserData", uid: localStorage.getItem("uid") });
        } catch (error) {
            console.error("❌ Fehler beim Senden der Nachricht an den Service Worker:", error);
        }
        
        navigator.serviceWorker.addEventListener("message", (event) => {
            console.log("📩 Nachricht vom Service Worker erhalten:", event.data);
            
            if (event.data.type === "userDataUpdated") {
                const data = event.data.data;
                ice = data.streakOnIce;
                coins = data.coins;
                tokens = data.token;
                updateUI();
            }
        });
    }

    syncStatsFromServiceWorker();
});
