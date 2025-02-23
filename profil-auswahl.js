const snapshot = sessionStorage.getItem("profilSnapshot");
if (snapshot) {
  const overlay = document.createElement("div");
  overlay.id = "profilOverlay";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.zIndex = "9999";
  // Der Snapshot enthält jetzt den gesamten HTML-Zustand inklusive inline Styles für alle Elemente und Pseudo-Elemente.
  overlay.innerHTML = snapshot;
  document.body.appendChild(overlay);
}

const firebaseConfig = {
  apiKey: "AIzaSyCHdNTXnLblziPQkH0Kg2WjoTKk4vts1mE",
  authDomain: "besserwisser-95b63.firebaseapp.com",
  projectId: "besserwisser-95b63",
  storageBucket: "besserwisser-95b63.appspot.com",
  messagingSenderId: "522066225262",
  appId: "1:522066225262:web:4bec0b45ceff85913c1e7f",
  measurementId: "G-P8SBRHWS84"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Globale Variablen
let jsonProfileUrls = [];         // Alle verfügbaren Profilbilder (aus JSON)
let userProfilePictures = [];     // Profilbilder, die der User besitzt (aus Firestore)
let currentProfile = null;        // In Firebase hinterlegtes currentprofile
let currentColor = null;          // In Firebase hinterlegte profilecolor
let selectedProfile = null;       // Vom User ausgewähltes Profilbild (aus den eigenen Bildern)
let selectedColor = null;         // Vom User ausgewählte Farbe
const uid = localStorage.getItem("uid");

// Registriere den Service Worker und hole anschließend die Benutzerdaten
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(registration => {
      console.log("Service Worker registriert:", registration);
      return navigator.serviceWorker.ready;
    })
    .then(() => {
      console.log("Service Worker ist bereit");
      // Hole zunächst die JSON-Daten
      loadProfileImages();
    })
    .catch(error => {
      console.error("Fehler bei der Registrierung des Service Workers:", error);
      loadProfileImages();
    });
} else {
  loadProfileImages();
}

// Lädt die JSON-Datei (alle verfügbaren Bilder) und fordert danach Benutzerdaten per SW an.
function loadProfileImages() {
  fetch('Profilbilder/profilbilder.Json')
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTP-Fehler: " + response.status);
      }
      return response.json();
    })
    .then(data => {
      // Erstelle URLs, z. B. "/Profilbilder/albert_einstein.png"
      jsonProfileUrls = data.map(item => `/Profilbilder/${item.datei}`);
      // Zeige zunächst alle Bilder aus JSON an (als Fallback)
      insertProfileImages(jsonProfileUrls);
      // Fordere Benutzerdaten via Service Worker an (profilepictures, currentprofile und profilecolor)
      if (uid && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({ type: "initUserData", uid });
      } else {
        console.warn("UID nicht vorhanden oder SW Controller nicht aktiv.");
      }
    })
    .catch(error => console.error("Fehler beim Laden der JSON-Datei:", error));
}

// Zeigt die Profilbilder an:
// - Zuerst: Bilder, die der User besitzt (userProfilePictures) – voll sichtbar und auswählbar
// - Danach: Restliche Bilder aus JSON – mit reduzierter Opacity, nicht auswählbar
function updateImageDisplay() {
  const profileContainer = document.querySelector('.profilbilder');
  if (!profileContainer) {
    console.error("Kein Container für Profilbilder gefunden.");
    return;
  }
  profileContainer.innerHTML = "";

  // Eigene Bilder: volle Opacity, auswählbar
  userProfilePictures.forEach(filename => {
    const div = document.createElement('div');
    div.className = 'profilbild selectable';
    const img = document.createElement('img');
    img.src = `/Profilbilder/${filename}`;
    img.alt = 'Profilbild';
    img.className = 'Profilbild-img';
    img.style.opacity = "1";
    div.appendChild(img);
    profileContainer.appendChild(div);
  });

  // Restliche Bilder: falls vorhanden
  const remainingUrls = jsonProfileUrls.filter(url => {
    const fileName = url.split('/').pop();
    return !userProfilePictures.includes(fileName);
  });
  remainingUrls.forEach(url => {
    const div = document.createElement('div');
    div.className = 'profilbild notSelectable';
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Profilbild';
    img.className = 'Profilbild-img';
    img.style.opacity = "0.5";
    div.appendChild(img);
    profileContainer.appendChild(div);
  });

  // Setze das große Profilbild anhand des in Firebase gespeicherten currentProfile,
  // aber markiere es nicht als active – die Hervorhebung erfolgt erst beim Anklicken.
  if (currentProfile) {
    const profilbildGross = document.querySelector('.Profilbild-groß');
    if (profilbildGross) {
      profilbildGross.src = `/Profilbilder/${currentProfile}`;
    }
    // Hier nicht selectedProfile = currentProfile setzen, damit es nicht dauerhaft hervorgehoben ist.
    const overlay = document.getElementById("profilOverlay");
    if (overlay) {
      overlay.remove();
      sessionStorage.removeItem("profilSnapshot");
    }
    document.body.style.opacity = "1";
  }
  
  // Füge nur den "selectable" Profilbildern Klick-Listener hinzu
  addProfileSelectionListener();
}

