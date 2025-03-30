    function updateStatistics() {
        let answeredQuestions = JSON.parse(localStorage.getItem('answeredQuestions')) || [];
        let correctAnswers = JSON.parse(localStorage.getItem('correctAnswers')) || [];

        let totalQuestions = questions.length;
        let totalanswered = answeredQuestions.length;
        let totalright = correctAnswers.length;

        // Berechne die Prozentsätze
        let answeredPercentage = totalQuestions > 0 ? (totalanswered / totalQuestions * 100) : 0;
        let rightPercentage = totalright > 0 ? (totalright / totalanswered * 100) : 0;

        // Setze die Breite der Elemente
        let beantwortetDiv = document.querySelector('.Beantwortet');
        let richtigDiv = document.querySelector('.Richtig');

        if (beantwortetDiv && richtigDiv) {
            beantwortetDiv.style.width = `${answeredPercentage}%`; // Die Breite basiert auf der Anzahl der beantworteten Fragen
            richtigDiv.style.width = `${rightPercentage}%`; // Die Breite in Prozent der richtigen Antworten
        }
    }

    // Führe die Funktion beim Laden der Seite aus
    updateStatistics();


    const auth = firebase.auth();

    // DOM-Elemente
    const tabLogin = document.querySelector(".tab-login");
    const tabRegister = document.querySelector(".tab-register");
    const usernameField = document.querySelector("#Benutzername");
    const emailField = document.querySelector("#E-Mail");
    const passwordField = document.querySelector("#Passwort");
    const submitButton = document.querySelector(".submit-btn");
    const errorMessage = document.querySelector(".error-message");
    const userDetails = document.querySelector(".Benutzerdaten");
    const nameDisplay = document.querySelector(".name");
    const usernameDisplay = document.querySelector("#username-display");
    const xpDisplay = document.querySelector("#xp-total");
    const coinsDisplay = document.querySelector(".coin-text");
    const streakDisplay = document.querySelector(".streak-text");
    
    let currentMode = "register";

    // Benutzerstatus prüfen und Daten synchronisieren
    const savedUID = localStorage.getItem("uid");
        const savedUsername = localStorage.getItem("username");

        if (savedUsername) {
            showUsername(savedUsername);
        }

    // Tabs wechseln 
    tabLogin.addEventListener("click", () => {
        currentMode = "login";
        usernameField.style.display = "none";
        submitButton.textContent = "Einloggen";
        activateTab(tabLogin, tabRegister);
    });

    tabRegister.addEventListener("click", () => {
        currentMode = "register";
        usernameField.style.display = "block";
        submitButton.textContent = "Registrieren";
        activateTab(tabRegister, tabLogin);
    });

    // Formular validieren
    [emailField, passwordField, usernameField].forEach((field) => {
        field.addEventListener("input", validateForm);
    });

    function validateForm() {
        const emailValid = emailField.value.trim() !== "";
        const passwordValid = passwordField.value.trim().length >= 6;
        const usernameValid = currentMode === "register" ? usernameField.value.trim() !== "" : true;

        submitButton.disabled = !(emailValid && passwordValid && usernameValid);

        if (!emailValid) {
            errorMessage.textContent = "E-Mail darf nicht leer sein.";
        } else if (!passwordValid) {
            errorMessage.textContent = "Das Passwort muss mindestens 6 Zeichen lang sein.";
        } else if (!usernameValid && currentMode === "register") {
            errorMessage.textContent = "Benutzername darf nicht leer sein.";
        } else {
            errorMessage.textContent = "";
        }
    }

    // Login/Registrierung
    submitButton.addEventListener("click", () => {
        const email = emailField.value;
        const password = passwordField.value;

        if (currentMode === "register") {
            const username = usernameField.value;
            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    saveUserToFirestore(user.uid, username);
                })
                .catch(handleError);
        } else {
            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    localStorage.setItem("uid", user.uid);
                    window.location.reload();
                    document.addEventListener("firebaseDataLoaded", () => {
                        updateStats(window.userData.coins, window.userData.xp, window.userData.streak, window.userData.username, window.userData.creationDate, window.userData.streakHistory, window.userData.streakOnIce, window.userData.currentprofile, window.userData.creationDate, window.userData.profilecolor);
                        showUsername(window.userData.username);
                    });  
                })
                .catch(handleError);
        }
    });

    // Benutzer in Firestore speichern
    function saveUserToFirestore(uid, username) {
        const creationDate = new Date().toISOString().split("T")[0]; // Aktuelles Datum
        firestore.collection("users").doc(uid).set({
            username,
            coins: localStorage.getItem("coins") || 0,
            xp: localStorage.getItem("xp") || 0,
            token: 0,
            streak: 0,
            higheststreak: 0,
            streakOnIce: 1, // Standardwert für "Streak auf Eis"
            creationDate, // Datum der Kontoerstellung
            streakHistory: [], // Initialer leerer Verlauf
            xpHistory: [],
            profilepictures: ["AlbertEinstein.png"],
            currentprofile: "AlbertEinstein.png",
            profilecolor: "#5d8ee2",
            lastmissionxp: localStorage.getItem("xp") || 0,
            dailyTasks: [
                {
                  ueberschrift: "Sammle 50 XP",
                  art: "xp",
                  anzahl: 50,
                  belohnungsart: "token",
                  belohnungsmenge: 3
                },
                {
                  ueberschrift: "Spiele 3 Spiele",
                  art: "game",
                  anzahl: 3,
                  belohnungsart: "xp",
                  belohnungsmenge: 40
                },
                {
                  ueberschrift: "Spiele 1 Fehlerfreies Spiel",
                  art: "perfectgame",
                  anzahl: 1,
                  belohnungsart: "coins",
                  belohnungsmenge: 15
                }
              ],
              lifeMissions: [
                {
                  id: "mission1", // eindeutige ID für die Mission
                  ueberschrift: "Straßen",
                  erklärung1: "Ereeiche eine 7 Tage Streak",
                  erklärung2: "Ereeiche eine 30 Tage Streak",
                  erklärung3: "Ereeiche eine 365 Tage Streak",
                  art: "streak",
                  anzahlbisjetzt: 0, // Standardwert – wird nur genutzt, wenn die Mission neu hinzugefügt wird
                  anzahl1: 7,
                  anzahl2: 30,
                  anzahl3: 365,
                  abzeichen1: "streak1.png",
                  abzeichen2: "streak2.png",
                  abzeichen3: "streak3.png",
                  belohnungsmenge1: 50,
                  belohnungsart1: "coins",
                  belohnungsmenge2: 100,
                  belohnungsart2: "coins",
                  belohnungsmenge3: 500,
                  belohnungsart3: "coins"
                },
                {
                  id: "mission2", // eindeutige ID für die Mission
                  ueberschrift: "XP Meister",
                  erklärung1: "Sammle 1000 XP",
                  erklärung2: "Sammle 5000 XP",
                  erklärung3: "Sammle 20000 XP",
                  art: "xp",
                  anzahlbisjetzt: 0, // Standardwert – wird nur genutzt, wenn die Mission neu hinzugefügt wird
                  anzahl1: 1000,
                  anzahl2: 5000,
                  anzahl3: 20000,
                  abzeichen1: "xp1.png",
                  abzeichen2: "xp2.png",
                  abzeichen3: "xp3.png",
                  belohnungsmenge1: 50,
                  belohnungsart1: "coins",
                  belohnungsmenge2: 100,
                  belohnungsart2: "coins",
                  belohnungsmenge3: 200,
                  belohnungsart3: "coins"
                },
                {
                  id: "mission3", // eindeutige ID für die Mission
                  ueberschrift: "Fragen König",
                  erklärung1: "Beantworte 100 Fragen richtig",
                  erklärung2: "Beantworte 500 Fragen richtig",
                  erklärung3: "Beantworte 2000 Fragen richtig",
                  art: "question",
                  anzahlbisjetzt: 0, // Standardwert – wird nur genutzt, wenn die Mission neu hinzugefügt wird
                  anzahl1: 100,
                  anzahl2: 500,
                  anzahl3: 2000,
                  abzeichen1: "question1.png",
                  abzeichen2: "question2.png",
                  abzeichen3: "question3.png",
                  belohnungsmenge1: 200,
                  belohnungsart1: "xp",
                  belohnungsmenge2: 300,
                  belohnungsart2: "xp",
                  belohnungsmenge3: 500,
                  belohnungsart3: "xp"
                },
                {
                  id: "mission4", // eindeutige ID für die Mission
                  ueberschrift: "Lerne aus deinen Fehlern",
                  erklärung1: "Korrigiere 50 Fragen",
                  erklärung2: "Korrigiere 200 Fragen",
                  erklärung3: "Korrigiere 500 Fragen",
                  art: "fehler",
                  anzahlbisjetzt: 0, // Standardwert – wird nur genutzt, wenn die Mission neu hinzugefügt wird
                  anzahl1: 50,
                  anzahl2: 200,
                  anzahl3: 500,
                  abzeichen1: "fehler1.png",
                  abzeichen2: "fehler2.png",
                  abzeichen3: "fehler3.png",
                  belohnungsmenge1: 100,
                  belohnungsart1: "xp",
                  belohnungsmenge2: 250,
                  belohnungsart2: "xp",
                  belohnungsmenge3: 500,
                  belohnungsart3: "xp"
                },
                {
                  id: "mission5", // eindeutige ID für die Mission
                  ueberschrift: "Historiker",
                  erklärung1: "Beantworte 100 Geschichtsfragen richtig",
                  erklärung2: "Beantworte 500 Geschichtsfragen richtig",
                  erklärung3: "Beantworte 1000 Geschichtsfragen richtig",
                  art: "geschichte",
                  anzahlbisjetzt: 0, // Standardwert – wird nur genutzt, wenn die Mission neu hinzugefügt wird
                  anzahl1: 100,
                  anzahl2: 500,
                  anzahl3: 1000,
                  abzeichen1: "geschichte1.png",
                  abzeichen2: "geschichte2.png",
                  abzeichen3: "geschichte3.png",
                  belohnungsmenge1: 100,
                  belohnungsart1: "coins",
                  belohnungsmenge2: 200,
                  belohnungsart2: "coins",
                  belohnungsmenge3: 300,
                  belohnungsart3: "coins"
                },
                {
                  id: "mission6", // eindeutige ID für die Mission
                  ueberschrift: "Entdecker",
                  erklärung1: "Beantworte 100 Geographiefragen richtig",
                  erklärung2: "Beantworte 500 Geographiefragen richtig",
                  erklärung3: "Beantworte 1000 Geographiefragen richtig",
                  art: "geographie",
                  anzahlbisjetzt: 0, // Standardwert – wird nur genutzt, wenn die Mission neu hinzugefügt wird
                  anzahl1: 100,
                  anzahl2: 500,
                  anzahl3: 1000,
                  abzeichen1: "geographie1.png",
                  abzeichen2: "geographie2.png",
                  abzeichen3: "geographie3.png",
                  belohnungsmenge1: 100,
                  belohnungsart1: "coins",
                  belohnungsmenge2: 200,
                  belohnungsart2: "coins",
                  belohnungsmenge3: 300,
                  belohnungsart3: "coins"
                },
                {
                  id: "mission7", // eindeutige ID für die Mission
                  ueberschrift: "Wissenschaftler",
                  erklärung1: "Beantworte 50 Wissenschaftsfragen richtig",
                  erklärung2: "Beantworte 200 Wissenschaftsfragen richtig",
                  erklärung3: "Beantworte 500 Wissenschaftsfragen richtig",
                  art: "wissenschaft",
                  anzahlbisjetzt: 0, // Standardwert – wird nur genutzt, wenn die Mission neu hinzugefügt wird
                  anzahl1: 50,
                  anzahl2: 200,
                  anzahl3: 500,
                  abzeichen1: "wissenschaft1.png",
                  abzeichen2: "wissenschaft2.png",
                  abzeichen3: "wissenschaft3.png",
                  belohnungsmenge1: 50,
                  belohnungsart1: "coins",
                  belohnungsmenge2: 100,
                  belohnungsart2: "coins",
                  belohnungsmenge3: 200,
                  belohnungsart3: "coins"
                }
                // Weitere lebenslange Missionen können hier hinzugefügt werden
              ]
        }).then(() => {
            localStorage.setItem("uid", uid);
            localStorage.setItem("username", username);
            showUsername(username);
            window.location.reload();
            // syncUserData(uid); // This call is unnecessary and causes an error
        }).catch(handleError);
    }

    // Benutzer und Statistiken synchronisieren
    let isEventListenerAdded = false;



    // Benutzername und Share-Button anzeigen
    function showUsername(username) {
        userDetails.style.display = "none";
        nameDisplay.style.display = "flex";
        usernameDisplay.textContent = username;
    }

    // UI zurücksetzen
    function resetUI() {
        userDetails.style.display = "block";
        nameDisplay.style.display = "none";
        usernameDisplay.textContent = "";
        localStorage.removeItem("uid");
        localStorage.removeItem("username");
        updateStats(0, 0, 0);
    }

    // Statistiken aktualisieren
    function updateStats(coins, xp, streak, username, creationDate, streakHistory, streakOnIce,currentprofile, beigetreten, color) {
        console.log("updateStats aufgerufen mit Daten:");
        console.log("Coins:", coins, "XP:", xp, "Streak:", streak, "Username:", username, "Creation Date:", creationDate, "Streak History:", streakHistory, "Streak On Ice:", streakOnIce);

        const coinsDisplay = document.querySelector(".coin-text");
        const xpDisplay = document.querySelector("#xp-total");
        const streakDisplay = document.querySelector(".streak-text");
        const usernameDisplay = document.querySelector("#username-display");
        const beigetretenDisplay = document.querySelector(".beigetreten");

        
        const profilbildGross = document.querySelector('.Profilbild-groß');
        const color1 = document.querySelector('.Profilbild-container');
        profilbildGross.src = `Profilbilder/${currentprofile || localStorage.getItem("currentprofile") || "Profilbilder/AlbertEinstein.png"}`;
        color1.style.background = color || localStorage.getItem("profilecolor") || "#5da571";
        console.log(currentprofile);
        

        if (coinsDisplay) coinsDisplay.textContent = coins || localStorage.getItem("coins");
        if (xpDisplay) xpDisplay.textContent = xp || localStorage.getItem("xp");
        if (streakDisplay) streakDisplay.textContent = streak || localStorage.getItem("streak");
        if (usernameDisplay) usernameDisplay.textContent = username || localStorage.getItem("username");
        if (beigetretenDisplay) beigetretenDisplay.textContent = `Beigetreten: ${beigetreten || localStorage.getItem("beigetreten")}`;
        console.log("currentprofile");
        const overlay = document.getElementById("profilOverlay");
        if (overlay) {
            overlay.remove();
            sessionStorage.removeItem("profilSnapshot");
        }
        document.body.style.opacity = "1";
    }

    // Fehler behandeln
    function handleError(error) {
        errorMessage.textContent = error.message || "Unbekannter Fehler";
    }

    // Share-Funktion
    function shareProfile() {
        const username = usernameDisplay.textContent;
        if (username) {
            navigator.clipboard.writeText(`Schau dir ${username}'s Profil in der Quiz-App an!`)
                .then(() => alert("Profil-Link kopiert!"))
                .catch((err) => alert("Fehler beim Kopieren des Links: " + err));
        } else {
            alert("Benutzername nicht verfügbar.");
        }
    }

    // Tab aktivieren
    function activateTab(activeTab, inactiveTab) {
        activeTab.classList.add("active");
        inactiveTab.classList.remove("active");
    }

    tabRegister.click();
    // Call syncUserData with the saved UID
    if (savedUID) {
        console.log("Gefundene UID im LocalStorage:", savedUID);
    } else {
        console.warn("Keine UID im LocalStorage gefunden.");
        userDetails.style.display = "block";
        nameDisplay.style.display = "none";
        usernameDisplay.style.display = "none";
    }

    
    document.addEventListener("firebaseDataLoaded", () => {
        updateStats(window.userData.coins, window.userData.xp, window.userData.streak, window.userData.username, window.userData.creationDate, window.userData.streakHistory, window.userData.streakOnIce, window.userData.currentprofile, window.userData.creationDate, window.userData.profilecolor);
        if(window.userData.higheststreak !== null){
            const xpplus = localStorage.getItem("xp-plus");
            const coinsplus = localStorage.getItem("coins-plus");
            if (xpplus !== null && xpplus > 0){
                firestore.collection("users").doc(uid).update({
                    coins: firebase.firestore.FieldValue.increment(coinsplus),
                    xp: firebase.firestore.FieldValue.increment(xpplus),
                })
                localStorage.setItem("coins-plus", 0);
                localStorage.setItem("xp-plus", 0);
            } else if(coinsplus !== null && coinsplus > 0){
                firestore.collection("users").doc(uid).update({
                    coins: firebase.firestore.FieldValue.increment(coinsplus),
                    xp: firebase.firestore.FieldValue.increment(xpplus),
                })
                localStorage.setItem("coins-plus", 0);
                localStorage.setItem("xp-plus", 0);
            }
        }
    });






