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

        const profiles = profilbilder;
        function getRandomProfiles(profiles, count) {
            const weightedProfiles = [];
            profiles.forEach(profile => {
                for (let i = 0; i < profile.seltenheit; i++) {
                    weightedProfiles.push(profile.name);
                }
            });

            const seed = new Date().toISOString().split('T')[0]; // Use today's date as seed
            let randomSeed = 0;
            for (let i = 0; i < seed.length; i++) {
                randomSeed += seed.charCodeAt(i);
            }

            function seededRandom(seed) {
                const x = Math.sin(seed++) * 10000;
                return x - Math.floor(x);
            }

            const selectedProfiles = new Set();
            while (selectedProfiles.size < count) {
                const randomIndex = Math.floor(seededRandom(randomSeed++) * weightedProfiles.length);
                selectedProfiles.add(weightedProfiles[randomIndex]);
            }

            return Array.from(selectedProfiles);
        }

        const todayprofiles = getRandomProfiles(profiles, 3);

    
        const profileTrack = document.querySelector(".profile-picture-track");
        if (!todayprofiles.every(profile => 
            profiles.find(p => p.name === profile && window.userData.profilepictures.includes(p.datei))
        )) {
            profileTrack.innerHTML = "";
        } else {
            profileTrack.innerHTML = "<a>keine neuen Profilbilder</a>";
        }
    
        todayprofiles.forEach((profile, index) => {
            const profileWrapper = document.createElement("div");
            profileWrapper.className = "profile-picture-wrapper";

            const profileData = profiles.find(p => p.name === profile);
            if (profileData) {
                // Check if the profile picture is already in the user's profilepictures
                if (!window.userData.profilepictures.includes(profileData.datei)) {
                    profileWrapper.innerHTML = `
                        <div class="profile-picture" style="--profile-bg: ${profileData.farbe};">
                          <img src="/Profilbilder/${profileData.datei}" alt="Profilbild">
                        </div>
                        <div class="profile-bottom">
                          <div class="profile-name">${profileData.name}</div>
                          <button class="buy-button">
                            <span class="price-amount">${profileData.preis}</span>
                            <img src="coin.png" alt="Münzen" class="coin-icon">
                          </button>          
                        </div>
                    `;

                    const buyButton = profileWrapper.querySelector(".buy-button");
                    if (buyButton) {
                        buyButton.addEventListener("click", () => {
                            showGlobalModal(
                                "Kauf bestätigen",
                                `Möchtest du ${profileData.name} für ${profileData.preis} Coins kaufen?`,
                                "kreuz.png",
                                (result) => {
                                    if (result === "ok") {
                                        if (coins >= profileData.preis) {
                                            firestore.collection("users").doc(uid).update({
                                                profilepictures: firebase.firestore.FieldValue.arrayUnion(profileData.datei),
                                                coins: firebase.firestore.FieldValue.increment(-profileData.preis),
                                                currentprofile: profileData.datei
                                            })
                                            .then(() => {
                                                updateUI();
                                                frames[3].style.zIndex = "1500";
                                                frames[3].style.position = "absolute";
                                                frames[3].style.top = "0";
                                                frames[3].style.transition = "opacity 0.6s";
                                                frames[3].style.opacity = "0";
                                                setTimeout(() => {frames[3].style = "display: none;";}, 600);    
                                                frames[4].style.display = "flex";
                                            })
                                            .catch(error => {
                                                console.error("Fehler beim Aktualisieren:", error);
                                            });
                                        }
                                    }
                                }
                            );
                        });
                    }

                    profileTrack.appendChild(profileWrapper);
                }
            }
        });



    });

    
      