// Fallback: Zeigt alle Bilder aus JSON an (falls keine Benutzerdaten vorliegen)
function insertProfileImages(urls) {
  const profileContainer = document.querySelector('.profilbilder');
  if (!profileContainer) {
    console.error("Kein Container für Profilbilder gefunden.");
    return;
  }
  profileContainer.innerHTML = "";
  urls.forEach(url => {
    const div = document.createElement('div');
    div.className = 'profilbild notSelectable';
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Profilbild';
    img.className = 'Profilbild-img';
    img.style.opacity = "0.5";
    div.appendChild(img);
    profileContainer.appendChild(div);
  });
}

// Lauscht auf Nachrichten vom Service Worker (mit Benutzerdaten aus Firestore)
navigator.serviceWorker.addEventListener("message", event => {
  console.log("Nachricht vom SW erhalten:", event.data);
  if (event.data && event.data.type === "userDataUpdated") {
    const data = event.data.data;
    if (data.profilepictures) {
      userProfilePictures = data.profilepictures;  // z. B. ["albert_einstein.png", "isaac_newton.jpg"]
    }
    if (data.currentprofile) {
      currentProfile = data.currentprofile;
    }
    if (data.profilecolor) {
      currentColor = data.profilecolor;
    }
    updateImageDisplay();
    updateColorDisplay();
    highlightSelectedProfile(data.currentprofile);
  }
});

// Hebt ein ausgewähltes Profilbild hervor (umrandet, Bild vergrößert)
function highlightSelectedProfile(profileFilename) {
  const images = document.querySelectorAll('.profilbild img');
  images.forEach(img => {
    if (img.src.includes(profileFilename)) {
      img.parentElement.classList.add('activeProfile');
      img.classList.add('activeProfileImg');
    }
  });
}

// Entfernt alle Hervorhebungen der Profilbilder
function removeHighlighting() {
  const images = document.querySelectorAll('.profilbild img');
  images.forEach(img => {
    img.parentElement.classList.remove('activeProfile');
    img.classList.remove('activeProfileImg');
  });
}

// Nur für auswählbare (selectable) Bilder: Klick-Listener hinzufügen
function addProfileSelectionListener() {
  // Für auswählbare Bilder:
  const selectableImages = document.querySelectorAll('.profilbild.selectable');
  selectableImages.forEach(div => {
    div.addEventListener('click', () => {
      removeHighlighting();
      div.classList.add('activeProfile');
      const img = div.querySelector('img');
      img.classList.add('activeProfileImg');
      const parts = img.src.split('/');
      selectedProfile = parts[parts.length - 1];
      // Aktualisiere das Großbild
      const profilbildGross = document.querySelector('.Profilbild-groß');
      if (profilbildGross) {
        profilbildGross.src = `/Profilbilder/${selectedProfile}`;
      }
      // Markiere das ausgewählte Bild als active
      highlightSelectedProfile(selectedProfile);
    });
  });
  
  // Für nicht auswählbare (disabled) Bilder: Bei Klick Schüttel-Effekt
  const notSelectableImages = document.querySelectorAll('.profilbild.notSelectable');
  notSelectableImages.forEach(div => {
    div.addEventListener('click', () => {
      div.classList.add('shake');
      setTimeout(() => {
        div.classList.remove('shake');
      }, 500);
    });
  });
}

