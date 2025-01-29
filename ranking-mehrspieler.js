document.addEventListener('DOMContentLoaded', function() {
    const rankingContainer = document.getElementById('ranking-container');
    const nextRoundButton = document.getElementById('next-round-button');
    const players = JSON.parse(localStorage.getItem('players')) || [];
    const totalQuestionsPerPlayer = players[0].questionCount;

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
        // Überprüfen, ob alle Fragen beantwortet wurden
        const allQuestionsAnswered = players.every(player => player.questionsAnswered >= totalQuestionsPerPlayer);
        if (allQuestionsAnswered) {
            window.location.href = 'startseite.html';
        } else {
            window.location.href = 'fragen-mehrspieler.html';
        }
    });

    updateRanking();
});