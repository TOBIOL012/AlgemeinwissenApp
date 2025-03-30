document.addEventListener('DOMContentLoaded', function () {
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
    localStorage.setItem("mission-game", (parseInt(localStorage.getItem("mission-game")) || 0) + 1);
    


    // Fortschrittsanzeige
    const percentage = Math.round((correctCount / 15) * 100);
    if (percentage == 100){
        localStorage.setItem("mission-perfectgame", (parseInt(localStorage.getItem("mission-perfectgame")) || 0) + 1);
    }
    document.querySelector('.progress').style.width = `${percentage}%`;
    document.querySelector('.progress a').textContent = `${percentage}%`;

    if(localStorage.getItem("mode") == "mehrspieler"){
        document.querySelector(".progress-bar").style.display = "none";
    }
    localStorage.setItem("mode", "")

    

    // Funktion: Münzen und XP synchronisieren
    function syncCoinsAndXP() {
        if (window.userData.higheststreak !== null){
            const currentCoins = window.userData.coins;
            const currentXP = window.userData.xp;
            firestore.collection("users").doc(uid).update({
                coins: firebase.firestore.FieldValue.increment(earnedCoins),
                xp: firebase.firestore.FieldValue.increment(earnedXP),
            })
            animateStats(currentCoins + earnedCoins, currentXP + earnedXP, currentCoins, currentXP, earnedCoins, earnedXP);
        } else {
            const currentCoins = parseInt(localStorage.getItem("coins")) || 0;
            const currentXP = parseInt(localStorage.getItem("xp")) || 0;
            if (localStorage.getItem("uid")){
                localStorage.setItem("xp-plus", (parseInt(localStorage.getItem("xp-plus")) || 0) + earnedXP);
                localStorage.setItem("coins-plus", (parseInt(localStorage.getItem("coins-plus")) || 0) + earnedCoins);
                localStorage.setItem("xp", (parseInt(localStorage.getItem("xp")) || 0) + earnedXP);
                localStorage.setItem("coins", (parseInt(localStorage.getItem("coins")) || 0) + earnedCoins);
            } else {
                localStorage.setItem("xp", (parseInt(localStorage.getItem("xp")) || 0) + earnedXP);
                localStorage.setItem("coins", (parseInt(localStorage.getItem("coins")) || 0) + earnedCoins);
                console.log("kein benutzer");
            }
            animateStats(currentCoins + earnedCoins, currentXP + earnedXP, currentCoins, currentXP, earnedCoins, earnedXP);
        }
        const nextButton = document.getElementById('next-button');
        nextButton.addEventListener('click', function () {
            window.location.href = 'startseite.html';
        });
    }


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


    // Online-Synchronisation bei Verbindung
    document.addEventListener("firebaseDataLoaded", function handler() {
        setTimeout(syncCoinsAndXP, 1000);
        document.removeEventListener("firebaseDataLoaded", handler);
    });
});