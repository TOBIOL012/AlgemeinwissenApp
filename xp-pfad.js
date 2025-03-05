document.addEventListener("DOMContentLoaded", function () {
    // Global: Elemente, die im gesamten Code genutzt werden
    const xpDisplay = document.getElementById("xp-display");
  
    // Initialisiert die XP-Leiste und Checkpoints
    function initXPAndCheckpoints() {
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
      let xp = window.userData ? window.userData.xp || 0 : 0;
  
      // Berechnet den umgerechneten XP-Prozentwert
      function berechneProzent(x) {
        let prozent = 0;
        prozent += Math.min(100, x) * 5;
        if (x > 100) {
          prozent += Math.min(150, x - 100) * 3.3333333334;
        }
        if (x > 250) {
          prozent += Math.min(750, x - 250) * 2;
        }
        if (x > 1000) {
          prozent += (x - 1000) * 1;
        }
        return prozent;
      }

      window.berechneProzent = berechneProzent;
  
      console.log(berechneProzent(1000));
  
      // Aktualisiert die visuelle Darstellung der XP-Leiste
      function updateXPProgress(xp, maxXP) {
        updateXPDisplay(window.userData ? window.userData.xp : 10);
        const progressLength = Math.min((xp / maxXP) * totalLength, totalLength);
        progressPath.style.strokeDasharray = `${progressLength}, ${totalLength}`;
        progressPath.style.transition = "stroke-dasharray 1.5s ease";
        localStorage.setItem("lastxp", xp);
      }

      function start(XP) {
        checkpoints.forEach(checkpoint => {
          if (Math.min((XP / 6000) * totalLength, totalLength) >= checkpoint.position) {
            checkpoint.element.classList.add("active");
            checkpoint.element.classList.remove("ready");
          } else {
            checkpoint.element.classList.remove("active");
            checkpoint.element.classList.add("ready");
          }
        });
      } 
      window.start = start;
  
      // Lädt den XP-Wert und scrollt zum umgerechneten XP-Wert im iframe oder Container
      function fetchXP() {
        // Funktion, die so lange aufgerufen wird, bis .iframe2 eine Höhe > 0 hat.
        function scrollAfterAllData() {
          const frame = document.querySelector(".iframe2");
          if (!frame || frame.offsetHeight <= 0) {
            return requestAnimationFrame(scrollAfterAllData);
          }
          // Prüfe das Element .profil:
          const profil = document.querySelector(".profil");
          if (profil) {
            const profilStyle = getComputedStyle(profil);
            if (profilStyle.display === "none") {
              console.log(".profil ist nicht sichtbar (display none).");
            } else if (profilStyle.transform && profilStyle.transform !== "none") {
              const matrixValues = profilStyle.transform.match(/matrix.*\((.+)\)/);
              if (matrixValues) {
                const values = matrixValues[1].split(', ');
                const translateY = parseFloat(values[5]);
                console.log("translateY:", translateY);
                if (translateY < -150 || translateY > 50) {
                  console.log(".profil transform außerhalb des Bereichs [-150, 50].");
                } else {
                  console.log(".profil transform im Bereich, trotzdem scrollen...");
                }
              }
            } else {
              console.log(".profil sichtbar ohne Transform, trotzdem scrollen...");
            }
          } else {
            console.log("Kein .profil-Element gefunden, also scrollen.");
          }
    
          // Scroll zum XP-Wert (wie im Originalcode)
          const progressLength = Math.min((localStorage.getItem("lastxp") / 6000) * totalLength, totalLength);
          progressPath.style.strokeDasharray = `${progressLength}, ${totalLength}`;
          console.log(`uwu ${progressLength}, ${totalLength}`);
          const uid = localStorage.getItem("uid");
          if (!uid) return console.error("Keine Benutzer-UID gefunden.");
    
          xp = window.userData ? window.userData.xp || 0 : 0;
          const umgerechnetxp = berechneProzent(xp);
    
          const totalHeight = Math.min((umgerechnetxp / 6000) * totalLength, totalLength);
          const scrollOffset = totalHeight - (frame ? frame.offsetHeight / 2 : 0);
    
          if (frame) {
            frame.style.overflow = "auto";
            frame.scrollTop = scrollOffset;
            console.log(getComputedStyle(frame).overflow);
            console.log("ScrollOffset1:", frame.scrollTop);
            console.log("ScrollOffset:", scrollOffset);
          } else {
            console.log("Kein Scrollen möglich (scrollOffset 0 oder fehlendes Element).");
          }
        }
    
        // Doppelte requestAnimationFrame-Aufrufe sorgen dafür, dass alle DOM-Änderungen abgeschlossen sind.
        requestAnimationFrame(function () {
          requestAnimationFrame(scrollAfterAllData);
        });
      }
    
      // Mache fetchXP global verfügbar
      window.fetchXP = fetchXP;
    
      // Globale Funktion zum Aktualisieren der XP-Bar
      window.updatexpbar = function () {
        const umgerechnetxp = berechneProzent(xp);
        updateXPProgress(umgerechnetxp, 6000);
      };
    
      // Erzeugt die einzelnen Checkpoints und verknüpft sie mit Belohnungen
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
    
        checkpoints.push({ element: checkpoint, position: i * step });
    
        checkpoint.addEventListener("click", function () {
          if (checkpoint.classList.contains("collected")) return;
          if (!checkpoint.classList.contains("active")) return;
    
          let rewardData = JSON.parse(checkpoint.getAttribute("data-reward"));
          collectReward(rewardData, checkpoint, icon);
        });
      }
    
      // Verarbeitet die Belohnungen nach einem Klick
      function collectReward(reward, checkpoint, icon) {
        const uid = localStorage.getItem("uid");
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
    
              // Nach der Belohnung erneut den XP-Wert holen und scrollen
              fetchXP();
            });
          }
        });
      }
    
      // Zeigt ein Popup für die erhaltene Belohnung an
      function showPopup(reward) {
        let popup = document.createElement("div");
        popup.classList.add("reward-popup");
        popup.textContent = `+${reward.value} ${
          reward.type === "münzen"
            ? "Münzen"
            : reward.type === "profilbild"
            ? "Neues Profilbild!"
            : "Streak auf Eis"
        }`;
    
        document.body.appendChild(popup);
    
        setTimeout(() => {
          popup.style.opacity = "0";
          popup.style.transform = "translateY(-50px)";
        }, 1500);
    
        setTimeout(() => {
          popup.remove();
        }, 2000);
      }
    } // Ende von initXPAndCheckpoints
    
    // Animiert den Zähler für die XP-Anzeige
    function animateXPCount(start, end, duration) {
      let startTime = null;
    
      function updateCount(currentTime) {
        if (!startTime) startTime = currentTime;
        let progress = Math.min((currentTime - startTime) / duration, 1);
        if (xpDisplay) {
          xpDisplay.textContent = Math.floor(start + progress * (end - start)) + " XP";
        }
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      }
      requestAnimationFrame(updateCount);
    }
    
    // Aktualisiert die XP-Anzeige
    function updateXPDisplay(xp) {
      const lastXP = parseInt(localStorage.getItem("lastXP")) || 0;
      animateXPCount(lastXP, xp, 2000);
      localStorage.setItem("lastXP", xp);
    }
    
    // Beim Laden der Firebase-Daten werden die Funktionen aufgerufen
    document.addEventListener("firebaseDataLoaded", function () {
      initXPAndCheckpoints();
      if (window.fetchXP) {
        window.fetchXP();
        const umgerechnetxp = window.berechneProzent(window.userData.xp);
        window.start(umgerechnetxp);
      }
      xpDisplay.textContent = localStorage.getItem("lastXP") + " XP";
    });
    
    // Falls die Firebase-Daten bereits vorliegen, initialisiere direkt
    if (document.readyState === "complete" || document.readyState === "interactive") {
      initXPAndCheckpoints();
      if (window.userData && window.userData.xp !== undefined) {
        updateXPDisplay(window.userData.xp);
      }
      if (window.fetchXP) {
        window.fetchXP();
      }
    }
  });
  
  