    let coins = null;
    let ice = null;
    let tokens = null;

    function updateUI() {
        document.querySelector(".coins-shop").textContent = coins;
        document.getElementById("streak-count").textContent = `${ice}/2`;
        document.getElementById("token-count").textContent = `${tokens}/200`;
    }

    




    // Hilfsfunktion, die das Preis-Element (den Text) kurz rot aufleuchten lässt
function flashPrice(selector) {
    const priceElem = document.querySelector(selector);
    if (priceElem) {
        priceElem.style.transition = "color 0.2s ease, transform 0.2s ease";
        const originalColor = window.getComputedStyle(priceElem).color;
        priceElem.style.color = "rgb(219 40 40)";
        priceElem.style.transform = "scale(1.1)";
        setTimeout(() => {
            priceElem.style.color = originalColor;
            priceElem.style.transform = "scale(1)";
        }, 300);
    }
}

window.buyStreak = function () {
    // Prüfen, ob genügend Münzen vorhanden sind und ob das Limit (max. 2) noch nicht erreicht wurde
    if (coins < 200 || ice >= 2) {
        flashPrice(".shop-item1 .right1 .price");
        return;
    }
    // Zeige Bestätigungsmodal an, wenn Bedingungen erfüllt sind
    showGlobalModal(
        "Kauf bestätigen",
        "Möchtest du 1x Streak auf Eis für 200 Münzen kaufen?",
        "kreuz.png",
        (result) => {
            if (result === "ok") {
                if (coins >= 200 && ice < 2) {
                    firestore.collection("users").doc(uid).update({
                        streakOnIce: firebase.firestore.FieldValue.increment(1),
                        coins: firebase.firestore.FieldValue.increment(-200)
                    })
                    .then(() => {
                        console.log("Kauf erfolgreich ausgeführt");
                        streakOnIce++;
                        coins -= 200;
                        updateUI();
                    })
                    .catch(error => {
                        console.error("Fehler beim Aktualisieren:", error);
                    });
                }
            }
        }
    );
};

window.buyTokens = function () {
    // Beim Token-Kauf: Prüfen, ob genügend Münzen vorhanden sind und ob das Limit (max. 200, also 10er-Schritte ≤ 190) nicht erreicht ist
    if (coins < 200 || tokens > 190) {
        flashPrice(".shop-item2 .right2 .price");
        return;
    }
    showGlobalModal(
        "Kauf bestätigen",
        "Möchtest du 10x Tokens für 200 Münzen kaufen?",
        "kreuz.png",
        (result) => {
            if (result === "ok") {
                if (coins >= 200 && tokens <= 190) {
                    firestore.collection("users").doc(uid).update({
                        token: firebase.firestore.FieldValue.increment(10),
                        coins: firebase.firestore.FieldValue.increment(-200)
                    })
                    .then(() => {
                        console.log("Kauf erfolgreich ausgeführt");
                        tokens += 10;
                        coins -= 200;
                        updateUI();
                    })
                    .catch(error => {
                        console.error("Fehler beim Aktualisieren:", error);
                    });
                }
            }
        }
    );
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

    window.buyProfilePicture = function(imageSrc, price) {
        if (coins >= price) {
          firestore.collection("users").doc(uid).update({
            // Setze das gekaufte Profilbild – ggf. kannst du hier auch ein Array führen, falls mehrere Käufe möglich sein sollen
            profilePicture: imageSrc,
            coins: firebase.firestore.FieldValue.increment(-price)
          })
          .then(() => {
            console.log("Profilbild gekauft: " + imageSrc);
            coins -= price;
            // Hier kannst du zusätzlich die UI aktualisieren, z. B. das aktuell angezeigte Profilbild ändern
          })
          .catch(error => {
            console.error("Fehler beim Kauf des Profilbildes:", error);
          });
        } else {
          console.log("Nicht genug Münzen für den Kauf!");
        }
      };
      