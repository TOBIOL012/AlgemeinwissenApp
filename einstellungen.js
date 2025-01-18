document.addEventListener("DOMContentLoaded", () => {
    const settingsIcon = document.querySelector(".settings-icon");
    const einstellungen = document.querySelector(".einstellungen");
    const allElements = document.querySelectorAll("body > *:not(.back-arrow-container):not(.einstellungen):not(.nav-bar)");
    const buttonsAndLinks = document.querySelectorAll("button, a");
    let isSettingsOpen = false;

    // Anfangszustand: Einstellungen versteckt
    einstellungen.style.display = "none";
    einstellungen.style.position = "absolute";
    einstellungen.style.top = "-100%";
    einstellungen.style.opacity = "0";
    einstellungen.style.transition = "top 0.5s ease, opacity 0.5s ease";

    settingsIcon.addEventListener("click", () => {
        isSettingsOpen = !isSettingsOpen; // Umschalten zwischen Ein-/Ausblenden

        if (isSettingsOpen) {
            // Drehe das Zahnrad
            settingsIcon.style.transition = "transform 0.5s ease";
            settingsIcon.style.transform = "rotate(360deg)";

            // Blende alle anderen Elemente aus
            allElements.forEach(el => {
                el.style.transition = "opacity 0.5s ease";
                el.style.opacity = "0";
                el.style.pointerEvents = "none"; // Klicks deaktivieren
            });

            // Deaktiviere alle Buttons und Links
            buttonsAndLinks.forEach(button => {
                button.disabled = true;
            });

            // Blende die Einstellungen ein
            einstellungen.style.display = "block";
            setTimeout(() => {
                einstellungen.style.top = "0";
                einstellungen.style.opacity = "1";
            }, 10);
        } else {
            // Drehe das Zahnrad zurück
            settingsIcon.style.transition = "transform 0.5s ease";
            settingsIcon.style.transform = "rotate(0deg)";

            // Blende die Einstellungen aus
            einstellungen.style.top = "-100%";
            einstellungen.style.opacity = "0";
            setTimeout(() => {
                einstellungen.style.display = "none";
            }, 500);

            // Blende alle anderen Elemente wieder ein
            allElements.forEach(el => {
                el.style.opacity = "1";
                el.style.pointerEvents = "auto"; // Klicks aktivieren
            });

            // Aktiviere alle Buttons und Links wieder
            buttonsAndLinks.forEach(button => {
                button.disabled = false;
            });
        }
    });


    const firebaseConfig = {
        apiKey: "AIzaSyCHdNTXnLblziPQkH0Kg2WjoTKk4vts1mE",
            authDomain: "besserwisser-95b63.firebaseapp.com",
            projectId: "besserwisser-95b63",
            storageBucket: "besserwisser-95b63.appspot.com",
            messagingSenderId: "522066225262",
            appId: "1:522066225262:web:4bec0b45ceff85913c1e7f",
            measurementId: "G-P8SBRHWS84",
        };

        // Firebase initialisieren (nur, wenn es noch nicht initialisiert wurde)
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        const auth = firebase.auth();

        const logoutButton = document.querySelector(".ausloggen");

        logoutButton.addEventListener("click", () => {
            // Entferne alle Benutzerdaten aus localStorage
            localStorage.removeItem("uid");
            localStorage.removeItem("username");
            localStorage.removeItem("lastCoins");
            localStorage.removeItem("lastXp");
            localStorage.removeItem("lastStreak");

            // Firebase-Logout
            auth.signOut().then(() => {
                console.log("Benutzer erfolgreich abgemeldet.");
            }).catch((error) => {
                console.error("Fehler beim Abmelden:", error);
            });
        });
});