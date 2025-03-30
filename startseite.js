const coinsElement = document.getElementById("coins-value");
const xpElement = document.getElementById("xp-value");
const streakElement = document.getElementById("streak-value");
const dot = document.querySelector(".notification-dot");

// ❗ Falsche Fragen aus dem Speicher holen und Punktanzeige aktualisieren
function updateNotificationDot() {
    const incorrectQuestions = JSON.parse(localStorage.getItem('incorrectQuestions')) || [];
    const categoryErrors = incorrectQuestions.length;
    if (categoryErrors > 0) {
        dot.textContent = categoryErrors;
        dot.style.display = 'block';
        dot.style.scale = 1 + 0.4 * (1 - Math.exp(-categoryErrors / 600));
    } else {
        dot.textContent = '';
        dot.style.display = 'none';
    }
}

updateNotificationDot();

// ❗ Lokale Werte laden
function loadLocalStats() {
    coinsElement.textContent = localStorage.getItem("coins") || 0;
    xpElement.textContent = localStorage.getItem("xp") || 0;
    streakElement.textContent = localStorage.getItem("streak") || 0;
}
loadLocalStats();

// ❗ Cloud-Daten aus Firebase.js synchronisieren
function syncStatsFromFirestore() {
    if (!window.userData) {
        console.error("❌ Keine Benutzerdaten von Firebase vorhanden.");
        return;
    }
    console.log("✅ Live-Daten synchronisiert:", window.userData);

    coinsElement.textContent = window.userData.coins || 0;
    xpElement.textContent = window.userData.xp || 0;
    streakElement.textContent = window.userData.streak || 0;

    localStorage.setItem("coins", window.userData.coins || 0);
    localStorage.setItem("xp", window.userData.xp || 0);
    localStorage.setItem("token", window.userData.token || 0);
    localStorage.setItem("streak", window.userData.streak || 0);
    localStorage.setItem("profilecolor", window.userData.profilecolor || 0);
    localStorage.setItem("currentprofile", window.userData.currentprofile || 0);
    localStorage.setItem("beigetreten", window.userData.creationDate || 0);
    localStorage.setItem("username", window.userData.username || 0);
}

function switchsite(site) {
    const transitionBlock = document.createElement("div");
    Object.assign(transitionBlock.style, {
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "0",
        backgroundColor: "#141F25", // Adjust the color as needed
        zIndex: "10000",
        transition: "height 0.2s ease-in-out",
    });

    document.body.appendChild(transitionBlock);

    // Trigger the height transition
    requestAnimationFrame(() => {
        transitionBlock.style.height = "100%";
    });

    // Redirect after the animation
    setTimeout(() => {
        window.location.href = site;
    }, 200);
}





document.addEventListener("firebaseDataLoaded", () => {
    syncStatsFromFirestore(); // Firestore-Werte abrufen
}); 
/* Navigation
const frames = document.querySelectorAll("div[id='iframe']");
const navButtons = document.querySelectorAll(".nav-bar .nav-button");

navButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        frames.forEach(frame => frame.style.display = "none");
        if (frames[index]) {
            frames[index].style.display = "flex";
        }
    });
});
*/

function showPopup1(text) {
    const popup = document.createElement("div");
    Object.assign(popup.style, {
        position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
        padding: "1.2rem", background: "#39404d", color: "white", borderRadius: "8px",
        opacity: "0.85", transition: "opacity 0.5s", zIndex: "1000", fontSize: "1.1rem"
    });
    popup.textContent = text;
    document.body.appendChild(popup);
    setTimeout(() => popup.style.opacity = "0", 1500);
    setTimeout(() => popup.remove(), 2000);
}

// Aufruf: showPopup("Hallo!");



//Navigation Test
const frames = document.querySelectorAll("div[id='iframe']");
const navButtons = document.querySelectorAll(".nav-bar .nav-button");

// Letzten aktiven Frame aus localStorage abrufen
const lastActiveFrameIndex = localStorage.getItem("activeFrameIndex");

// Falls vorhanden, den gespeicherten Frame aktivieren
if (lastActiveFrameIndex !== null && frames[lastActiveFrameIndex]) {
    frames.forEach(frame => frame.style.display = "none");
    frames[lastActiveFrameIndex].style.display = "flex";
}

// Event-Listener für die Navigation setzen
navButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
        if (localStorage.getItem("uid") || index === 4 || index === 2 || index === 0) {
            if (window.userData.higheststreak !== null || index === 4 || index === 2 || index === 0) {
                frames.forEach(frame => frame.style.display = "none");
                document.body.style.backgroundColor = "";
        
                if (frames[index]) {
                    if (index === 3) {
                        frames[index].style.display = "block";
                    } else{
                        frames[index].style.display = "flex";
                    }
                    localStorage.setItem("activeFrameIndex", index); // Aktiven Frame speichern
                }
            } else {
                showPopup1("Kein Internetzugriff");
            }
        } else {
            if (index == 1){
                showPopup1("Online Missionen erst nach Anmeldung im Profil verfügbar");
            } else if (index == 3){
                showPopup1("Shop erst nach Anmeldung im Profil verfügbar");
            }
            document.querySelectorAll(".nav-button img")[4].style.transition = "scale 0.12s ease-in-out";
                setTimeout(() => document.querySelectorAll(".nav-button img")[4].style.scale = "1.35", 150);
                setTimeout(() => document.querySelectorAll(".nav-button img")[4].style.scale = "1", 350);
                setTimeout(() => document.querySelectorAll(".nav-button img")[4].style.scale = "1.25", 550);
                setTimeout(() => document.querySelectorAll(".nav-button img")[4].style.scale = "1", 750);
                setTimeout(() => document.querySelectorAll(".nav-button img")[4].style.scale = "1.15", 950);
                setTimeout(() => document.querySelectorAll(".nav-button img")[4].style.scale = "1", 1150);
                setTimeout(() => document.querySelectorAll(".nav-button img")[4].style.scale = "1.05", 1350);
                setTimeout(() => document.querySelectorAll(".nav-button img")[4].style.scale = "1", 1550);
                setTimeout(() => document.querySelectorAll(".nav-button img")[4].style.transition = "", 2000);
        }
    });
});








