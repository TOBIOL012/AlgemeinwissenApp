document.addEventListener("DOMContentLoaded", () => {
    const settingsIcon = document.querySelector(".settings-icon img");
    const einstellungen = document.querySelector(".einstellungen");
    const allElements = document.querySelectorAll(".profil > *:not(.back-arrow-container):not(.einstellungen):not(.nav-bar)");
    const buttonsAndLinks = document.querySelectorAll("button, a");
    let isSettingsOpen = false;


    // WebP Animationsteuerung
    const setWebPFrame = (frame) => {
        const paddedFrame = String(frame).padStart(3, '0'); // Frames mit führenden Nullen formatieren
        settingsIcon.src = `output_images/rotated_${paddedFrame}.webp`;
    };

    const playWebPAnimation = (forward, duration = 350, callback) => {
        const totalFrames = 30; // Anzahl der Frames in der Animation
        const startTime = performance.now();

        const easeInOut = (t) => {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        };

        const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1); // Fortschritt von 0 bis 1
            const easedProgress = easeInOut(progress);

            const frame = forward
                ? Math.round(easedProgress * (totalFrames - 1)) + 1
                : totalFrames - Math.round(easedProgress * (totalFrames - 1));

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


    

    const auth = firebase.auth();

    const logoutButton = document.querySelector(".ausloggen");

    logoutButton.addEventListener("click", () => {

        window.meineFunktion = function() { console.log("Globale Funktion!"); };
        // Entferne alle Benutzerdaten aus localStorage
        showGlobalModal("Wirklich Ausloggen", "Beim Ausloggen werden Statistiken und Gemachte Fehler gelöscht. Du kannst sie nicht wiederrufen.", "kreuz.png", (result) => {
            if (result === "ok") {
            localStorage.removeItem("uid");
            localStorage.removeItem("username");
            localStorage.removeItem("coins");
            localStorage.removeItem("xp");
            localStorage.removeItem("streak");
            localStorage.removeItem("beigetreten");
            localStorage.removeItem("currentprofile");
            localStorage.removeItem("profilecolor");
            localStorage.removeItem("mission-last-xp");
            localStorage.removeItem("tokenminus");

            // Firebase-Logout
            auth.signOut().then(() => {
                console.log("Benutzer erfolgreich abgemeldet.");
            }).catch((error) => {
                console.error("Fehler beim Abmelden:", error);
            });
            window.location.reload();
            }
        });
    });




    

});



