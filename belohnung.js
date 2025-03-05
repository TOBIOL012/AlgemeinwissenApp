document.addEventListener('DOMContentLoaded', function () {

    

    const uid = localStorage.getItem("uid");
    console.log(uid);
    
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

    const { increaseValue, readData, extendStreak} = window;
    
    // Firebase initialisieren
    const app = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const firestore = firebase.firestore();

    // Berechnungen für Münzen und XP
    const correctCount = parseInt(localStorage.getItem('correctCount') || '0', 10);
    const earnedCoins = correctCount; // 1 Münze pro richtiger Frage
    const earnedXP = 10 + (2 * correctCount); // 20 XP + 2 XP pro richtiger Frage

    const xpElement = document.getElementById('xp-total');
    const coinsElement = document.getElementById('coins-total');
    xpElement.textContent = `+${earnedXP}`;
    xpElement.style.opacity = '1';
    coinsElement.textContent = `+${earnedCoins}`;
    coinsElement.style.opacity = '1';

    extendStreak();


    // Fortschrittsanzeige
    const percentage = Math.round((correctCount / 15) * 100);
    document.querySelector('.progress').style.width = `${percentage}%`;
    document.querySelector('.progress a').textContent = `${percentage}%`;

    const nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', function () {
        window.location.href = 'startseite.html';
    });

    // Funktion: Münzen und XP synchronisieren
    function syncCoinsAndXP() {
        readData("coins", (currentCoins) => {
            readData("xp", (currentXP) => {
                // Erhöhe die Coins und XP mit den globalen Funktionen
                console.log("oioioi");
                increaseValue("coins", earnedCoins);
                increaseValue("xp", earnedXP);
                console.log(currentXP);
                console.log(currentXP + earnedXP);

                // Aktualisiere die Anzeige
                animateStats(currentCoins + earnedCoins, currentXP + earnedXP, currentCoins, currentXP, earnedCoins, earnedXP);
            });
        });
    }

    // Funktion: Lokale Werte speichern
    function saveToLocal(coins, xp) {
        localStorage.setItem('totalCoins', coins);
        localStorage.setItem('totalXP', xp);
    }

    // Funktion: Statistiken mit Animation aktualisieren
    function animateStats(coins, xp, coinsbefore, xpbefore) {
        const xpElement = document.getElementById('xp-total');
        const coinsElement = document.getElementById('coins-total');
    
        // XP-Animation
        let startXP = xpbefore;
        const xpDuration = 800;
        const xpStartTime = performance.now();
    
        function animateXP(currentTime) {
            const elapsed = currentTime - xpStartTime;
            const progress = Math.min(elapsed / xpDuration, 1);
            const currentXP = Math.floor(startXP + (xp - startXP) * progress);
            xpElement.textContent = currentXP;
    
            if (progress < 1) {
                requestAnimationFrame(animateXP);
            }
        }
        requestAnimationFrame(animateXP);
    
        // Münzen-Animation
        let startCoins = coinsbefore;
        const coinsDuration = 800;
        const coinsStartTime = performance.now();
    
        function animateCoins(currentTime) {
            const elapsed = currentTime - coinsStartTime;
            const progress = Math.min(elapsed / coinsDuration, 1);
            const currentCoins = Math.floor(startCoins + (coins - startCoins) * progress);
            coinsElement.textContent = currentCoins;
    
            if (progress < 1) {
                requestAnimationFrame(animateCoins);
            }
        }
        requestAnimationFrame(animateCoins);
    }

    // Synchronisation prüfen und ausführen
    syncCoinsAndXP();

    // Online-Synchronisation bei Verbindung
    window.addEventListener('online', () => {
        if (auth.currentUser) {
            syncCoinsAndXP();
        }
    });
});