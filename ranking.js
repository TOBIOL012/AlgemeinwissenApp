
let userRank =  null;

function syncRankingData() {
    const username = localStorage.getItem("username");
    updateRankingUI(window.ranking, window.userRank, username);
    userRank = window.userData.userRank;
}

function createPlayerElement(player, rank) {
    const playerDiv = document.createElement('div');
    console.log("🔢 Rang:", userRank);

    if (rank === 0) {
        playerDiv.innerHTML = `<img class="spieler-platz-img" src="gold.png"></div>`;
    } else if (rank === 1) {
        playerDiv.innerHTML = `<img class="spieler-platz-img" src="silver.png"></div>`;
        playerDiv.classList.add('center');
    } else if (rank === 2) {
        playerDiv.innerHTML = `<img class="spieler-platz-img" src="bronce.png"></div>`;
    } else if (rank > 2) {
        playerDiv.innerHTML = `<div class="spieler-platz">${rank + 1}</div>`;
    }
    playerDiv.innerHTML += `
        <div class="spieler-name">${player.Name}</div>
        <div class="spieler-punkte">${player.XP}</div>
    `;
    if (rank === userRank) {
        playerDiv.className = 'ich';
    } else {
        playerDiv.className = 'spieler';
    }

    if (rank === 0) {
        playerDiv.id = 'spieler1';
    } else if (rank === 1) {
        playerDiv.id = 'spieler2';
    } else if (rank === 2) {
        playerDiv.id = 'spieler3';
    }

    return playerDiv;
}

function loadAllPlayers(ranking) {
    console.log(window.ranking);
    const container = document.querySelector('.spieler-container');
    container.innerHTML = ''; // Clear existing players

    const fragment = document.createDocumentFragment();
    const podium = document.createElement('div');
    podium.className = 'podest';

    const firstPlace = createPlayerElement(ranking[0], 0);
    const secondPlace = createPlayerElement(ranking[1], 1);
    const thirdPlace = createPlayerElement(ranking[2], 2);

    [secondPlace, firstPlace, thirdPlace].forEach((place, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'podest-wrapper';
        const imgDiv = document.createElement('div');
        imgDiv.className = 'img-div';
        if (place === firstPlace) imgDiv.innerHTML = `<img src="Profilbilder/${ranking[0].Currentprofile}">`;
        if (place === secondPlace) imgDiv.innerHTML = `<img src="Profilbilder/${ranking[1].Currentprofile}">`;
        if (place === thirdPlace) imgDiv.innerHTML = `<img src="Profilbilder/${ranking[2].Currentprofile}">`;
        wrapper.appendChild(imgDiv);
        wrapper.appendChild(place);
        podium.appendChild(wrapper);
    });

    ranking.slice(3).forEach((player, index) => {
        const playerElement = createPlayerElement(player, index + 3);
        fragment.appendChild(playerElement);
    });

    container.appendChild(podium);
    container.appendChild(fragment);
}

function updateRankingUI(ranking, userRank, username) {
    console.log(username);
    document.querySelector('.scroll-button').textContent = `${window.userData.username}: Rang ${window.userRank}`;
    console.log("🔄 Aktualisiere UI mit Rangliste und Benutzer-Rang");
    loadAllPlayers(ranking);
}

document.querySelector('.scroll-button').addEventListener('click', () => {
    const playerElement = document.querySelectorAll('.spieler')[window.userRank];
    if (playerElement) {
        playerElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});

document.addEventListener("rankingDataLoaded", function () {
    syncRankingData();
});




