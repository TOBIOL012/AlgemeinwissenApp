document.addEventListener("DOMContentLoaded", function () {
    const path = document.getElementById("xp-path");
    const progressPath = document.getElementById("xp-progress");
    const checkpointContainer = document.getElementById("checkpoints");

    const totalLength = path.getTotalLength();
    progressPath.setAttribute("d", path.getAttribute("d"));

    const checkpointCount = 10;
    const step = totalLength / (checkpointCount + 2);
    const checkpointSize = 70;
    const borderRadius = 30;

    const belohnungen = [
        { xpNeeded: 500, type: "münzen", value: 50, icon: "coin.png" },
        { xpNeeded: 1000, type: "münzen", value: 100, icon: "coin.png" },
        { xpNeeded: 2000, type: "profilbild", value: "neues-profilbild", icon: "/Profilbilder/Albert Einstein.png" },
        { xpNeeded: 3000, type: "streak", value: 1, icon: "streak.png" },
        { xpNeeded: 4000, type: "münzen", value: 200, icon: "coin.png" },
        { xpNeeded: 5000, type: "münzen", value: 150, icon: "coin.png" },
        { xpNeeded: 6000, type: "profilbild", value: "besonderes-bild", icon: "/Profilbilder/Donald Trump.png" },
        { xpNeeded: 7000, type: "streak", value: 2, icon: "streak.png" },
        { xpNeeded: 8000, type: "münzen", value: 300, icon: "coin.png" },
        { xpNeeded: 10000, type: "münzen", value: 500, icon: "coin.png" }
    ];

    let checkpoints = [];

    function berechneProzent(x) {
        let prozent = 0;
    
        // Die ersten 100 zählen *5
        prozent += Math.min(100, x) * 5;
    
        // Die nächsten 400 zählen *3
        if (x > 100) {
            prozent += Math.min(150, x - 100) * 3.3333333334;
        }
    
        // Alle weiteren zählen *1
        if (x > 250) {
            prozent += Math.min(750, x - 250) * 2;
        }

        if (x > 1000) {
            prozent += (x - 1000) * 1;
        }
    
        return prozent;
    }

    console.log(berechneProzent(1000));

    function updateXPProgress(xp, maxXP) {
        const progressLength = Math.min((xp / maxXP) * totalLength, totalLength);
        progressPath.style.strokeDasharray = `${progressLength}, ${totalLength}`;
        progressPath.style.transition = "stroke-dasharray 1.5s ease";
        localStorage.setItem("lastxp", xp);
        console.log("sigma");
    
        checkpoints.forEach(checkpoint => {
            let rewardData = JSON.parse(checkpoint.element.getAttribute("data-reward"));
    
            // **Check ob die Fortschrittslinie den Checkpoint überschritten hat**
            if (progressLength >= checkpoint.position) {
                checkpoint.element.classList.add("active");
                checkpoint.element.classList.remove("ready");
            } else {
                checkpoint.element.classList.remove("active");
                checkpoint.element.classList.add("ready");
            }
        });
    }

    let xp = null;

    function fetchXP() {
        const progressLength = Math.min((localStorage.getItem("lastxp") / 6000) * totalLength, totalLength);
        progressPath.style.strokeDasharray = `${progressLength}, ${totalLength}`;
        console.log(`uwu ${progressLength}, ${totalLength}`);
        const uid = localStorage.getItem('uid');
        if (!uid) return console.error("Keine Benutzer-UID gefunden.");
    
        firebase.firestore().collection("users").doc(uid).get().then(doc => {
            if (doc.exists) {
                xp = doc.data().xp || 0;
                const umgerechnetxp = berechneProzent(xp);
    
                // **Direkt zum umgerechneten XP-Wert scrollen**
                const iframe2 = document.querySelector(".iframe2");
                if (iframe2) {
                    const totalHeight = Math.min((umgerechnetxp / 6000) * totalLength, totalLength);
                    const scrollOffset = totalHeight - iframe2.offsetHeight / 2;
                    iframe2.scrollTop = scrollOffset; // Setzt den Scroll-Offset direkt basierend auf umgerechnetxp
                }
            }
        });
    }

    window.updatexpbar = function() {
        const umgerechnetxp = berechneProzent(xp);
        updateXPProgress(umgerechnetxp, 6000);
    };



    fetchXP();

    for (let i = 0; i < checkpointCount; i++) {
        let point = path.getPointAtLength(i * step);

        let checkpoint = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        checkpoint.setAttribute("x", point.x - checkpointSize / 2);
        checkpoint.setAttribute("y", point.y - checkpointSize / 2);
        checkpoint.setAttribute("width", checkpointSize);
        checkpoint.setAttribute("height", checkpointSize);
        checkpoint.setAttribute("rx", borderRadius);
        checkpoint.setAttribute("ry", borderRadius);
        checkpoint.dataset.index = i;

        if (i === 0) {
            checkpoint.setAttribute("class", "checkpoint start-checkpoint");
            checkpoint.setAttribute("data-reward", "{}");
            checkpoint.style.pointerEvents = "none";
            checkpointContainer.appendChild(checkpoint);
            continue;
        }

        let reward = belohnungen[i - 1];
        checkpoint.setAttribute("class", "checkpoint ready");
        checkpoint.setAttribute("data-reward", JSON.stringify(reward));

        let icon = document.createElementNS("http://www.w3.org/2000/svg", "image");
        icon.setAttribute("href", reward.icon);
        icon.setAttribute("x", point.x - 20);
        icon.setAttribute("y", point.y - 20);
        icon.setAttribute("width", "40");
        icon.setAttribute("height", "40");

        checkpointContainer.appendChild(checkpoint);
        checkpointContainer.appendChild(icon);

        // **Speichern der Position für die Progress-Überprüfung**
        checkpoints.push({ element: checkpoint, position: i * step });

        checkpoint.addEventListener("click", function () {
            if (checkpoint.classList.contains("collected")) return;
            if (!checkpoint.classList.contains("active")) return;

            let rewardData = JSON.parse(checkpoint.getAttribute("data-reward"));
            collectReward(rewardData, checkpoint, icon);
        });
    }
    
    
    
    
    
    
    
    function collectReward(reward, checkpoint, icon) {
        const uid = localStorage.getItem('uid');
        if (!uid) return console.error("Keine Benutzer-UID gefunden.");

        let userRef = firebase.firestore().collection("users").doc(uid);
        userRef.get().then(doc => {
            if (doc.exists) {
                let userData = doc.data();
                let newData = {};

                if (reward.type === "münzen") {
                    newData.coins = (userData.coins || 0) + reward.value;
                } else if (reward.type === "profilbild") {
                    newData.unlockedAvatars = [...(userData.unlockedAvatars || []), reward.value];
                } else if (reward.type === "streak") {
                    newData.streakOnIce = (userData.streakOnIce || 0) + reward.value;
                }

                userRef.update(newData).then(() => {
                    showPopup(reward);
                    checkpoint.classList.add("collected");
                    checkpoint.style.opacity = "1";
                    icon.style.opacity = "0.6";

                    fetchXP();
                });
            }
        });
    }

    function showPopup(reward) {
        let popup = document.createElement("div");
        popup.classList.add("reward-popup");
        popup.textContent = `+${reward.value} ${reward.type === "münzen" ? "Münzen" : reward.type === "profilbild" ? "Neues Profilbild!" : "Streak auf Eis"}`;
        
        document.body.appendChild(popup);

        setTimeout(() => {
            popup.style.opacity = "0";
            popup.style.transform = "translateY(-50px)";
        }, 1500);

        setTimeout(() => {
            popup.remove();
        }, 2000);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const xpDisplay = document.getElementById("xp-display");

    function animateXP(start, end, duration) {
        let startTime = null;
        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            let progress = timestamp - startTime;
            let current = Math.min(start + (end - start) * (progress / duration), end);
            xpDisplay.textContent = Math.floor(current) + " XP";
            if (current < end) {
                requestAnimationFrame(step);
            }
        }
        requestAnimationFrame(step);
    }

    function updateXPDisplay(newXP) {
        let oldXP = parseInt(xpDisplay.textContent) || 0;
        animateXP(oldXP, newXP, 2000); // Animation dauert 2 Sekunden
    }

    function fetchAndDisplayXP() {
        const uid = localStorage.getItem('uid');
        if (!uid) return console.error("Keine Benutzer-UID gefunden.");

        firebase.firestore().collection("users").doc(uid).get().then(doc => {
            if (doc.exists) {
                let currentXP = doc.data().xp || 0;
                updateXPDisplay(currentXP);
            }
        });
    }

    fetchAndDisplayXP();
});




