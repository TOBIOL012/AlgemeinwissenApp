document.addEventListener('DOMContentLoaded', function() {
    const rankingContainer = document.getElementById('ranking-container');
    const nextRoundButton = document.getElementById('next-round-button');
    const players = JSON.parse(localStorage.getItem('players')) || [];

    let questionsAsked = localStorage.getItem('questionsAsked') ? parseInt(localStorage.getItem('questionsAsked')) : 0;
    questionsAsked = 0;
    localStorage.setItem('questionsAsked', questionsAsked);

    function updateRanking() {
        // Sortiere die Spieler nach Punkten absteigend
        players.sort((a, b) => b.points - a.points);

        // Leere den Container
        rankingContainer.innerHTML = '';

        // Erstelle die Balken für die Rangliste
        players.forEach((player, index) => {
            const rankingBar = document.createElement('div');
            rankingBar.classList.add('ranking-bar');

            const rank = document.createElement('span');
            rank.textContent = `${index + 1}.`;

            const name = document.createElement('span');
            name.classList.add('name');
            name.textContent = player.name;

            const points = document.createElement('span');
            points.classList.add('points');
            points.textContent = player.points;

            rankingBar.appendChild(rank);
            rankingBar.appendChild(name);
            rankingBar.appendChild(points);

            rankingContainer.appendChild(rankingBar);
        });
    }

    nextRoundButton.addEventListener('click', function() {
        parent.document.getElementById('main-iframe').src = 'belohnung-mehrspieler.html';
    });

    updateRanking();
});