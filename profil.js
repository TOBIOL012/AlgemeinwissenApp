
    const snapshot = sessionStorage.getItem("profilSnapshot");
    if (snapshot) {
      const overlay = document.createElement("div");
      overlay.id = "profilOverlay";
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.zIndex = "9999";
      // Der Snapshot enthält jetzt den gesamten HTML-Zustand inkl. Inline-Styles (auch des Bodys)
      overlay.innerHTML = snapshot;
      document.body.appendChild(overlay);
    }

  

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then((reg) => {
                console.log("Service Worker registriert:", reg);
                if (navigator.serviceWorker.controller) {
                    console.log("Service Worker aktiv, sende Nachricht");
                    navigator.serviceWorker.controller.postMessage({ type: "initUserData", uid: localStorage.getItem("uid") });
                } else {
                    console.warn("Service Worker ist registriert, aber noch nicht aktiv.");
                }
            })
            .catch((err) => console.error("Service Worker Registrierung fehlgeschlagen:", err));
    }

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


    const firebaseConfig = {
        apiKey: "AIzaSyCHdNTXnLblziPQkH0Kg2WjoTKk4vts1mE",
        authDomain: "besserwisser-95b63.firebaseapp.com",
        projectId: "besserwisser-95b63",
        storageBucket: "besserwisser-95b63.appspot.com",
        messagingSenderId: "522066225262",
        appId: "1:522066225262:web:4bec0b45ceff85913c1e7f",
        measurementId: "G-P8SBRHWS84",
    };
    
    console.log("Firebase wird initialisiert...");
    
    // Firebase initialisieren (falls nicht bereits initialisiert)
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    
    const firestore = firebase.firestore();
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
    
    let currentMode = "login";

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
                    syncUserData(user.uid);
                    showUsername(localStorage.getItem("username"));
                })
                .catch(handleError);
        }
    });

    // Benutzer in Firestore speichern
    function saveUserToFirestore(uid, username) {
        const creationDate = new Date().toISOString().split("T")[0]; // Aktuelles Datum
        firestore.collection("users").doc(uid).set({
            username,
            coins: 0,
            xp: 0,
            streak: 0,
            higheststreak: 0,
            streakOnIce: 3, // Standardwert für "Streak auf Eis"
            creationDate, // Datum der Kontoerstellung
            streakHistory: [], // Initialer leerer Verlauf
            xpHistory: [],
            profilepictures: [Albert_Einstein],
            currentprofile: Albert_Einstein.png,
            profilecolor: 1,
        }).then(() => {
            localStorage.setItem("uid", uid);
            localStorage.setItem("username", username);
            showUsername(username);
            // syncUserData(uid); // This call is unnecessary and causes an error
        }).catch(handleError);
    }

    // Benutzer und Statistiken synchronisieren
    let isEventListenerAdded = false;

