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

function updateCategoryGraph() {
    console.log("oi");
    const categories = ['Geschichte', 'Geographie', 'Musik', 'Sport', 'Wissenschaft', 'Kunst'];

    categories.forEach(category => {
        // Hole die Fragen und Statistiken für die jeweilige Kategorie aus localStorage
        let answeredQuestions = JSON.parse(localStorage.getItem(category + 'Answered')) || [];
        let correctAnswers = JSON.parse(localStorage.getItem(category + 'Correct')) || [];

        // Finde die maximale Anzahl an Fragen in der Kategorie
        let totalQuestions = questions.filter(q => q.Kategorie === category).length;

        // Berechne die Prozentsätze
        let answeredPercentage = totalQuestions > 0 ? (answeredQuestions.length / totalQuestions) * 100 : 0;
        let correctPercentage = totalQuestions > 0 ? (correctAnswers.length / answeredQuestions.length) * 100 : 0;

        // Finde die relevanten Balken im HTML
        let categoryContainer = document.querySelector(`.${category.toLowerCase()}`);
        if (categoryContainer) {
            console.log("oi");
            let answeredBar = categoryContainer.querySelector('.' + category.toLowerCase() + '-beantwortet');
            let correctBar = categoryContainer.querySelector('.' + category.toLowerCase() + '-richtig');

            // Setze die Höhen der Balken mit Animation
            if (answeredBar) {
                answeredBar.style.transition = 'height 1s ease';
                answeredBar.style.height = '0%';
                setTimeout(() => {
                    answeredBar.style.height = `${answeredPercentage}%`;
                }, 100);
                console.log(answeredPercentage);
            }
            if (correctBar) {
                correctBar.style.transition = 'height 1s ease';
                correctBar.style.height = '0%';
                setTimeout(() => {
                    correctBar.style.height = `${correctPercentage}%`;
                }, 100);
                console.log(correctPercentage);
            }
        }
    });
}

// Führe die Funktion beim Laden der Seite aus
updateCategoryGraph();

function calculateDifferences() {
    // Kategorien
    const categories = ['Geschichte', 'Geographie', 'Musik', 'Sport', 'Wissenschaft', 'Kunst'];
    const difficulties = ['leicht', 'mittel', 'schwer', 'extrem', 'expert'];

    let maxDifference = 0;
    let maxCategory = '';
    let maxDifficulty = '';

    // Iteriere über jede Kategorie
    categories.forEach(category => {
        // Iteriere über jede Schwierigkeit
        difficulties.forEach(difficulty => {
            // Finde die Anzahl der Fragen dieser Kategorie und Schwierigkeit in der globalen `questions`-Liste
            const totalQuestionsForDifficulty = questions.filter(
                q => q.Kategorie === category && q.Schwierigkeitsgrad === difficulty
            ).length;

            // Finde die Anzahl der korrekt beantworteten Fragen dieser Kategorie und Schwierigkeit im localStorage
            const correctQuestionsForDifficulty = JSON.parse(localStorage.getItem(`${category}Answered`)) || [];
            const correctAnswersForDifficulty = correctQuestionsForDifficulty.filter(questionText => {
                const question = questions.find(
                    q => q.Frage === questionText && q.Kategorie === category && q.Schwierigkeitsgrad === difficulty
                );
                return question;
            }).length;

            // Berechne die Differenz
            const difference = totalQuestionsForDifficulty - correctAnswersForDifficulty;

            // Prüfe, ob die Differenz die bisher höchste ist
            if (difference > maxDifference) {
                maxDifference = difference;
                maxCategory = category;
                maxDifficulty = difficulty;
            }
        });
    });

    // Ausgabe der höchsten Differenz
    console.log(`Höchste Differenz: ${maxDifference}`);
    console.log(`Kategorie: ${maxCategory}, Schwierigkeit: ${maxDifficulty}`);
    document.querySelector('.Schwachpunkttext').textContent = `Schwachstelle: ${maxCategory}, ${maxDifficulty}`;
}

// Funktion ausführen
calculateDifferences();

        // Schwierigkeitswerte
        const difficultyWeights = {
            'leicht': 1,
            'mittel': 2,
            'schwer': 3,
            'extrem': 4,
            'expert': 5
        };

        // Beispiel: Beantwortete Fragen mit Schwierigkeitsgraden
        const answeredQuestions = JSON.parse(localStorage.getItem('answeredQuestions')) || [];

// Berechne den Durchschnitt
function calculateAverageDifficulty() {
    // Überprüfe, ob die Schwierigkeitsgrade existieren
    if (!answeredQuestions.length) {
        console.log("Keine beantworteten Fragen im Local Storage gefunden.");
        return 0; // Kein Durchschnitt möglich
    }

    // Reduziere die Schwierigkeit auf die Gewichtung
    const totalWeight = answeredQuestions.reduce((acc, questionText) => {
        // Suche die Frage in der globalen `questions`-Liste
        const question = questions.find(q => q.Frage === questionText);

        // Addiere das Gewicht, falls die Frage und ihr Schwierigkeitsgrad existieren
        return acc + (question && difficultyWeights[question.Schwierigkeitsgrad] || 0);
    }, 0);
    console.log(totalWeight);

    // Durchschnitt berechnen
    const averageWeight = totalWeight / answeredQuestions.length;

    return averageWeight;
}

        // Update den Balken und das Label
        function updateDifficultyBar() {
            const averageDifficulty = calculateAverageDifficulty();
        
            // Prozentuale Position basierend auf der Schwierigkeit (1-5)
            const percentage = (averageDifficulty / 5) * 100;
        
            // Update den Overlay-Balken
            const overlayBar = document.getElementById('overlay-bar');
        
            if (overlayBar) {
                overlayBar.style.marginLeft = `${percentage}%`;
        
                // Setze die Farbe basierend auf der durchschnittlichen Schwierigkeit
                let color;
                if (averageDifficulty <= 1.0) {
                    color = '#53E47F'; // Dunkleres Grün
                } else if (averageDifficulty <= 2.0) {
                    color = '#D4CC54'; // Dunkleres Gelb
                } else if (averageDifficulty <= 3.0) {
                    color = '#CF7C54'; // Dunkleres Orange
                } else if (averageDifficulty <= 4.0) {
                    color = '#CF5454'; // Dunkleres Rot
                } else {
                    color = '#C05FCC'; // Dunkleres Lila
                }
        
                // Setze die Farbe
                overlayBar.style.backgroundColor = color;
            }
        }

        // Initiale Aktualisierung
        updateDifficultyBar();