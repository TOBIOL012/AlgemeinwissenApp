function showGlobalModal(title, text, imageUrl, callback) {
    console.log("Modal wird angezeigt");
    // Existierendes Modal entfernen, falls vorhanden
    const existingModal = document.getElementById("global-modal");
    if (existingModal) existingModal.remove();

    // Hintergrund abdunkeln
    const overlay = document.createElement("div");

    overlay.id = "global-overlay";
    overlay.classList.add("global-overlay");
    // Modal erstellen
    const modal = document.createElement("div");
    modal.id = "global-modal";
    modal.classList.add("global-modal");

    // Header mit Überschrift und Schließen-Button
    const header = document.createElement("div");
    header.classList.add("global-modal-header");

    const titleElem = document.createElement("a");
    titleElem.textContent = title;

    const closeButton = document.createElement("img");
    closeButton.src = "kreuz.png";
    closeButton.innerHTML = "&times;";
    closeButton.classList.add("global-close");
    closeButton.onclick = function () {
        document.body.removeChild(overlay);
        document.body.removeChild(modal);
        if (callback) callback("closed");
    };

    header.appendChild(titleElem);
    header.appendChild(closeButton);

    // Inhalt
    const content = document.createElement("div");
    content.classList.add("global-modal-content");

    const textElem = document.createElement("a");
    textElem.textContent = text;

    content.appendChild(textElem);

    // Footer mit OK-Button
    const footer = document.createElement("div");
    footer.classList.add("global-modal-footer");

    const okButton = document.createElement("button");
    okButton.textContent = "OK";
    okButton.classList.add("global-ok-button");
    okButton.onclick = function () {
        document.body.removeChild(overlay);
        document.body.removeChild(modal);
        if (callback) callback("ok");
    };

    footer.appendChild(okButton);

    // Modal zusammenbauen
    modal.appendChild(header);
    modal.appendChild(content);
    modal.appendChild(footer);

    // Elemente zum Body hinzufügen
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
}

window.showGlobalModal = showGlobalModal;

