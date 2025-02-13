
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
    playerDiv.className = 'spieler';
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




