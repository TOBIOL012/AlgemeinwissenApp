document.addEventListener("firebaseDataLoaded", function() {
  // Hilfsfunktion: Aktualisiert die UI (Daily Missions und Life Tasks)
  function renderUI() {
    // --- UI-Aktualisierung: Daily Missions anzeigen ---
    let dailyMissions = document.querySelector(".daily-missions");
    dailyMissions.innerHTML = "";
    let missions = window.userData.dailyTasks;
    
    missions.forEach((mission, index) => {
      let rewardImage = "";
      switch (mission.belohnungsart) {
        case "coins":
          rewardImage = "coin.png";
          break;
        case "token":
          rewardImage = "token.png";
          break;
        case "xp":
          rewardImage = "xp.png";
          break;
        default:
          rewardImage = "default.png"; // Fallback image
      }
  
      if (mission.anzahlbisjetzt === -1 || mission.anzahlbisjetzt >= mission.anzahl) {
        console.log("Mission finished");
        dailyMissions.innerHTML += `
          <div class="mission">
            <div class="mission-header">
              <a class="mission-title">${mission.ueberschrift}</a>
              <div class="reward-header">
                <img src="https://img.icons8.com/sf-black-filled/64/7db76b/checked-checkbox.png" alt="checked-checkbox" style="scale: 1.4">
              </div>
            </div>
            <div class="progress-bar">
              <div class="progress-finished" style="width:100%"><div class="highlight-finished"></div></div>
            </div>
          </div>`;
      } else {
        dailyMissions.innerHTML += `
          <div class="mission">
            <div class="mission-header">
              <a class="mission-title">${mission.ueberschrift}</a>
              <div class="reward-header">
                <a class="reward-amount">+${mission.belohnungsmenge}</a>
                <img src="${rewardImage}">
              </div>
            </div>
            <div class="progress-bar">
              <div class="progress" style="width:${localStorage.getItem("anzahlbisjetzt" + index) || 0}%"><div class="highlight"></div></div>
            </div>
          </div>`;
      }
    });
  
    let lifemissions = document.querySelector(".abzeichen-container");
    lifemissions.innerHTML = "";
    let abzeichen = window.userData.lifeTasks;
    
    abzeichen.forEach((mission) => {
      let index = null;
      if (mission.anzahlbisjetzt >= mission.anzahl3) {
        index = 4;
      } else if (mission.anzahlbisjetzt >= mission.anzahl2) {
        index = 3;
      } else if (mission.anzahlbisjetzt >= mission.anzahl1) {
        index = 2;
      } else {
        index = 1;
      }
  
      let rewardImage = "";
      switch (mission["belohnungsart" + index]) {
        case "coins":
          rewardImage = "coin.png";
          break;
        case "token":
          rewardImage = "token.png";
          break;
        case "xp":
          rewardImage = "xp.png";
          break;
        default:
          rewardImage = "default.png"; // Fallback image
      }
  
      if (mission.anzahlbisjetzt >= mission.anzahl3) {
        console.log("Mission finished");
        lifemissions.innerHTML += `
          <div class="abzeichen">
            <div class="abzeichen-inner">
              <div class="abzeichen-header">
                <div class="abzeichen-header-header">
                  <a class="abzeichen-title">${mission.ueberschrift}</a>
                  <div class="reward-header">
                    <img src="https://img.icons8.com/sf-black-filled/64/7db76b/checked-checkbox.png" alt="checked-checkbox" style="scale: 1.4">
                  </div>
                </div>
                <div class="abzeichen-erklärung">${mission.erklärung3}</div>
              </div>
              <div class="abzeichen-footer">
                <div class="progress-bar-abzeichen">
                  <div class="progress-finished" style="width:100%"><div class="highlight-abzeichen"></div></div>
                </div>
              </div>
            </div>
            <img src="icons8-smaragd-64.png" alt="Münzen">
          </div>`;
      } else {
        lifemissions.innerHTML += `
        <div class="abzeichen">
          <div class="abzeichen-inner">
            <div class="abzeichen-header">
              <div class="abzeichen-header-header">
                <a class="abzeichen-title">${mission.ueberschrift}</a>
                <div class="reward-header">
                  <a class="reward-amount">+${mission["belohnungsmenge" + index]}</a>
                  <img src="${rewardImage}">
                </div>
              </div>
              <div class="abzeichen-erklärung">${mission["erklärung" + index]}</div>
            </div>
            <div class="abzeichen-footer">
              <div class="progress-bar-abzeichen">
                <div class="progress-abzeichen" style="width:${(mission.anzahlbisjetzt / mission["anzahl" + index]) * 100}%"><div class="highlight-abzeichen"></div></div>
              </div>
            </div>
          </div>
          <div class="img"><img src="abzeichen/${mission["abzeichen" + index]}" alt="Münzen"></div>
        </div>`;
      }
    });
  }
  
  // Direkt beim Eventaufruf die UI rendern
  renderUI();
  
  // --- Unabhängige Aktualisierung der Life Missions bei jedem firebaseDataLoaded ---
  (function updateLifeTasks() {
    const userRefLife = firestore.collection("users").doc(uid);
    userRefLife.get()
      .then(function(doc) {
        if (doc.exists) {
          let data = doc.data();
          let lifeTasks = data.lifeTasks || window.userData.lifeTasks;
          let aggregatedLifeReward = { coins: 0, token: 0, xp: 0 };
  
          lifeTasks.forEach(function(mission) {
            // Aktualisiere anzahlbisjetzt basierend auf dem Typ der lifeTask
            if (mission.art === "xp") {
              mission.anzahlbisjetzt = window.userData.xp;
            } else if (mission.art === "streak") {
              mission.anzahlbisjetzt = window.userData.higheststreak;
            } else if (mission.art === "geschichte") {
              let increment = Number(localStorage.getItem("mission-geschichte1")) || 0;
              mission.anzahlbisjetzt = (mission.anzahlbisjetzt || 0) + increment;
              localStorage.setItem("mission-geschichte1", 0);
            } else if (mission.art === "geographie") {
              let increment = Number(localStorage.getItem("mission-geographie1")) || 0;
              mission.anzahlbisjetzt = (mission.anzahlbisjetzt || 0) + increment;
              localStorage.setItem("mission-geographie1", 0);
            } else if (mission.art === "wissenschaft") {
              let increment = Number(localStorage.getItem("mission-wissenschaft1")) || 0;
              mission.anzahlbisjetzt = (mission.anzahlbisjetzt || 0) + increment;
              localStorage.setItem("mission-wissenschaft1", 0);
            } else if (mission.art === "fehler") {
              let increment = Number(localStorage.getItem("mission-fehler1")) || 0;
              mission.anzahlbisjetzt = (mission.anzahlbisjetzt || 0) + increment;
              localStorage.setItem("mission-fehler1", 0);
            } else if (mission.art === "question") {
              let increment = Number(localStorage.getItem("mission-question1")) || 0;
              mission.anzahlbisjetzt = (mission.anzahlbisjetzt || 0) + increment;
              localStorage.setItem("mission-question1", 0);
            }
  
            // Prüfe und addiere Belohnungen, falls Schwellenwerte erreicht wurden
            if (mission.anzahlbisjetzt >= mission.anzahl1 && mission.belohnungsmenge1 !== -1) {
              if (mission.belohnungsart1 === "coins") {
                aggregatedLifeReward.coins += mission.belohnungsmenge1;
              } else if (mission.belohnungsart1 === "token") {
                aggregatedLifeReward.token += mission.belohnungsmenge1;
              } else if (mission.belohnungsart1 === "xp") {
                aggregatedLifeReward.xp += mission.belohnungsmenge1;
              }
              mission.belohnungsmenge1 = -1;
            }
            if (mission.anzahlbisjetzt >= mission.anzahl2 && mission.belohnungsmenge2 !== -1) {
              if (mission.belohnungsart2 === "coins") {
                aggregatedLifeReward.coins += mission.belohnungsmenge2;
              } else if (mission.belohnungsart2 === "token") {
                aggregatedLifeReward.token += mission.belohnungsmenge2;
              } else if (mission.belohnungsart2 === "xp") {
                aggregatedLifeReward.xp += mission.belohnungsmenge2;
              }
              mission.belohnungsmenge2 = -1;
            }
            if (mission.anzahlbisjetzt >= mission.anzahl3 && mission.belohnungsmenge3 !== -1) {
              if (mission.belohnungsart3 === "coins") {
                aggregatedLifeReward.coins += mission.belohnungsmenge3;
              } else if (mission.belohnungsart3 === "token") {
                aggregatedLifeReward.token += mission.belohnungsmenge3;
              } else if (mission.belohnungsart3 === "xp") {
                aggregatedLifeReward.xp += mission.belohnungsmenge3;
              }
              mission.belohnungsmenge3 = -1;
            }
          });
  
          let updateData = { lifeTasks: lifeTasks };
          if (aggregatedLifeReward.coins !== 0) {
            updateData.coins = firebase.firestore.FieldValue.increment(aggregatedLifeReward.coins);
          }
          if (aggregatedLifeReward.token !== 0) {
            updateData.token = firebase.firestore.FieldValue.increment(aggregatedLifeReward.token);
          }
          if (aggregatedLifeReward.xp !== 0) {
            updateData.xp = firebase.firestore.FieldValue.increment(aggregatedLifeReward.xp);
          }
          return userRefLife.update(updateData);
        } else {
          return Promise.reject("Dokument nicht vorhanden");
        }
      })
      .then(function() {
        console.log("Belohnungen und lifeTasks wurden aktualisiert!");
      })
      .catch(function(error) {
        console.error("Fehler beim Update der lifeTasks:", error);
      });
  })();
  
  // --- Lock für Daily Tasks (falls noch nicht gesetzt) ---
  if (window.firebaseDataLoadedLock) return;
  window.firebaseDataLoadedLock = true;
  
  // --- UI-Aktualisierung: Daily Missions anzeigen (erneut, um eventuelle Änderungen zu rendern) ---
  // (Dieser Codeblock wurde schon in renderUI() definiert, hier erfolgt nur noch ein erneuter Aufruf, wenn nötig.)
  renderUI();
  
  // --- Hilfsfunktion: Wartet, bis das Element ".missions" sichtbar wird ---
  function waitForMissionsVisible(callback) {
    const missionsPage = document.querySelector(".missions");
    if (missionsPage && getComputedStyle(missionsPage).display !== "none") {
      callback();
    } else if (missionsPage) {
      let observer = new MutationObserver((mutations, obs) => {
        if (getComputedStyle(missionsPage).display !== "none") {
          obs.disconnect();
          callback();
        }
      });
      observer.observe(missionsPage, { attributes: true, attributeFilter: ["style"] });
    } else {
      // Falls das Element noch nicht existiert, prüfe periodisch
      let interval = setInterval(() => {
        const missionsPage = document.querySelector(".missions");
        if (missionsPage && getComputedStyle(missionsPage).display !== "none") {
          clearInterval(interval);
          callback();
        }
      }, 200);
    }
  }
  
  // --- Funktion zur Fortschrittsaktualisierung und Firestore-Belohnungsupdate ---
  function updateProgress() {
    const missionsPage = document.querySelector(".missions");
    if (!missionsPage || getComputedStyle(missionsPage).display === "none") {
      console.log("Missions-Seite nicht sichtbar – warte bis sie sichtbar wird...");
      waitForMissionsVisible(updateProgress);
      return;
    }
  
    const progressbars = document.querySelectorAll(".progress-bar");
    console.log("updateProgress aufgerufen");
    let finishedMissions = []; // Indizes aller fertiggestellten Missionen
    let aggregatedReward = { coins: 0, token: 0, xp: 0 };
  
    progressbars.forEach((missionEl, index) => {
      const task = window.userData.dailyTasks[index];
      if (task.anzahlbisjetzt !== -1 && task.anzahlbisjetzt >= task.anzahl) {
        finishedMissions.push(index);
        if (task.belohnungsart === "coins") {
          aggregatedReward.coins += task.belohnungsmenge;
        } else if (task.belohnungsart === "token") {
          aggregatedReward.token += task.belohnungsmenge;
        } else if (task.belohnungsart === "xp") {
          aggregatedReward.xp += task.belohnungsmenge;
        }
        // Die Belohnungs-Animation wird erst ausgeführt, wenn die Missions-Seite sichtbar ist.
        waitForMissionsVisible(function() {
          animateReward(task, index);
        });
      }
  
      // Berechne und setze den Fortschritt
      let progress = (task.anzahlbisjetzt / task.anzahl) * 100;
      setTimeout(() => {
        const progressElement = missionEl.querySelector(".progress") || missionEl.querySelector(".progress-finished");
        if (progressElement) {
          let missionContainer = missionEl.closest(".mission");
          if (missionContainer && getComputedStyle(missionContainer).display === "none") {
            let observer = new MutationObserver((mutations, obs) => {
              if (getComputedStyle(missionContainer).display !== "none") {
                progressElement.style.transition = "width 0.5s ease-in-out";
                progressElement.style.width = progress + "%";
                obs.disconnect();
              }
            });
            observer.observe(missionContainer, { attributes: true, attributeFilter: ["style"] });
          } else {
            progressElement.style.transition = "width 0.5s ease-in-out";
            progressElement.style.width = progress + "%";
          }
        }
      }, 0);
      localStorage.setItem("anzahlbisjetzt" + index, progress);
    });
  
    if (finishedMissions.length > 0) {
      const userRef = firestore.collection("users").doc(uid);
      userRef.get()
        .then(function(doc) {
          if (doc.exists) {
            let data = doc.data();
            let dailyTasks = data.dailyTasks || [];
            finishedMissions.forEach(function(i) {
              dailyTasks[i].anzahlbisjetzt = -1;
            });
            let updateData = { dailyTasks: dailyTasks };
            if (aggregatedReward.coins !== 0) {
              updateData.coins = firebase.firestore.FieldValue.increment(aggregatedReward.coins);
            }
            if (aggregatedReward.token !== 0) {
              updateData.token = firebase.firestore.FieldValue.increment(aggregatedReward.token);
            }
            if (aggregatedReward.xp !== 0) {
              updateData.xp = firebase.firestore.FieldValue.increment(aggregatedReward.xp);
            }
            return userRef.update(updateData);
          } else {
            return Promise.reject("Dokument nicht vorhanden");
          }
        })
        .then(function() {
          console.log("Belohnungen und dailyTasks wurden aktualisiert!");
        })
        .catch(function(error) {
          console.error("Fehler beim Update:", error);
        });
    }
  }
  
  // --- Funktion zur Animation der Belohnung ---
  function animateReward(task, index) {
    const targetButton = document.querySelectorAll(".nav-button")[4];
    if (!targetButton) {
      console.error("Zielbutton nicht gefunden!");
      return;
    }
    const targetRect = targetButton.getBoundingClientRect();
    function remToPx(rem) { 
      return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }
    function vwToPx(vw) { 
      return (vw / 100) * window.innerWidth;
    }
    let initialLeft = vwToPx(83);
    let initialTop = remToPx(8.8) + vwToPx(6) + index * (vwToPx(26.3) + remToPx(0.5));
    const rewardText = document.createElement("div");
    rewardText.innerText = `+${task.belohnungsmenge}`;
    rewardText.style.position = "fixed";
    rewardText.style.left = `${initialLeft}px`;
    rewardText.style.top = `${initialTop}px`;
    rewardText.style.fontSize = "1.3rem";
    rewardText.style.fontWeight = "bold";
    rewardText.style.color = "#141F25";
    rewardText.style.zIndex = "1000001";
    rewardText.style.transition = "transform 3s ease-out, opacity 3s ease-out";
    document.body.appendChild(rewardText);
    setTimeout(() => {
      rewardText.style.transform = "translateY(-20px)";
      rewardText.style.opacity = "0";
    }, 10);
    setTimeout(() => {
      rewardText.remove();
    }, 1010);
    for (let i = 0; i < task.belohnungsmenge; i++) {
      setTimeout(() => {
        const flyingImg = document.createElement("img");
        if (task.belohnungsart === "coins") {
          flyingImg.src = "coin.png";
        } else if (task.belohnungsart === "token") {
          flyingImg.src = "token.png";
        } else if (task.belohnungsart === "xp") {
          flyingImg.src = "XP.png";
        }
        flyingImg.style.position = "fixed";
        flyingImg.style.left = `${initialLeft}px`;
        flyingImg.style.top = `${initialTop}px`;
        flyingImg.style.width = `1.5rem`;
        flyingImg.style.height = `1.5rem`;
        flyingImg.style.transition = `top 1s cubic-bezier(0.66, ${(Math.floor(Math.random() * Math.max(30, task.belohnungsmenge * 0.7)) * -0.01 - 0.1).toFixed(2)}, 0.97, 0.97), left 1s cubic-bezier(0.71, ${(Math.floor(Math.random() * Math.max(60, task.belohnungsmenge * 3)) * -0.1 - 6).toFixed(2)}, 1, 0.82)`;
        flyingImg.style.zIndex = "1000000";
        document.body.appendChild(flyingImg);
        setTimeout(() => {
          flyingImg.style.top = `${targetRect.top}px`;
          flyingImg.style.left = `${targetRect.left}px`;
        }, 10);
        setTimeout(() => {
          flyingImg.remove();
        }, 1000);
      }, i * 1000 / task.belohnungsmenge);
    }
  }
  
  // --- XP-Inkrementierung: Werte abrufen und localStorage aktualisieren ---
  let lastXp = Number(localStorage.getItem("mission-last-xp")) || 0;
  const missionXpDiff = window.userData.xp - lastXp;
  localStorage.setItem("mission-xp", missionXpDiff);
  localStorage.setItem("mission-last-xp", window.userData.xp);
  
  // --- Firestore-Update: Inkremente anhand der localStorage-Werte in dailyTasks einarbeiten ---
  const userRef = firestore.collection("users").doc(uid);
  userRef.get()
    .then(function(doc) {
      if (doc.exists) {
        let data = doc.data();
        let dailyTasks = data.dailyTasks || [];
        dailyTasks.forEach(function(mission, index) {
          if (mission.anzahlbisjetzt !== -1) {
            let incrementValue = 0;
            if (mission.art === "xp" && Number(localStorage.getItem("mission-xp")) !== 0) {
              incrementValue = Number(localStorage.getItem("mission-xp"));
            } else if (mission.art === "game" && Number(localStorage.getItem("mission-game")) !== 0) {
              incrementValue = Number(localStorage.getItem("mission-game"));
            } else if (mission.art === "perfectgame" && Number(localStorage.getItem("mission-perfectgame")) !== 0) {
              incrementValue = Number(localStorage.getItem("mission-perfectgame"));
            } else if (mission.art === "fehler" && Number(localStorage.getItem("mission-fehler")) !== 0) {
              incrementValue = Number(localStorage.getItem("mission-fehler"));
            } else if (mission.art === "geschichte" && Number(localStorage.getItem("mission-geschichte")) !== 0) {
              incrementValue = Number(localStorage.getItem("mission-geschichte"));
            } else if (mission.art === "geographie" && Number(localStorage.getItem("mission-geographie")) !== 0) {
              incrementValue = Number(localStorage.getItem("mission-geographie"));
            } else if (mission.art === "musik" && Number(localStorage.getItem("mission-musik")) !== 0) {
              incrementValue = Number(localStorage.getItem("mission-musik"));
            } else if (mission.art === "kunst" && Number(localStorage.getItem("mission-kunst")) !== 0) {
              incrementValue = Number(localStorage.getItem("mission-kunst"));
            } else if (mission.art === "sport" && Number(localStorage.getItem("mission-sport")) !== 0) {
              incrementValue = Number(localStorage.getItem("mission-sport"));
            } else if (mission.art === "wissenschaft" && Number(localStorage.getItem("mission-wissenschaft")) !== 0) {
              incrementValue = Number(localStorage.getItem("mission-wissenschaft"));
            } else if (mission.art === "astronomie" && Number(localStorage.getItem("mission-astronomie")) !== 0) {
              incrementValue = Number(localStorage.getItem("mission-astronomie"));
            } else if (mission.art === "biologie" && Number(localStorage.getItem("mission-biologie")) !== 0) {
              incrementValue = Number(localStorage.getItem("mission-biologie"));
            } else if (mission.art === "politik" && Number(localStorage.getItem("mission-politik")) !== 0) {
              incrementValue = Number(localStorage.getItem("mission-politik"));
            } else if (mission.art === "literatur" && Number(localStorage.getItem("mission-literatur")) !== 0) {
              incrementValue = Number(localStorage.getItem("mission-literatur"));
            } else if (mission.art === "fehler" && Number(localStorage.getItem("mission-fehler")) !== 0) {
              incrementValue = Number(localStorage.getItem("mission-fehler"));
            }
            if (incrementValue !== 0) {
              dailyTasks[index].anzahlbisjetzt = (dailyTasks[index].anzahlbisjetzt || 0) + incrementValue;
            }
          }
        });
        return userRef.update({ dailyTasks: dailyTasks });
      } else {
        return Promise.reject("Dokument nicht vorhanden");
      }
    })
    .then(function() {
      console.log("Daily tasks wurden in Firebase aktualisiert!");
      // --- Reset: Alle verwendeten localStorage-Werte auf 0 setzen ---
      localStorage.setItem("mission-xp", 0);
      localStorage.setItem("mission-game", 0);
      localStorage.setItem("mission-perfectgame", 0);
      localStorage.setItem("mission-fehler", 0);
      localStorage.setItem("mission-geschichte", 0);
      localStorage.setItem("mission-geographie", 0);
      localStorage.setItem("mission-musik", 0);
      localStorage.setItem("mission-kunst", 0);
      localStorage.setItem("mission-sport", 0);
      localStorage.setItem("mission-wissenschaft", 0);
      localStorage.setItem("mission-astronomie", 0);
      localStorage.setItem("mission-biologie", 0);
      localStorage.setItem("mission-politik", 0);
      localStorage.setItem("mission-literatur", 0);
      localStorage.setItem("mission-fehler", 0);
    })
    .catch(function(error) {
      console.error("Fehler beim Firestore-Update:", error);
    })
    .finally(function() {
      // Um die aktuellsten Werte aus Firebase zu erhalten, holen wir das Dokument erneut und aktualisieren window.userData.
      firestore.collection("users").doc(uid).get().then(function(doc) {
        if (doc.exists) {
          window.userData = doc.data();
          renderUI(); // UI neu rendern, sodass auch die Fortschrittsbalken aktualisiert werden.
        }
      });
      updateProgress();
      window.firebaseDataLoadedLock = false;
    });
});