document.addEventListener('DOMContentLoaded', function () {
    
    const xpIndicator = document.querySelector('.xp-indicator');
    const xpBox = document.getElementById('xp-box');
    const xpContainer = document.querySelector('.XP-Pfad-Container');
    const firestore = firebase.firestore();
    const uid = localStorage.getItem('uid');
    const maxXP = 10000;

    function updateXPProgress(xp) {
        const progressWidth = Math.min((xp / maxXP) * 100, 100);
        xpIndicator.style.width = `${progressWidth}%`;

        const currentXP = parseInt(xpBox.textContent) || 0;
        animateCounter(xpBox, currentXP, xp, 1500);
    }

    function animateCounter(element, start, end, duration) {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;

        function updateCounter() {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                current = end;
            }
            element.textContent = Math.floor(current);
            if (current !== end) {
                requestAnimationFrame(updateCounter);
            }
        }
        updateCounter();
    }



    if (xpContainer) {
        xpContainer.addEventListener('click', function () {
            window.location.href = 'xp-pfad.html';
        });
    }
});


    let strichvoher = 1;
    let strichvoher2 = 1;
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let isDragging = false;

    function showPopup() {
        const popup = document.createElement("div");
        Object.assign(popup.style, {
            position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            padding: "1.2rem", background: "#39404d", color: "white", borderRadius: "8px",
            opacity: "0.85", transition: "opacity 0.5s", zIndex: "1000", fontSize: "1.1rem"
        });
        if (!localStorage.getItem("uid")){
            popup.textContent = "Anmeldung erforderlich";
        } else{
            popup.textContent = "Internet erforderlich";
        }
        document.body.appendChild(popup);
        setTimeout(() => popup.style.opacity = "0", 1500);
        setTimeout(() => popup.remove(), 2000);
    }

    function updateIndicator(nummer) {
        if(strichvoher == 1 && nummer !== 1 && nummer !== 4 && window.userData.higheststreak == null){
            nummer = 4;
        } else if (strichvoher == 4 && nummer !== 4 && nummer !== 1 && window.userData.higheststreak == null){
            nummer = 1;
        }
        const strich = document.querySelector(".strich");
        const positions = ["12.5%", "37.5%", "62.5%", "87.5%"];
        strich.style.left = `calc(${positions[nummer - 1]} - 2rem)`;
        strichvoher = nummer;
    }

    function navigate(nummer, duration = 200) {
        const iframes = document.querySelectorAll('.iframe1, .iframe2, .iframe3, .iframe4');
        if(strichvoher2 == 1 && nummer !== 1 && nummer !== 4 && window.userData.higheststreak == null){
            nummer = 4;
            showPopup();
        } else if (strichvoher2 == 4 && nummer !== 4 && nummer !== 1 && window.userData.higheststreak == null){
            nummer = 1;
            showPopup();
        }
        strichvoher2 = nummer;
        iframes.forEach(iframe => {
            iframe.style.transition = `transform ${duration}ms ease-in-out`;
        });

        iframes.forEach((iframe, index) => {
            iframe.style.transform = `translateX(${(index - nummer + 1) * 100 - 50}%)`;
        });

        if (nummer == 1) {
            document.querySelectorAll(".iframe1, .iframe2, .iframe3, .iframe4").forEach(el => {
                document.querySelector(".iframe1").style.height = "calc(100vh - 58vw - 4rem)";
            });
        } else if (nummer == 2) {
            if (strichvoher !== 2) {
                updatexpbar();
            }
            
            document.querySelectorAll(".iframe1, .iframe2, .iframe3, .iframe4").forEach(el => {
                el.style.height = "calc(100vh - 58vw - 4.3rem - 4px)";
                el.style.overflow = "auto";
            });
        } else if (nummer == 3) {
            document.querySelectorAll(".iframe1, .iframe2, .iframe3, .iframe4").forEach(el => {
                document.querySelector(".iframe3").style.height = "100vh";
            });
        } else if (nummer == 4) {
            document.querySelectorAll(".iframe1, .iframe2, .iframe3, .iframe4").forEach(el => {
                document.querySelector(".iframe4").style.height = "calc(105vw + 50rem)";
            });
        }

        // Nach der Navigation: Alle iframes auf display flex setzen
        setTimeout(() => {
            iframes.forEach((iframe) => {
                iframe.style.opacity = "1";
                if (nummer == 1) {
                    fetchXP();
                } else if (nummer == 3) {
                    fetchXP();
                } else if (nummer == 4) {
                    fetchXP();
                }
            });
        }, 300);
    }


    setTimeout(() => {
        let touchStartedInXpPfad = false; // Speichert, ob der Touch in .xp-pfad gestartet wurde
    
        document.querySelectorAll('.iframe1, .iframe2, .iframe3, .iframe4').forEach((iframe, index) => {
            iframe.addEventListener('touchstart', event => {
                isDragging = true;
                startX = event.touches[0].clientX;
                startY = event.touches[0].clientY;
                currentX = startX;
                iframe.style.transition = 'none';
    
                const iframes = document.querySelectorAll('.iframe1, .iframe2, .iframe3, .iframe4');
                iframes.forEach(iframe => {
                    iframe.style.transition = 'none';
                });
    
                // Prüfen, ob Touch in .xp-pfad gestartet wurde
                touchStartedInXpPfad = !!event.target.closest('.xp-pfad');
            });
    
            iframe.addEventListener('touchmove', event => {
                if (isDragging) {
                    currentX = event.touches[0].clientX;
                    const deltaX = currentX - startX;
                    const deltaY = event.touches[0].clientY - startY;
    
                    // Falls Touch in .xp-pfad gestartet wurde, erlauben wir vertikales Scrollen
                    if (touchStartedInXpPfad) return;
    
                    // Nur horizontales Scrollen blockieren, wenn horizontale Bewegung stärker ist
                    if (Math.abs(deltaX) > Math.abs(deltaY)) {
                        event.preventDefault();
                    }
    
                    if (!isDragging) return;
    
                    const element = document.querySelector(".profil");
    
                    if (element.scrollTop / window.innerHeight * 100 < 5) {
                        document.querySelectorAll('.iframe1, .iframe2, .iframe3, .iframe4').forEach((frame, idx) => {
                            const baseTranslate = (idx - strichvoher + 1) * 100;
                            if (idx === 0) {
                                frame.style.transform = `translateX(clamp(-200%, calc(${deltaX}px + ${baseTranslate - 50}%), -50%))`;
                            } else if (idx === 1 || idx === 2) {
                                frame.style.transform = `translateX(calc(${deltaX}px + ${baseTranslate - 50}%))`;
                            } else {
                                frame.style.transform = `translateX(clamp(-50%, calc(${deltaX}px + ${baseTranslate - 50}%), 200%))`;
                            }
                        });
                    } else {
                        navigate(strichvoher2);
                    }
                }
            });
    
            iframe.addEventListener('touchend', event => {
                isDragging = false;
    
                // Falls der Touch in .xp-pfad gestartet wurde, nichts weiter tun
                if (touchStartedInXpPfad) return;
    
                const deltaX = currentX - startX;
                const threshold = window.innerWidth / 6;
    
                if (deltaX < -threshold && strichvoher < 4) {
                    navigate(strichvoher + 1);
                    updateIndicator(strichvoher + 1);
                } else if (deltaX > threshold && strichvoher > 1) {
                    navigate(strichvoher - 1);
                    updateIndicator(strichvoher - 1);
                } else {
                    navigate(strichvoher);
                }
            });
        });
    
        document.querySelectorAll('.navigation img').forEach((button, index) => {
            button.addEventListener('click', () => {
                updateIndicator(index + 1);
            });
        });
    
    }, 300);
    


// Klickevent mit weniger Speicherverbrauch
document.querySelector('.Profilbild-container').addEventListener('click', function () {
    if (window.userData.higheststreak !== null && document.querySelector(".einstellungen").style.display == "none"){
        const frames = document.querySelectorAll("div[id='iframe']");
        frames.forEach(frame => frame.style.display = "none");
        document.querySelector(".profil-auswahl").style.display = "flex";
    }
});


