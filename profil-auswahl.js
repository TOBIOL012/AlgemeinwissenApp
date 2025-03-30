// Globale Variablen
let jsonProfileUrls = [];         // Alle verfügbaren Profilbilder (aus JSON)
let userProfilePictures = [];     // Profilbilder, die der User besitzt (aus Firestore)
let currentProfile = null;        // In Firebase hinterlegtes currentprofile
let currentColor = null;          // In Firebase hinterlegte profilecolor
let selectedProfile = null;       // Vom User ausgewähltes Profilbild (aus den eigenen Bildern)
let selectedColor = null;         // Vom User ausgewählte Farbe

// Registriere den Service Worker und hole anschließend die Benutzerdaten




// Lädt die JSON-Datei (alle verfügbaren Bilder) und fordert danach Benutzerdaten per SW an.
function loadProfileImages() {
  const data = profilbilder;
  jsonProfileUrls = data.map(item => `Profilbilder/${item.datei}`);
  updateImageDisplay(jsonProfileUrls);
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
  console.log(userProfilePictures);
  userProfilePictures.forEach(filename => {
    const div = document.createElement('div');
    div.className = 'profilbild selectable';
    const img = document.createElement('img');
    img.src = `Profilbilder/${filename}`;
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
    const profilbildGross = document.querySelector('.profil-auswahl .Profilbild-groß');
    if (profilbildGross) {
      profilbildGross.src = `Profilbilder/${currentProfile}`;
      console.log(profilbildGross.src);
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



// Lauscht auf Nachrichten vom Service Worker (mit Benutzerdaten aus Firestore)



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
      const profilbildGross = document.querySelector('.profil-auswahl .Profilbild-groß');
      const profilbildGross1 = document.querySelector('.Profilbild-groß');
      if (profilbildGross) {
        profilbildGross.src = `Profilbilder/${selectedProfile}`;
        profilbildGross1.src = `Profilbilder/${selectedProfile}`;
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
  console.log("updateColorDisplay");
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
  const container = document.querySelector('.Profilbild-container1');
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
      firestore.collection("users").doc(uid).update(updateData)
        .then(() => {
          if (updateData.currentprofile) {
            currentProfile = selectedProfile;
            removeHighlighting();
            highlightSelectedProfile(currentProfile);
          }
          if (updateData.profilecolor) {
            currentColor = selectedColor;
          }
          
        })
        .catch(error => {
          console.error("Fehler beim Aktualisieren:", error);
        });
    } 
    const frames = document.querySelectorAll("div[id='iframe']");
    console.log("hallo");
    frames.forEach(frame => frame.style.display = "none");
    document.querySelector(".profil").style.display = "flex";
  });
}


document.addEventListener("firebaseDataLoaded", function () {
  userProfilePictures = window.userData.profilepictures;
  selectedColor = window.userData.profilecolor;
  currentProfile = window.userData.currentprofile;
  selectedProfile = currentProfile;
  currentColor = window.userData.profilecolor;
  updateColorDisplay();
  loadProfileImages();
  highlightSelectedProfile(selectedProfile);
});

const deleteButton = document.querySelector('.back-arrow');

deleteButton.addEventListener('touchstart', () => {
  requestAnimationFrame(() => {
      deleteButton.style.scale = '1.2';
  });
});

deleteButton.addEventListener('touchend', () => {
  deleteButton.style.scale = '';
});

deleteButton.addEventListener('mouseleave', () => {
  deleteButton.style.scale = '';
});