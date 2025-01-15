document.addEventListener("DOMContentLoaded", () => {
    // Firebase-Konfiguration
    const firebaseConfig = {
        apiKey: "AIzaSyCHdNTXnLblziPQkH0Kg2WjoTKk4vts1mE",
        authDomain: "besserwisser-95b63.firebaseapp.com",
        projectId: "besserwisser-95b63",
        storageBucket: "besserwisser-95b63.appspot.com",
        messagingSenderId: "522066225262",
        appId: "1:522066225262:web:4bec0b45ceff85913c1e7f",
        measurementId: "G-P8SBRHWS84",
    };

    // Firebase initialisieren
    const app = firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const firestore = firebase.firestore();

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

    let currentMode = "login";

    // Initiale Werte aus localStorage
    let localCoins = parseInt(localStorage.getItem("totalCoins")) || 0;
    let localXp = parseInt(localStorage.getItem("totalXP")) || 0;

    // Anzeige initialisieren
    xpDisplay.textContent = localXp;
    coinsDisplay.textContent = localCoins;

    // Prüfen, ob der Benutzer bereits eingeloggt ist
    window.onload = () => {
        const savedUsername = localStorage.getItem("username");
        if (savedUsername) {
            showUsername(savedUsername);
            updateStatsFromLocalStorage();
        } else {
            userDetails.style.display = "block";
            nameDisplay.style.display = "none";
            updateStatsFromLocalStorage();
        }
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
                    saveUserToFirestore(user.uid, username, localCoins, localXp);
                })
                .catch(handleError);
        } else {
            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    fetchAndSyncUserData(user.uid);
                })
                .catch(handleError);
        }
    });

    // Benutzer und Statistiken in Firestore speichern
    function saveUserToFirestore(uid, username, coins, xp) {
        firestore.collection("users").doc(uid).set({ username, coins, xp })
            .then(() => {
                saveUserSession(username, coins, xp);
                showUsername(username);
            })
            .catch(handleError);
    }

    // Benutzer und Statistiken aus Firestore abrufen und synchronisieren
    function fetchAndSyncUserData(uid) {
        firestore.collection("users").doc(uid).get()
            .then((doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    const syncedCoins = (data.coins || 0) + localCoins;
                    const syncedXp = (data.xp || 0) + localXp;

                    // Daten in Firestore aktualisieren
                    firestore.collection("users").doc(uid).set({
                        coins: syncedCoins,
                        xp: syncedXp
                    }).then(() => {
                        saveUserSession(data.username, syncedCoins, syncedXp);
                        updateStats(syncedCoins, syncedXp);
                        resetLocalStats(); // Lokale Münzen und XP zurücksetzen
                    });
                } else {
                    handleError({ message: "Benutzer konnte nicht geladen werden." });
                }
            })
            .catch(handleError);
    }

    // Benutzername und Statistiken in localStorage speichern
    function saveUserSession(username, coins, xp) {
        localStorage.setItem("username", username);
        localStorage.setItem("totalCoins", coins);
        localStorage.setItem("totalXP", xp);
    }

    function resetLocalStats() {
        localCoins = 0;
        localXp = 0;
    }

    // Benutzername anzeigen
    function showUsername(username) {
        userDetails.style.display = "none";
        nameDisplay.style.display = "block";
        nameDisplay.textContent = username;
    }

    // Statistiken aktualisieren
    function updateStats(coins, xp) {
        coinsDisplay.textContent = coins;
        xpDisplay.textContent = xp;
    }

    // Statistiken aus localStorage anzeigen
    function updateStatsFromLocalStorage() {
        xpDisplay.textContent = localXp;
        coinsDisplay.textContent = localCoins;
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

    // Synchronisation bei Netzwerkverbindung
    window.addEventListener("online", () => {
        if (auth.currentUser) {
            fetchAndSyncUserData(auth.currentUser.uid);
        }
    });
});