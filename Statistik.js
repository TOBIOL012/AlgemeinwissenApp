function updateStatistics() {
    let answeredQuestions = JSON.parse(localStorage.getItem('answeredQuestions')) || [];
    let correctAnswers = JSON.parse(localStorage.getItem('correctAnswers')) || [];

    let totalQuestions = questions.length; // Beispielwert, kannst du dynamisch setzen
    let totalAnswered = answeredQuestions.length;
    let totalRight = correctAnswers.length;

    // Berechne die Prozentsätze
    let answeredPercentage = totalQuestions > 0 ? (totalAnswered / totalQuestions * 100) : 0;
    let rightPercentage = totalAnswered > 0 ? (totalRight / totalQuestions * 100) : 0;

    // Runde die Prozentsätze
    answeredPercentage = Math.round(answeredPercentage);
    rightPercentage = Math.round(rightPercentage);

    // Aktualisiere die Texte
    document.querySelector('.fragen-gesamt-Text').textContent = `Gesamt: ${totalQuestions}`;
    document.querySelector('.fragen-beantwortet-Text').textContent = `Beantwortet: ${totalAnswered}`;
    document.querySelector('.fragen-richtig-Text').textContent = `Richtig: ${totalRight}`;

    // Hole die Kreiselemente
    let circleBeantwortet = document.querySelector('.circle-beantwortet');
    let circleRichtig = document.querySelector('.circle-richtig');

    if (circleBeantwortet && circleRichtig) {
        // Setze initial beide Kreise auf 0, um die Animation von dort zu starten
        circleBeantwortet.style.strokeDasharray = `0, 100`;
        circleRichtig.style.strokeDasharray = `0, 100`;

        // Setze die tatsächlichen Werte mit einem kleinen Timeout für die Animation
        setTimeout(() => {
            circleBeantwortet.style.strokeDasharray = `${answeredPercentage}, 100`;
            circleRichtig.style.strokeDasharray = `${rightPercentage}, 100`;
        }, 100); // 100ms Verzögerung
    }
}

// Führe die Funktion beim Laden der Seite aus
updateStatistics();