    let coins = null;
    let ice = null;
    let tokens = null;

    function updateUI() {
        document.querySelector(".coins-shop").textContent = coins;
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
        ice = window.userData.streakOnIce;
        coins = window.userData.coins;
        tokens = window.userData.token;
        updateUI();
    }

    
    document.addEventListener("firebaseDataLoaded", function () {
        syncStatsFromServiceWorker();
    });
