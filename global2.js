document.addEventListener("DOMContentLoaded", () => {
    console.log("global.js geladen");

    const firebaseConfig = {
        apiKey: "AIzaSyCHdNTXnLblziPQkH0Kg2WjoTKk4vts1mE",
        authDomain: "besserwisser-95b63.firebaseapp.com",
        projectId: "besserwisser-95b63",
        storageBucket: "besserwisser-95b63.appspot.com",
        messagingSenderId: "522066225262",
        appId: "1:522066225262:web:4bec0b45ceff85913c1e7f",
        measurementId: "G-P8SBRHWS84",
    };

    // Firebase initialisieren, falls nicht bereits geschehen
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const firestore = firebase.firestore();
    const auth = firebase.auth();

    // Globale Variablen
    let globalData = {
        username: "",
        coins: 0,
        xp: 0,
        streak: 0,
        streakOnIce: 3,
        creationDate: "",
        streakHistory: [],
        xpHistory: []
    };

    // Firebase-Änderungen überwachen
    function syncUserData(uid) {
        firestore.collection("users").doc(uid).onSnapshot((doc) => {
            if (doc.exists) {
                const data = doc.data();
                globalData = {
                    username: data.username || "",
                    coins: data.coins || 0,
                    xp: data.xp || 0,
                    streak: data.streak || 0,
                    streakOnIce: data.streakOnIce || 3,
                    creationDate: data.creationDate || "",
                    streakHistory: data.streakHistory || [],
                    xpHistory: data.xpHistory || []
                };

                // Änderungen in den globalen Variablen anzeigen
                console.log("Daten aktualisiert:", globalData);
                logGlobalData();
            } else {
                console.error("Benutzerdaten nicht gefunden.");
            }
        }, (error) => {
            console.error("Fehler bei der Synchronisierung: ", error);
        });
    }

    // Benutzerstatus prüfen
    auth.onAuthStateChanged((user) => {
        if (user) {
            console.log("Benutzer eingeloggt:", user.uid);
            syncUserData(user.uid);
        } else {
            console.log("Benutzer nicht eingeloggt.");
            globalData = {
                username: "",
                coins: 0,
                xp: 0,
                streak: 0,
                streakOnIce: 3,
                creationDate: "",
                streakHistory: [],
                xpHistory: []
            };
            console.log("Globale Daten zurückgesetzt.");
            logGlobalData();
        }
    });

    // Globale Daten abrufen
    window.getGlobalData = () => globalData;

    // Logge die aktuellen globalen Daten
    function logGlobalData() {
        console.log("Aktuelle globale Daten:", globalData);
    }

    // Beim Laden der Webseite die initialen Daten loggen
    logGlobalData();

    console.log("global.js bereit.");
});