// Aktualisiert die Farbanzeige: Die aktuell gewählte Farbe wird voll deckend, alle anderen mit opacity 0.5.
function updateColorDisplay() {
  const colorElements = document.querySelectorAll('.farbe');
  colorElements.forEach(elem => {
    if (selectedColor && elem.getAttribute('data-color').toLowerCase() === selectedColor.toLowerCase()) {
      elem.style.opacity = "1";
      elem.classList.add('activeColor');
    } else if (currentColor && elem.getAttribute('data-color').toLowerCase() === currentColor.toLowerCase() && !selectedColor) {
      elem.style.opacity = "1";
      elem.classList.add('activeColor');
      // Falls noch keine Auswahl erfolgt ist, soll die aktuelle Firebase-Farbe genutzt werden
      selectedColor = currentColor;
    } else {
      elem.style.opacity = "0.5";
      elem.classList.remove('activeColor');
    }
  });
  // Aktualisiere die Hintergrundfarbe des Containers live
  const container = document.querySelector('.Profilbild-container');
  if (container && selectedColor) {
    console.log(selectedColor);
    container.style.backgroundColor = selectedColor;
  }
  let metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.setAttribute('name', 'theme-color');
      document.head.appendChild(metaThemeColor);
  }
  metaThemeColor.setAttribute('content', selectedColor);

  // Für Safari (iOS) - Hintergrundfarbe über Notch setzen
  document.documentElement.style.setProperty('--status-bar-color', selectedColor);
  
  // Falls kein safe-area-Inset-Top verwendet wird, als Fallback
  document.documentElement.style.backgroundColor = selectedColor;
}

// Fügt den Farbeingabe-Klick-Listener hinzu
function addColorSelectionListener() {
  const colorElements = document.querySelectorAll('.farbe');
  colorElements.forEach(elem => {
    elem.addEventListener('click', () => {
      selectedColor = elem.getAttribute('data-color');
      updateColorDisplay();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  addColorSelectionListener();
});

// Beim Klick auf den Pfeil-Link (Klasse "pfeil") wird das ausgewählte Profilbild und die ausgewählte Farbe in Firebase gespeichert.
const pfeilLink = document.querySelector('a.pfeil');
if (pfeilLink) {
  pfeilLink.addEventListener('click', event => {
    if (!uid || (!selectedProfile && !selectedColor)) {
      console.error("UID oder Auswahl fehlt.");
      return;
    }
    event.preventDefault(); // Navigation erst nach Update
    let updateData = {};
    if (currentProfile !== selectedProfile && selectedProfile) {
      updateData.currentprofile = selectedProfile;
      localStorage.setItem("profil", selectedProfile);
    }
    if (currentColor !== selectedColor && selectedColor) {
      updateData.profilecolor = selectedColor;
      localStorage.setItem("profilecolor", selectedColor);
    }
    if (Object.keys(updateData).length > 0) {
      const clone = cloneWithInlineStyles(document.body);
      const snapshot = clone.outerHTML;
      sessionStorage.setItem("profilSnapshot", snapshot);
      const firestore = firebase.firestore();
      firestore.collection("users").doc(uid).update(updateData)
        .then(() => {
          const clone = cloneWithInlineStyles(document.body);
          const snapshot = clone.outerHTML;
          sessionStorage.setItem("profilSnapshot", snapshot);
          if (updateData.currentprofile) {
            currentProfile = selectedProfile;
            removeHighlighting();
            highlightSelectedProfile(currentProfile);
          }
          if (updateData.profilecolor) {
            currentColor = selectedColor;
          }
          window.location.href = "profil.html";
        })
        .catch(error => {
          console.error("Fehler beim Aktualisieren:", error);
        });
    } else {
      window.location.href = "profil.html";
    }
  });
}

// Kopiert den gesamten HTML-Zustand inklusive Inline-Stilen (auch für Pseudo-Elemente)
function cloneWithInlineStyles(element) {
  const clone = element.cloneNode(true);
  
  function copyComputedStyle(src, dest) {
    const computed = window.getComputedStyle(src);
    for (let i = 0; i < computed.length; i++) {
      const key = computed[i];
      dest.style.setProperty(key, computed.getPropertyValue(key), computed.getPropertyPriority(key));
    }
    // Für ::before und ::after Pseudo-Elemente:
    ['::before', '::after'].forEach(pseudo => {
      const pseudoStyle = window.getComputedStyle(src, pseudo);
      let cssText = "";
      for (let i = 0; i < pseudoStyle.length; i++) {
        const prop = pseudoStyle[i];
        cssText += `${prop}: ${pseudoStyle.getPropertyValue(prop)}; `;
      }
      if (cssText.trim() !== "") {
        if (!dest.classList.contains("clonedInline")) {
          dest.classList.add("clonedInline");
        }
        const styleEl = document.createElement("style");
        styleEl.textContent = `.${dest.className.split(" ").join(".")}${pseudo} { ${cssText} }`;
        dest.appendChild(styleEl);
      }
    });
  }
  
  function traverse(src, dest) {
    copyComputedStyle(src, dest);
    for (let i = 0; i < src.children.length; i++) {
      traverse(src.children[i], dest.children[i]);
    }
  }
  
  traverse(element, clone);
  return clone;
}

    