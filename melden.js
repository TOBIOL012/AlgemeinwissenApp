document.addEventListener('DOMContentLoaded', () => {

// Firebase initialisieren
const firebaseConfig = {
    apiKey: "AIzaSyCHdNTXnLblziPQkH0Kg2WjoTKk4vts1mE",
    authDomain: "besserwisser-95b63.firebaseapp.com",
    projectId: "besserwisser-95b63",
    storageBucket: "besserwisser-95b63.appspot.com",
    messagingSenderId: "522066225262",
    appId: "1:522066225262:web:4bec0b45ceff85913c1e7f",
    measurementId: "G-P8SBRHWS84"
};
  
  // Initialisieren
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  

// Globale Funktion zum Aufrufen des Meldedialogs
function showReportModal(callback) {
    document.querySelectorAll('.global-overlay, .global-modal').forEach(el => el.remove());


    const overlay = document.createElement('div');
    overlay.className = 'global-overlay';

    const modal = document.createElement('div');
    modal.className = 'global-modal';

    modal.innerHTML = `
        <div class="global-modal-header">
            <span>Frage melden</span>
            <div class="global-close" id="report-close">
                <img src="kreuz.png" alt="Schließen">
            </div>
        </div>
        <div class="global-modal-content">
            <div class="report-buttons">
                <button class="report-button" data-type="Falsche Schwierigkeit">Falsche Schwierigkeit</button>
                <button class="report-button" data-type="Falsche Antwort">Falsche Antwort</button>
                <button class="report-button" data-type="Schlecht gestellte Frage">Schlecht gestellte Frage</button>
                <button class="report-button" data-type="Technisches Problem">Technisches Problem</button>
                <button class="report-button" data-type="Sonstiges">Sonstiges</button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(modal);

    // Sanft sichtbar machen
    setTimeout(() => {
        overlay.classList.add("visible");
        modal.classList.add("visible");
    }, 10);

    

    document.getElementById('report-close').onclick = removeModal;

// ❗️Nur schließen, wenn wirklich auf die Abdunklung (Overlay) geklickt wurde
overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        removeModal();
    }
});



    function removeModal() {
        modal.remove();
        overlay.remove();
        if (callback) callback(null);
    }

    modal.querySelectorAll('.report-button').forEach(button => {
        button.addEventListener('click', () => {
            const meldung = button.dataset.type;
            const frageText = document.querySelector('.question')?.textContent || "Unbekannte Frage";
            const username = localStorage.getItem('username') || "Unbekannter Nutzer";
            const kategorie = document.querySelector('.category-text')?.textContent || "Unbekannte Kategorie";
    
            // ⛔️ Verhindere Mehrfachklicks
            if (modal.classList.contains("disabled")) return;
            modal.classList.add("disabled");
    
            // 🔒 Fenster sofort schließen
            removeModal();
    
            // 📝 Meldung in Firestore speichern
            db.collection("meldungen").add({
                kategorie: kategorie,
                grund: meldung,
                frage: frageText,
                nutzername: username,
                zeitstempel: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                console.log("✅ Meldung gespeichert.");
                showDankeMessage();
            })            
            .catch((error) => {
                console.error("❌ Fehler beim Speichern:", error);
            });
    
            if (callback) callback(meldung);
        });
    });
    
}

function showDankeMessage() {
    const danke = document.createElement('div');
    danke.className = 'danke-popup';
    danke.textContent = 'Danke für deine Meldung!';

    document.body.appendChild(danke);

    setTimeout(() => {
        danke.classList.add('visible');
    }, 10); // leicht verzögert für Transition

    setTimeout(() => {
        danke.classList.remove('visible');
        setTimeout(() => {
            danke.remove();
        }, 300); // Warte, bis die Transition vorbei ist
    }, 2500); // Dauer der Anzeige (in ms)
}


console.log(document.querySelector('.left-icons')); 
document.querySelector('.right-icon img[alt="Melden"]')?.addEventListener('click', () => {
    console.log("Melden-Button geklickt"); 
    showReportModal((meldung) => {
        if (meldung) {
            console.log("Gemeldet:", meldung);
        }
    });
});

});

window.showReportModal = showReportModal;


