document.addEventListener('DOMContentLoaded', function () {
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

    // Firebase initialisieren
    const app = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const firestore = firebase.firestore();

    // Berechnungen für Münzen und XP
    const correctCount = parseInt(localStorage.getItem('correctCount') || '0', 10);
    const earnedCoins = correctCount; // 1 Münze pro richtiger Frage
    const earnedXP = 20 + (2 * correctCount); // 20 XP + 2 XP pro richtiger Frage

    const previousTotalCoins = parseInt(localStorage.getItem('totalCoins') || '0', 10);
    const previousTotalXP = parseInt(localStorage.getItem('totalXP') || '0', 10);

    let newTotalCoins = previousTotalCoins + earnedCoins;
    let newTotalXP = previousTotalXP + earnedXP;

    // Fortschrittsanzeige
    const percentage = (correctCount / 20) * 100;
    document.querySelector('.progress').style.width = `${percentage}%`;
    document.querySelector('.progress a').textContent = `${percentage}%`;

    const nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', function () {
        window.location.href = 'startseite.html';
    });

    // Funktion: Münzen und XP synchronisieren
    function syncCoinsAndXP() {
        const user = auth.currentUser;
        if (user) {
            const userDoc = firestore.collection('users').doc(user.uid);

            // Abrufen und Aktualisieren
            userDoc.get().then((doc) => {
                let syncedCoins = earnedCoins;
                let syncedXP = earnedXP;

                if (doc.exists) {
                    const data = doc.data();
                    syncedCoins += data.coins || 0;
                    syncedXP += data.xp || 0;
                }

                // Firebase aktualisieren
                userDoc.set({
                    username: doc.exists ? doc.data().username : user.email,
                    coins: syncedCoins,
                    xp: syncedXP,
                }).then(() => {
                    saveToLocal(syncedCoins, syncedXP);
                    animateStats(syncedCoins, syncedXP);
                }).catch((error) => {
                    console.error("Fehler beim Aktualisieren der Firebase-Daten:", error);
                });
            }).catch((error) => {
                console.error("Fehler beim Abrufen der Firebase-Daten:", error);
            });
        } else {
            saveToLocal(newTotalCoins, newTotalXP);
            animateStats(newTotalCoins, newTotalXP);
        }
    }

    // Funktion: Lokale Werte speichern
    function saveToLocal(coins, xp) {
        localStorage.setItem('totalCoins', coins);
        localStorage.setItem('totalXP', xp);
    }

    // Funktion: Statistiken mit Animation aktualisieren
    function animateStats(coins, xp) {
        const xpElement = document.getElementById('xp-total');
        const coinsElement = document.getElementById('coins-total');

        // XP-Anzeige
        xpElement.textContent = `+${earnedXP}`;
        xpElement.style.opacity = '1';

        setTimeout(() => {
            xpElement.style.opacity = '0.5';
            xpElement.textContent = previousTotalXP;

            let startXP = previousTotalXP;
            const duration = 800;
            const startTime = performance.now();

            function animateXP(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const currentXP = Math.floor(startXP + (xp - startXP) * progress);
                xpElement.textContent = currentXP;

                if (progress < 1) {
                    requestAnimationFrame(animateXP);
                } else {
                    xpElement.style.opacity = '1';
                }
            }
            requestAnimationFrame(animateXP);
        }, 2000);

        // Münzen-Anzeige
        coinsElement.textContent = `+${earnedCoins}`;
        coinsElement.style.opacity = '1';

        setTimeout(() => {
            coinsElement.style.opacity = '0.5';
            coinsElement.textContent = previousTotalCoins;

            let startCoins = previousTotalCoins;
            const duration = 800;
            const startTime = performance.now();

            function animateCoins(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const currentCoins = Math.floor(startCoins + (coins - startCoins) * progress);
                coinsElement.textContent = currentCoins;

                if (progress < 1) {
                    requestAnimationFrame(animateCoins);
                } else {
                    coinsElement.style.opacity = '1';
                }
            }
            requestAnimationFrame(animateCoins);
        }, 2000);
    }

    // Synchronisation prüfen und ausführen
    if (navigator.onLine && auth.currentUser) {
        syncCoinsAndXP();
    } else {
        saveToLocal(newTotalCoins, newTotalXP);
        animateStats(newTotalCoins, newTotalXP);
    }

    // Online-Synchronisation bei Verbindung
    window.addEventListener('online', () => {
        if (auth.currentUser) {
            syncCoinsAndXP();
        }
    });
});