function syncUserData(uid) {
    console.log("syncUserData gestartet für UID:", uid);

    if (!navigator.serviceWorker.controller) {
        console.error("❌ Kein aktiver Service Worker gefunden. Registrierung überprüfen!");
        return;
    }

    console.log("📨 Sende Nachricht an Service Worker:", { type: "initUserData", uid });

    try {
        navigator.serviceWorker.controller.postMessage({ type: "initUserData", uid });
        console.log("✅ Nachricht erfolgreich gesendet!");
    } catch (error) {
        console.error("❌ Fehler beim Senden der Nachricht an den Service Worker:", error);
    }

    if (!isEventListenerAdded) {
        navigator.serviceWorker.addEventListener("message", (event) => {
            console.log("📩 Nachricht vom Service Worker erhalten:", event.data);

            if (event.data.type === "userDataUpdated") {
                const data = event.data.data;
                console.log("✅ Aktualisierte Benutzerdaten:", data);

                localStorage.setItem("username", data.username);
                updateStats(data.coins, data.xp, data.streak, data.username, data.creationDate, data.streakHistory, data.streakOnIce, data.currentprofile, data.creationDate, data.profilecolor);
            }
        });
        isEventListenerAdded = true;
    }
}

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
        profilbildGross.src = `/Profilbilder/${currentprofile}`;
        color1.style.background = color;
        console.log(currentprofile);

        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.setAttribute('name', 'theme-color');
            document.head.appendChild(metaThemeColor);
        }
        metaThemeColor.setAttribute('content', color);
    
        // Für Safari (iOS) - Hintergrundfarbe über Notch setzen
        document.documentElement.style.setProperty('--status-bar-color', color);
        
        // Falls kein safe-area-Inset-Top verwendet wird, als Fallback
        document.documentElement.style.backgroundColor = color;
        

        if (coinsDisplay) coinsDisplay.textContent = coins;
        if (xpDisplay) xpDisplay.textContent = xp;
        if (streakDisplay) streakDisplay.textContent = streak;
        if (usernameDisplay) usernameDisplay.textContent = username;
        if (beigetretenDisplay) beigetretenDisplay.textContent = `Beigetreten: ${beigetreten}`;
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

    tabLogin.click();
    // Call syncUserData with the saved UID
    if (savedUID) {
        console.log("Gefundene UID im LocalStorage:", savedUID);
        syncUserData(savedUID);
    } else {
        console.warn("Keine UID im LocalStorage gefunden.");
        userDetails.style.display = "block";
        nameDisplay.style.display = "none";
        usernameDisplay.style.display = "none";
    }







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

    if (uid) {
        navigator.serviceWorker.controller?.postMessage({ type: "initUserData", uid });

        navigator.serviceWorker.addEventListener("message", (event) => {
            if (event.data.type === "userDataUpdated") {
                const data = event.data.data;
                const totalXP = data.xp || 0;
                updateXPProgress(totalXP);
            }
        });
    } else {
        console.error("Keine Benutzer-UID gefunden.");
        const overlay = document.getElementById("profilOverlay");
        if (overlay) {
            overlay.remove();
            sessionStorage.removeItem("profilSnapshot");
        }
        document.body.style.opacity = "1";
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

function updateIndicator(nummer) {
    const strich = document.querySelector(".strich");
    const positions = ["12.5%", "37.5%", "62.5%", "87.5%"];
    strich.style.left = `calc(${positions[nummer - 1]} - 2rem)`;
    strichvoher = nummer;
}

function navigate(nummer, duration = 200) {
    const iframes = document.querySelectorAll('.iframe1, .iframe2, .iframe3, .iframe4');
    strichvoher2 = nummer;
    iframes.forEach(iframe => {
        iframe.style.transition = `transform ${duration}ms ease-in-out`;
    });

    iframes.forEach((iframe, index) => {
        iframe.style.transform = `translateX(${(index - nummer + 1) * 100 - 50}%)`;
    });

    if(nummer == 1){
        document.querySelectorAll(".iframe1, .iframe2, .iframe3, .iframe4").forEach(el => {
            el.style.height = "calc(100vh - 55vw - 4.3rem - 4px)";
            el.style.overflow = "hidden";
        });
    } else if(nummer == 2){
        document.querySelectorAll(".iframe1, .iframe2, .iframe3, .iframe4").forEach(el => {
            el.style.height = "auto";
            el.style.overflow = "auto";
        });
    } else if(nummer == 3){
        document.querySelectorAll(".iframe1, .iframe2, .iframe3, .iframe4").forEach(el => {
            el.style.height = "100vh";
            el.style.overflow = "hidden";
        });
    } else if(nummer == 4){
        document.querySelectorAll(".iframe1, .iframe2, .iframe3, .iframe4").forEach(el => {
            el.style.height = "calc(105vw + 50rem)";
            el.style.overflow = "hidden";
        });
    }

    // Nach der Navigation: Alle iframes auf display flex setzen
    setTimeout(() => {
        iframes.forEach((iframe) => {
            console.log("uwu");
            iframe.style.opacity = "1";
        });
    }, 100);
}

document.querySelectorAll('.iframe1, .iframe2, .iframe3, .iframe4').forEach((iframe, index) => {
    iframe.addEventListener('touchstart', event => {
        isDragging = true;
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
        currentX = startX;
        iframe.style.transition = 'none'; // Disable transition during drag
        const iframes = document.querySelectorAll('.iframe1, .iframe2, .iframe3, .iframe4');
        iframes.forEach(iframe => {
            iframe.style.transition = 'none';
        });
    });

    // Hier: Live-Update des transform für ALLE iframes beim Scrollen
    iframe.addEventListener('touchmove', event => {
    if (isDragging) {
        currentX = event.touches[0].clientX;
        const deltaX = currentX - startX;
        const deltaY = event.touches[0].clientY - startY; // Vertikale Bewegung

        // Nur verhindern, wenn die Bewegung eher horizontal als vertikal ist
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            event.preventDefault();
        }

        if (!isDragging) return;

        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        
        if (document.body.scrollTop / window.innerHeight * 100 < 5) {
            document.querySelectorAll('.iframe1, .iframe2, .iframe3, .iframe4').forEach((frame, idx) => {
                const baseTranslate = (idx - strichvoher + 1) * 100;
                if (idx === 0) {
                    frame.style.transform = `translateX(clamp(-200%, calc(${deltaX}px + ${baseTranslate - 50}%), -50%))`;
                } else if (idx === 1) {
                    frame.style.transform = `translateX(calc(${deltaX}px + ${baseTranslate - 50}%))`;
                } else if (idx === 2) {
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

    


    iframe.addEventListener('touchend', (event) => {
        // Prüfen, ob das Touch-Event innerhalb von .xp-pfad passiert ist
        const touchedElement = document.elementFromPoint(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
        
        if (touchedElement && touchedElement.closest('.xp-pfad')) {
            return; // Falls .xp-pfad berührt wurde, nichts tun
        }
    
        isDragging = false;
        const deltaX = currentX - startX;
        const threshold = window.innerWidth / 4; // Threshold for swipe
    
        // Bestimme die nächste Position basierend auf der Swipe-Richtung
        if (deltaX < -threshold && strichvoher < 4) {
            navigate(strichvoher + 1);
            updateIndicator(strichvoher + 1);
        } else if (deltaX > threshold && strichvoher > 1) {
            navigate(strichvoher - 1);
            updateIndicator(strichvoher - 1);
        } else {
            // Zurück zur ursprünglichen Position
            navigate(strichvoher);
        }
    });
});

// Handle navigation button clicks to update the indicator only
document.querySelectorAll('.navigation img').forEach((button, index) => {
    button.addEventListener('click', () => {
        updateIndicator(index + 1);
    });
});






function cloneWithInlineStyles(element) {
    const clone = element.cloneNode(true);
    const styles = {};

    function copyComputedStyle(src, dest, path) {
        const computed = window.getComputedStyle(src);
        const styleObject = {};

        for (let i = 0; i < computed.length; i++) {
            const key = computed[i];
            const value = computed.getPropertyValue(key);
            if (value !== '') styleObject[key] = value; // Nur nicht-leere Werte speichern
        }

        if (Object.keys(styleObject).length > 0) {
            styles[path] = styleObject;
        }
    }

    function traverse(src, dest, path = '') {
        if (!src || !dest) return;
        copyComputedStyle(src, dest, path);

        for (let i = 0; i < src.children.length; i++) {
            traverse(src.children[i], dest.children[i], `${path} > ${src.children[i].tagName.toLowerCase()}:nth-child(${i + 1})`);
        }
    }

    traverse(element, clone);

    // Speicherplatzfreundliche Speicherung der CSS-Stile
    sessionStorage.setItem("profilStyles", JSON.stringify(styles));
    sessionStorage.setItem("profilHTML", clone.outerHTML);

    return clone;
}

// Klickevent mit weniger Speicherverbrauch
document.querySelector('.Profilbild-container').addEventListener('click', function () {
    cloneWithInlineStyles(document.querySelector('.Profilbild-container'));
    window.location.href = "profil-auswahl.html";
});


