const auth = firebase.auth();

function extendStreak() {
    auth.onAuthStateChanged((user) => {
        if (user) {
            const uid = user.uid;
            const today = new Date().toISOString().split("T")[0]; // Aktuelles Datum

            firestore.collection("users").doc(uid).get().then((doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    const lastUpdateDate = data.lastUpdateDate || null;

                    // Prüfe, ob die Streak aktualisiert werden soll
                    if (lastUpdateDate !== today) {
                        // Verlängere die Streak
                        const updatedStreak = (data.streak || 0) + 1;
                        const highestStreak = data.higheststreak || 0;
                        const newHighestStreak = updatedStreak > highestStreak ? updatedStreak : highestStreak;

                        // Füge `1` zum Verlauf hinzu
                        const updatedStreakHistory = [...(data.streakHistory || []), 1];

                        // Aktualisiere Firestore
                        firestore.collection("users").doc(uid).update({
                            streak: updatedStreak,
                            higheststreak: newHighestStreak,
                            lastUpdateDate: today,
                            streakHistory: updatedStreakHistory
                        }).then(() => {
                            console.log("Streak verlängert, Verlauf und höchste Streak aktualisiert.");
                        }).catch((error) => {
                            console.error("Fehler beim Aktualisieren der Streak:", error);
                        });
                    } else {
                        console.log("Streak wurde heute bereits aktualisiert.");
                    }
                } else {
                    console.error("Benutzerdokument nicht gefunden.");
                }
            }).catch((error) => {
                console.error("Fehler beim Abrufen des Benutzerdokuments:", error);
            });
        } else {
            console.error("Benutzer nicht eingeloggt.");
        }
    });
}

window.extendStreak = extendStreak;