function themeColor(color) {
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.setAttribute('name', 'theme-color');
            document.head.appendChild(metaThemeColor);
        }
        metaThemeColor.setAttribute('content', color);

    }

window.themeColor = themeColor;





// Alle Buttons auswählen (angepasst an deinen Selektor, z. B. alle Elemente mit der Klasse .btn)
const buttons = document.querySelectorAll('.animated-button');

buttons.forEach(button => {
    button.addEventListener('touchstart', () => {
        requestAnimationFrame(() => {
            button.style.boxShadow = 'none';
            button.style.transform = 'translateY(3px)';
        });
    });

    button.addEventListener('touchend', () => {
        button.style.boxShadow = '';
        button.style.transform = '';
    });

    button.addEventListener('mouseleave', () => {
        button.style.boxShadow = '';
        button.style.transform = '';
    });
});



const navbuttons = document.querySelectorAll('.nav-button');

navbuttons.forEach((button, index) => {
    console.log(index);
    button.addEventListener('touchstart', () => {
        requestAnimationFrame(() => {
            document.querySelectorAll('.nav-button img')[index].style.scale = '0.75';
        });
    });

    button.addEventListener('touchend', () => {
        document.querySelectorAll('.nav-button img')[index].style.scale = '1';
    });

    if(!localStorage.getItem("uid")){
        if (index == 1  || index == 3){
            button.style.opacity = "0.8"
        }
    }
});

let button = document.querySelector(".submit-btn");

button.addEventListener('touchstart', () => {
    requestAnimationFrame(() => {
        button.style.boxShadow = 'none';
        button.style.transform = 'translateY(6px)';
    });
});

button.addEventListener('touchend', () => {
    button.style.boxShadow = '';
    button.style.transform = '';
});

const button1 = document.querySelector(".datenschutz");

button1.addEventListener('touchstart', () => {
    requestAnimationFrame(() => {
        button1.style.transition = 'scale 0.15s cubic-bezier(0.42, 0, 0.23, 2.12)';
        button1.style.scale = '0.99';
    });
});

button1.addEventListener('touchend', () => {
    button1.style.scale = '1';
});


document.addEventListener("firebaseDataLoaded", () => {
    if (window.userData.higheststreak !== null){
        const tokenminus = localStorage.getItem("token-minus") || 0;
        const token = window.userData.token;
        if (tokenminus > 0){
            if (tokenminus > token){
                firestore.collection("users").doc(uid).update({
                    token: firebase.firestore.FieldValue.increment(-token),
                })
            } else {
                firestore.collection("users").doc(uid).update({
                    token: firebase.firestore.FieldValue.increment(-tokenminus),
                })
            }
            localStorage.setItem("token-minus", 0);
        }
    }
});

let quizStyleAktiv = false; // Zustand merken

document.querySelectorAll(".quiz-button, .quiz-button-absolute, .quiz-absolute, .quiz-background").forEach(element => {
    element.addEventListener("click", () => {
        const quizButton = document.querySelector(".quiz-button");
        const einzelspielerButton = document.querySelector(".einzelspieler-button");
        const mehrspielerButton = document.querySelector(".mehrspieler-button");

        if (quizStyleAktiv) {
            // Style zurücksetzen
            einzelspielerButton.style.transition = "border-radius 0.2s";
            mehrspielerButton.style.transition = "border-radius 0.2s, margin-left 0.2s";
            einzelspielerButton.style.borderRadius = "";
            mehrspielerButton.style.borderRadius = "";
            mehrspielerButton.style.marginLeft = "";
            quizButton.style.display = "";
            setTimeout(() => {
                quizButton.style.opacity = "1";
            }, 30);
            


            quizStyleAktiv = false;
        } else {
            // Style setzen
            quizButton.style.display = "none";
            einzelspielerButton.style.transition = "";
            mehrspielerButton.style.transition = "";
            einzelspielerButton.style.borderRadius = "1.3rem";
            mehrspielerButton.style.borderRadius = "1.3rem";
            mehrspielerButton.style.marginLeft = "0.5rem";
            quizButton.style.opacity = "0";

            quizStyleAktiv = true;
        }
    });
});





//////////button//////////
const quizbuttons = document.querySelectorAll('.einzelspieler-button, .mehrspieler-button');

quizbuttons.forEach(button => {
    button.addEventListener('touchstart', () => {
        requestAnimationFrame(() => {
            button.style.boxShadow = 'none';
            button.style.transform = 'translateY(6px)';
        });
    });

    button.addEventListener('touchend', () => {
        button.style.boxShadow = '';
        button.style.transform = '';
    });

    button.addEventListener('mouseleave', () => {
        button.style.boxShadow = '';
        button.style.transform = '';
    });
});

const absolute = document.querySelector('.pfad-absolute');
const pfadstart = document.querySelector('.pfad-start');

absolute.addEventListener('touchstart', () => {
    requestAnimationFrame(() => {
        pfadstart.style.boxShadow = 'none';
        pfadstart.style.transform = 'translateY(6px)';
    });
});

absolute.addEventListener('touchend', () => {
    pfadstart.style.boxShadow = '';
    pfadstart.style.transform = '';
});

absolute.addEventListener('mouseleave', () => {
    pfadstart.style.boxShadow = '';
    pfadstart.style.transform = '';
});





