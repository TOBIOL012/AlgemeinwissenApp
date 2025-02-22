document.addEventListener("DOMContentLoaded", () => {
    const settingsIcon = document.querySelector(".settings-icon img");
    const einstellungen = document.querySelector(".einstellungen");
    const allElements = document.querySelectorAll("body > *:not(.back-arrow-container):not(.einstellungen):not(.nav-bar)");
    const buttonsAndLinks = document.querySelectorAll("button, a");
    let isSettingsOpen = false;


    // WebP Animationsteuerung
    const setWebPFrame = (frame) => {
        const paddedFrame = String(frame).padStart(3, '0'); // Frames mit führenden Nullen formatieren
        settingsIcon.src = `output_images/rotated_${paddedFrame}.webp`;
    };

    const playWebPAnimation = (forward, callback) => {
        const totalFrames = 30; // Anzahl der Frames in der Animation
        const duration = 400; // Dauer der Animation in Millisekunden
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1); // Fortschritt von 0 bis 1

            const frame = forward
                ? Math.round(progress * (totalFrames - 1)) + 1
                : totalFrames - Math.round(progress * (totalFrames - 1));

            setWebPFrame(frame);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else if (callback) {
                callback();
            }
        };

        requestAnimationFrame(animate);
    };

    // Anfangszustand: Einstellungen versteckt
    einstellungen.style.display = "none";
    einstellungen.style.position = "absolute";
    einstellungen.style.top = "-100%";
    einstellungen.style.opacity = "0";
    einstellungen.style.transition = "top 0.5s ease, opacity 0.5s ease";

    settingsIcon.addEventListener("click", () => {
        isSettingsOpen = !isSettingsOpen; // Umschalten zwischen Ein-/Ausblenden

        if (isSettingsOpen) {
            // WebP Animation vorwärts abspielen und gleichzeitig Opacity und Position animieren
            playWebPAnimation(true);

            allElements.forEach(el => {
                el.style.transition = "opacity 0.5s ease";
                el.style.opacity = "0";
                el.style.pointerEvents = "none"; // Klicks deaktivieren
            });

            buttonsAndLinks.forEach(button => {
                button.disabled = true;
            });

            einstellungen.style.display = "block";
            setTimeout(() => {
                einstellungen.style.top = "0";
                einstellungen.style.opacity = "1";
            }, 10);
        } else {
            // WebP Animation rückwärts abspielen und gleichzeitig Opacity und Position animieren
            playWebPAnimation(false);

            einstellungen.style.top = "-100%";
            einstellungen.style.opacity = "0";
            setTimeout(() => {
                einstellungen.style.display = "none";
            }, 500);

            allElements.forEach(el => {
                el.style.opacity = "1";
                el.style.pointerEvents = "auto"; // Klicks aktivieren
            });

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

        window.meineFunktion = function() { console.log("Globale Funktion!"); };
        // Entferne alle Benutzerdaten aus localStorage
        showGlobalModal("Wirklich Ausloggen", "Beim Ausloggen werden Statistiken und Gemachte Fehler gelöscht. Du kannst sie nicht wiederrufen.", "kreuz.png", (result) => {
            if (result === "ok") {
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
            }
        });
    });
});

