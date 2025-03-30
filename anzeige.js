function showGlobalModal(title, text, imageUrl, callback) {
    console.log("Modal wird angezeigt");
    const existingModal = document.getElementById("global-modal");
    if (existingModal) existingModal.remove();

    const overlay = document.createElement("div");
    overlay.id = "global-overlay";
    overlay.classList.add("global-overlay");

    const modal = document.createElement("div");
    modal.id = "global-modal";
    modal.classList.add("global-modal");

    // Anfangszustand für Animation
    modal.style.opacity = "0.3";
    modal.style.scale = "0.3";
    modal.style.transition = "opacity 0.3s cubic-bezier(0.37, 0.73, 0.51, 1.49), scale 0.3s cubic-bezier(0.37, 0.73, 0.51, 1.49)";

    const header = document.createElement("div");
    header.classList.add("global-modal-header");

    const titleElem = document.createElement("a");
    titleElem.textContent = title;

    const closeButton = document.createElement("img");
    closeButton.src = "kreuz.png";
    closeButton.classList.add("global-close");
    closeButton.onclick = function () {
        document.body.removeChild(overlay);
        document.body.removeChild(modal);
        if (callback) callback("closed");
    };

    header.appendChild(titleElem);
    header.appendChild(closeButton);

    const content = document.createElement("div");
    content.classList.add("global-modal-content");

    const textElem = document.createElement("a");
    textElem.textContent = text;

    content.appendChild(textElem);

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

    okButton.addEventListener('touchstart', () => {
        requestAnimationFrame(() => {
            okButton.style.boxShadow = 'none';
            okButton.style.transform = 'translateY(6px)';
        });
    });

    okButton.addEventListener('touchend', () => {
        okButton.style.boxShadow = '';
        okButton.style.transform = '';
    });

    okButton.addEventListener('mouseleave', () => {
        okButton.style.boxShadow = '';
        okButton.style.transform = '';
    });

    closeButton.addEventListener('touchstart', () => {
        requestAnimationFrame(() => {
            closeButton.style.scale = '0.75';
        });
    });

    closeButton.addEventListener('touchend', () => {
        closeButton.style.scale = '';
    });

    closeButton.addEventListener('mouseleave', () => {
        closeButton.style.scale = '';
    });

    footer.appendChild(okButton);

    modal.appendChild(header);
    modal.appendChild(content);
    modal.appendChild(footer);

    document.body.appendChild(overlay);
    document.body.appendChild(modal);

    // Trigger Animation mit kleinem Delay
    requestAnimationFrame(() => {
        modal.style.opacity = "1";
        modal.style.scale = "1";
        modal.style.transform = "translate(-50%, -50%)";
    });
}

window.showGlobalModal = showGlobalModal;