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

    function simulateZahnradFeedback(repeats = 5, interval = 60) {
        let count = 0;
        const intervalId = setInterval(() => {
            if (window.TapticEngine && window.TapticEngine.selection) {
                window.TapticEngine.selection(); // ultra-subtiler Effekt
            }
            count++;
            if (count >= repeats) clearInterval(intervalId);
        }, interval);
    }
    
    settingsIcon.addEventListener("click", () => {
        if (settingsIcon.disabled) return;
        settingsIcon.disabled = true;
    
        isSettingsOpen = !isSettingsOpen;
    
        // 👉 Direkt zu Beginn: Zahnrad-Haptik abspielen
        simulateZahnradFeedback(5, 80); // 5 Impacts in 400 ms
    
        if (isSettingsOpen) {
            playWebPAnimation(true);
    
            allElements.forEach(el => {
                el.style.transition = "opacity 0.5s ease";
                el.style.opacity = "0";
                el.style.pointerEvents = "none";
            });

            document.body.style.transition = "backgroundColor 0.5s ease";
            document.body.style.backgroundColor = "#181b22";
            setTimeout(() => {
                document.body.style.transition = "";
            }, 480);
    
            buttonsAndLinks.forEach(button => {
                button.disabled = true;
            });
    
            einstellungen.style.display = "block";
            setTimeout(() => {
                einstellungen.style.top = "0";
                einstellungen.style.opacity = "1";
            }, 10);
        } else {
            playWebPAnimation(false);
    
            einstellungen.style.top = "-100%";
            einstellungen.style.opacity = "0";
            setTimeout(() => {
                einstellungen.style.display = "none";
            }, 500);
    
            allElements.forEach(el => {
                el.style.opacity = "1";
                el.style.pointerEvents = "auto";
            });

            document.body.style.transition = "backgroundColor 0.5s ease";
            document.body.style.backgroundColor = "#181b22" ;
            setTimeout(() => {
                document.body.style.transition = "";
            }, 480);
    
            buttonsAndLinks.forEach(button => {
                button.disabled = false;
            });
        }
    
        setTimeout(() => {
            settingsIcon.disabled = false;
        }, 500);
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

    const deleteButton = document.querySelector(".löschen");

deleteButton.addEventListener("click", () => {
    showGlobalModal(
        "Account wirklich löschen?",
        "Dein gesamter Account inklusive aller Statistiken, XP, Münzen, Streaks und Fehler wird dauerhaft gelöscht und kann nicht wiederhergestellt werden.",
        "warnung.png",
        (result) => {
            if (result === "ok") {
                const user = firebase.auth().currentUser;
                const uid = user?.uid;

                if (!uid) {
                    console.error("Keine UID gefunden.");
                    return;
                }

                const firestore = firebase.firestore();

                user.reauthenticateWithPopup(new firebase.auth.GoogleAuthProvider()) // oder dein Loginprovider
                    .then(() => user.delete())
                    .then(() => {
                        // Lokalen Speicher löschen…
                    });

                // 1. Firestore-Daten löschen
                firestore.collection("users").doc(uid).delete()
                    .then(() => {
                        console.log("Firestore-Daten gelöscht.");

                        // 2. Authentifizierten Account löschen
                        return user.delete();
                    })
                    .then(() => {
                        console.log("Firebase-Auth-Account gelöscht.");

                        // 3. Lokale Daten löschen
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

                        // 4. Erfolg anzeigen
                        showGlobalModal(
                            "Account gelöscht",
                            "Dein Account wurde erfolgreich gelöscht. Du wirst nun zur Startseite weitergeleitet.",
                            "kreuz.png",
                            () => {
                                window.location.reload();
                            }
                        );
                    })
                    .catch((error) => {
                        console.error("Fehler beim Löschen:", error);
                    });
            }
        }
    );
});




    

});



