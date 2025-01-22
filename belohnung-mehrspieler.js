document.addEventListener('DOMContentLoaded', function() {
    const correctCount = parseInt(localStorage.getItem('correctCount') || '0', 10);
    const totalQuestions = parseInt(localStorage.getItem('totalQuestions') || '0', 10);

    // Überprüfen, ob totalQuestions gültig ist, um Division durch Null zu vermeiden
    let percentage = 0;
    if (totalQuestions > 0) {
        percentage = (correctCount / totalQuestions) * 100;
    }

    document.querySelector('.progress').style.width = `${percentage}%`;
    document.querySelector('.progress a').textContent = `${percentage.toFixed(2)}%`;

    const nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', function() {
        window.location.href = 'startseite.html';
    });

    // Calculate earned coins and XP
    const earnedCoins = correctCount; // 1 Münze pro richtiger Frage
    const earnedXP = totalQuestions + (2 * correctCount); // Anzahl der Fragen + 2 XP pro richtiger Frage

    const previousTotalCoins = parseInt(localStorage.getItem('totalCoins') || '0', 10);
    const newTotalCoins = previousTotalCoins + earnedCoins;

    const previousTotalXP = parseInt(localStorage.getItem('totalXP') || '0', 10);
    const newTotalXP = previousTotalXP + earnedXP;

    // Display earned XP first
    const xpElement = document.getElementById('xp-total');
    xpElement.textContent = `+${earnedXP}`;
    xpElement.style.opacity = '1';

    setTimeout(() => {
        // Transition to display total XP before adding earned XP
        xpElement.style.opacity = '0.5';
        xpElement.textContent = previousTotalXP;

        let startXP = previousTotalXP;
        const endXP = newTotalXP;
        const duration = 800;
        const startTime = performance.now();

        function updateXPAnimation(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentXP = Math.floor(startXP + (endXP - startXP) * progress);
            xpElement.textContent = currentXP;

            if (progress < 1) {
                requestAnimationFrame(updateXPAnimation);
            } else {
                xpElement.style.opacity = '1';
            }
        }

        requestAnimationFrame(updateXPAnimation);
    }, 2000);

    // Display earned coins
    const coinsElement = document.getElementById('coins-total');
    coinsElement.textContent = `+${earnedCoins}`;
    coinsElement.style.opacity = '1';

    setTimeout(() => {
        // Transition to display total coins before adding earned coins
        coinsElement.style.opacity = '0.5';
        coinsElement.textContent = previousTotalCoins;

        let startCoins = previousTotalCoins;
        const endCoins = newTotalCoins;
        const duration = 800;
        const startTime = performance.now();

        function updateCoinsAnimation(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentCoins = Math.floor(startCoins + (endCoins - startCoins) * progress);
            coinsElement.textContent = currentCoins;

            if (progress < 1) {
                requestAnimationFrame(updateCoinsAnimation);
            } else {
                coinsElement.style.opacity = '1';
            }
        }

        requestAnimationFrame(updateCoinsAnimation);
    }, 2000);

    localStorage.setItem('totalCoins', newTotalCoins);
    localStorage.setItem('totalXP', newTotalXP);
});