// speichern.js

// Funktion zum Speichern einer Frage in Firebase
async function speichereFrageInFirebase(frageObjekt, uid) {
    if (!frageObjekt || !frageObjekt.Frage || !uid) {
        console.error("Ungültige Daten zum Speichern.");
        return "fehler";
    }

    try {
        const db = firebase.firestore();
        const frageId = frageObjekt.Frage;
        const frageRef = db.collection("users").doc(uid).collection("gespeicherteFragen").doc(frageId);

        const doc = await frageRef.get();
        if (doc.exists) {
            return "bereitsVorhanden";
        }

        await frageRef.set({
            ...frageObjekt,
            gespeichertAm: new Date().toISOString()
        });

        return "gespeichert";
    } catch (error) {
        console.error("Fehler beim Speichern:", error);
        return "fehler";
    }
}

// Feedback anzeigen (Popup unten)
function zeigeSpeicherFeedback(text = "Frage gespeichert!") {
    const popup = document.createElement('div');
    popup.className = "danke-popup";
    popup.textContent = text;
    document.body.appendChild(popup);
    setTimeout(() => popup.classList.add('visible'), 10);
    setTimeout(() => popup.remove(), 2000);
}

// Exportieren für andere Dateien
window.speichereFrageInFirebase = speichereFrageInFirebase;
window.zeigeSpeicherFeedback = zeigeSpeicherFeedback;
