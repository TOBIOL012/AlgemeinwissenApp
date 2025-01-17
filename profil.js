document.addEventListener("DOMContentLoaded", () => {
    
    const { increaseValue, decreaseValue, setValue } = window;

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
    const xpDisplay = document.querySelector("#xp-total");
    const coinsDisplay = document.querySelector(".coin-text");
    const streakDisplay = document.querySelector(".streak-text");

    let currentMode = "login";

    // Benutzerstatus prüfen und Daten synchronisieren
    window.onload = () => {
        const savedUID = localStorage.getItem("uid");
        const savedUsername = localStorage.getItem("username");

        if (savedUsername) {
            showUsername(savedUsername);
        }

        auth.onAuthStateChanged((user) => {
            if (user) {
                if (!savedUID) {
                    localStorage.setItem("uid", user.uid);
                }
                syncUserData(user.uid);
            } else {
                resetUI();
                console.error("Benutzer nicht eingeloggt.");
            }
        });
    };

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
            streakOnIce: 3, // Standardwert für "Streak auf Eis"
            creationDate, // Datum der Kontoerstellung
            streakHistory: [] // Initialer leerer Verlauf
        }).then(() => {
            localStorage.setItem("uid", uid);
            localStorage.setItem("username", username);
            showUsername(username);
            syncUserData(uid);
        }).catch(handleError);
    }

    // Benutzer und Statistiken synchronisieren
    function syncUserData(uid) {
        firestore.collection("users").doc(uid).onSnapshot((doc) => {
            if (doc.exists) {
                const data = doc.data();
                localStorage.setItem("username", data.username);
                updateStats(data.coins, data.xp, data.streak, data.username, data.creationDate, data.streakHistory, data.streakOnIce);
            } else {
                console.error("Dokument existiert nicht.");
            }
        }, (error) => {
            console.error("Fehler bei onSnapshot: ", error);
        });
    }

    // Benutzername anzeigen
    function showUsername(username) {
        userDetails.style.display = "none";
        nameDisplay.style.display = "block";
        nameDisplay.textContent = username;
    }

    // UI zurücksetzen
    function resetUI() {
        userDetails.style.display = "block";
        nameDisplay.style.display = "none";
        nameDisplay.textContent = "";
        localStorage.removeItem("uid");
        localStorage.removeItem("username");
        updateStats(0, 0, 0);
    }

    // Statistiken aktualisieren
    function updateStats(coins, xp, streak, username, creationDate, streakHistory, streakOnIce) {
        if (coinsDisplay) coinsDisplay.textContent = coins;
        if (xpDisplay) xpDisplay.textContent = xp;
        if (streakDisplay) streakDisplay.textContent = streak;
        if (nameDisplay) nameDisplay.textContent = username;
    
        console.log("Konto erstellt am:", creationDate);
        console.log("Streak-Verlauf:", streakHistory);
        console.log("Streak auf Eis verfügbar:", streakOnIce);
    }

    // Fehler behandeln
    function handleError(error) {
        errorMessage.textContent = error.message || "Unbekannter Fehler";
    }

    // Tab aktivieren
    function activateTab(activeTab, inactiveTab) {
        activeTab.classList.add("active");
        inactiveTab.classList.remove("active");
    }

    tabLogin.click();
});