



window.navigate = async function (pageName) {
    try {
        // Starte mit dem Löschen der alten Seite
        clearOldPage();

        // Lade die neue Seite
        const response = await fetch(pageName);
        if (!response.ok) {
            throw new Error(`Seite konnte nicht geladen werden: ${response.statusText}`);
        }

        const html = await response.text();

        // Ersetze die gesamte App mit dem neuen HTML
        document.open(); // "Reset" der Seite
        document.write(html); // Schreibe das neue HTML
        document.close(); // Schließe die Seite und aktiviere das DOM

    } catch (error) {
        console.error(`Fehler beim Laden der Seite: ${error.message}`);
        alert(`Fehler: ${error.message}`);
    }
};

// Funktion, um alte Ressourcen zu entfernen
function clearOldPage() {
    // Entferne dynamische Skripte und Styles
    document.querySelectorAll('script.dynamic, link.dynamic').forEach(element => element.remove());

    // Entferne alle Event-Listener (optional, falls Probleme auftreten)
    const oldAppDiv = document.getElementById('app');
    if (oldAppDiv) {
        const newAppDiv = oldAppDiv.cloneNode(false); // Erstellt einen "sauberen" Klon
        oldAppDiv.replaceWith(newAppDiv);
    }
}

// Initialer Seitenaufruf
navigate('profil.html');