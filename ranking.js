
let userRank =  null;

function syncRankingData(uid) {
    console.log("syncRankingData gestartet für UID:", uid);

    if (!navigator.serviceWorker.controller) {
        return;
    }

    try {
        navigator.serviceWorker.controller.postMessage({ type: "initUserData", uid });
    } catch (error) {
        console.error("Fehler beim Senden der Nachricht an den Service Worker:", error);
    }

    navigator.serviceWorker.addEventListener("message", (event) => {
        console.log("📩 Nachricht vom Service Worker erhalten:", event.data);

        const ranking = event.data.ranking;
        userRank = event.data.userRank;
        const username = localStorage.getItem("username");
        console.log("🏆 Aktualisierte Rangliste:", ranking);
        console.log("📊 Benutzer-Rang:", userRank);
        
        updateRankingUI(ranking, userRank, username);
        
        
    });
}

function createPlayerElement(player, rank) {
    const playerDiv = document.createElement('div');
    console.log("🔢 Rang:", userRank);
    if (rank === userRank) {
        playerDiv.className = 'ich';
    } else {
        playerDiv.className = 'spieler';
    }
    if (rank === 0) {
        playerDiv.innerHTML = `<img class="spieler-platz-img" src="gold.png"></div>`;
    } else if (rank === 1) {
        playerDiv.innerHTML = `<img class="spieler-platz-img" src="silver.png"></div>`;
    } else if (rank === 2) {
        playerDiv.innerHTML = `<img class="spieler-platz-img" src="bronce.png"></div>`;
    } else if (rank > 2) {
        playerDiv.innerHTML = `<div class="spieler-platz">${rank + 1}</div>`;
    }
    playerDiv.innerHTML += `
        <div class="spieler-name">${player.Name}</div>
        <div class="spieler-punkte">${player.XP}</div>
    `;
    return playerDiv;
}

function loadAllPlayers(ranking) {
    const container = document.querySelector('.spieler-container');
    container.innerHTML = ''; // Clear existing players

    const fragment = document.createDocumentFragment();
    ranking.forEach((player, index) => {
        const playerElement = createPlayerElement(player, index);
        fragment.appendChild(playerElement);
    });
    container.appendChild(fragment);
}

function updateRankingUI(ranking, userRank, username) {
    console.log(username);
    document.querySelector('.scroll-button').textContent = `${username}: ${userRank}`;
    console.log("🔄 Aktualisiere UI mit Rangliste und Benutzer-Rang");
    loadAllPlayers(ranking);

}

const savedUID = localStorage.getItem("uid");
if (savedUID) {
    syncRankingData(savedUID);
} else {
    console.error("❌ Keine UID im LocalStorage gefunden!");
}

document.querySelector('.scroll-button').addEventListener('click', () => {
    if (userRank !== null) {
        const playerElement = document.querySelectorAll('.spieler')[userRank];
        if (playerElement) {
            playerElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    } else {
        console.error("❌ Benutzer-Rang ist nicht definiert!");
    }
});

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
          // Stelle sicher, dass das Ziel eine eindeutige Klasse hat:
          if (!dest.classList.contains("clonedInline")) {
            dest.classList.add("clonedInline");
          }
          // Füge ein <style>-Element ein, das die Pseudo-Regeln für dieses Element definiert:
          const styleEl = document.createElement("style");
          // Verwende die Klassen des Elements als Selektor:
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
  

  document.getElementById('profil').addEventListener('click', function () {
    const clone = cloneWithInlineStyles(document.body);
    const snapshot = clone.outerHTML;
    sessionStorage.setItem("profilSnapshot", snapshot);
    // Weiterleitung zur nächsten Seite
    window.location.href = "profil.html";
});




