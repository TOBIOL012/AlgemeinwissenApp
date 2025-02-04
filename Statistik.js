// Überprüfung und Definition der Funktion updateStatistics
if (typeof updateStatistics !== 'function') {
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
}

// Überprüfung und Definition der Funktion updateCategoryGraph
if (typeof updateCategoryGraph !== 'function') {
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
}

// Überprüfung und Definition der Funktion calculateDifferences
if (typeof calculateDifferences !== 'function') {
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
}

// Schwierigkeitswerte nur einmal definieren
if (typeof difficultyWeights === 'undefined') {
    var difficultyWeights = {
        'leicht': 1,
        'mittel': 2,
        'schwer': 3,
        'extrem': 4,
        'expert': 5
    };
}

// Berechnung des Durchschnitts nur einmal definieren
if (typeof calculateAverageDifficulty !== 'function') {
    let answeredQuestions = JSON.parse(localStorage.getItem('answeredQuestions')) || [];
    function calculateAverageDifficulty() {
        if (!answeredQuestions.length) {
            console.log("Keine beantworteten Fragen im Local Storage gefunden.");
            return 0;
        }

        const totalWeight = answeredQuestions.reduce((acc, questionText) => {
            const question = questions.find(q => q.Frage === questionText);
            return acc + (question && difficultyWeights[question.Schwierigkeitsgrad] || 0);
        }, 0);

        const averageWeight = totalWeight / answeredQuestions.length;
        return averageWeight;
    }
}

// Update der Schwierigkeitsleiste nur einmal definieren
if (typeof updateDifficultyBar !== 'function') {
    function updateDifficultyBar() {
        const averageDifficulty = calculateAverageDifficulty();
        const percentage = (averageDifficulty / 5) * 100;
        console.log(`Durchschnittliche Schwierigkeit: ${averageDifficulty}`);

        const overlayBar = document.getElementById('overlay-bar');
        if (overlayBar) {
            overlayBar.style.marginLeft = `${percentage}%`;

            let color;
            if (averageDifficulty <= 1.0) color = '#53E47F';
            else if (averageDifficulty <= 2.0) color = '#D4CC54';
            else if (averageDifficulty <= 3.0) color = '#CF7C54';
            else if (averageDifficulty <= 4.0) color = '#CF5454';
            else color = '#C05FCC';

            overlayBar.style.backgroundColor = color;
        }
    }

    // Initiale Aktualisierung
    updateDifficultyBar();
}

function syncStreakDataFromServiceWorker() {
    if (!navigator.serviceWorker.controller) {
        console.error("❌ Kein aktiver Service Worker gefunden. Registrierung überprüfen!");
        return;
    }

    console.log("📨 Sende Nachricht an Service Worker zur Streak-Abfrage:", { type: "initUserData", uid: localStorage.getItem("uid") });

    try {
        navigator.serviceWorker.controller.postMessage({ type: "initUserData", uid: localStorage.getItem("uid") });
        console.log("✅ Streak-Anfrage erfolgreich gesendet!");
    } catch (error) {
        console.error("❌ Fehler beim Senden der Streak-Anfrage an den Service Worker:", error);
    }
}

navigator.serviceWorker.addEventListener("message", (event) => {
    if (!event.data || !event.data.type) return;

    if (event.data.type === "userDataUpdated") {
        console.log("✅ Streak-Daten aktualisiert:", event.data.data);

        const data = event.data.data;
        const streakValue = data.streak || 0;
        const highestStreakValue = data.higheststreak || 0;

        localStorage.setItem("lastStreak", streakValue);
        localStorage.setItem("lastHighestStreak", highestStreakValue);

        document.querySelector(".streak-stats-number").textContent = streakValue;
        document.querySelector(".highest-streak-stats-number").textContent = highestStreakValue;
    }
});

syncStreakDataFromServiceWorker();

let xpHistory = []; // Start with an empty array

function syncXpHistoryFromServiceWorker() {
    if (!navigator.serviceWorker.controller) {
        console.error("❌ Kein aktiver Service Worker gefunden. Registrierung überprüfen!");
        return;
    }

    console.log("📨 Sende Nachricht an Service Worker zur XP-Verlauf-Abfrage:", { type: "fetchXpHistory", uid: localStorage.getItem("uid") });

    try {
        navigator.serviceWorker.controller.postMessage({ type: "fetchXpHistory", uid: localStorage.getItem("uid") });
        console.log("✅ XP-History-Anfrage erfolgreich gesendet!");
    } catch (error) {
        console.error("❌ Fehler beim Senden der XP-History-Anfrage an den Service Worker:", error);
    }
}

navigator.serviceWorker.addEventListener("message", (event) => {
    if (!event.data || !event.data.type) return;

    if (event.data.type === "userDataUpdated") {
        console.log("✅ XP-History aktualisiert:", event.data.data);

        if (event.data.data.xpHistory) {
            xpHistory = [...event.data.data.xpHistory]; // Ensure the array is replaced
            console.log("XP-History loaded:", xpHistory);
            localStorage.setItem("xpHistory", JSON.stringify(xpHistory));
            prepareChartData(); // Prepare data before updating chart
            updateChart(); // Ensure the graph is updated with the new data
        } else {
            console.warn("❌ Keine XP-History gefunden!");
        }
    }
});

syncXpHistoryFromServiceWorker();

const days = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

const today = new Date();
const todayIndex = (today.getDay() + 6) % 7;
const currentDayOfMonth = today.getDate();
const daysInMonth = 28;

let weeks = [];
let months = [];

function prepareChartData() {
    const dailyXp = xpHistory.map((xp, i) => i === 0 ? xp : xp - xpHistory[i - 1]);

    weeks = [];
    let weekData = [];
    for (let i = dailyXp.length - 1; i >= 0; i--) {
        weekData.unshift(dailyXp[i]);
        if (weekData.length === 7 || i === 0) {
            while (weekData.length < 7) weekData.unshift(0);
            weeks.unshift(weekData);
            weekData = [];
        }
    }

    months = [];
    let monthData = [];
    for (let i = dailyXp.length - 1; i >= 0; i--) {
        monthData.unshift(dailyXp[i]);
        if (monthData.length === daysInMonth || i === 0) {
            while (monthData.length < daysInMonth) monthData.unshift(0);
            months.unshift(monthData);
            monthData = [];
        }
    }

    currentWeekIndex = weeks.length - 1;
    currentMonthIndex = months.length - 1;
}

let currentWeekIndex = 0;
let currentMonthIndex = 0;
let viewMode = 'week'; // Set default view mode
let isAnimating = false;

const ctx = document.getElementById('xpChart').getContext('2d');
const dots = document.querySelectorAll('.week-label div');

const weekButton = document.getElementById("weekButton");
const monthButton = document.getElementById("monthButton");

if (viewMode === 'week') {
    weekButton.classList.add("active");
} else {
    monthButton.classList.add("active");
}

weekButton.addEventListener("click", () => {
    if (viewMode !== "week") {
        viewMode = "week";
        weekButton.classList.add("active");
        monthButton.classList.remove("active");
        updateChart();
    }
});

monthButton.addEventListener("click", () => {
    if (viewMode !== "month") {
        viewMode = "month";
        monthButton.classList.add("active");
        weekButton.classList.remove("active");
        updateChart();
    }
});

function updateDots() {
    let totalItems = viewMode === 'week' ? weeks.length : months.length;
    let activeIndex = viewMode === 'week' ? currentWeekIndex : currentMonthIndex;

    dots.forEach((dot, index) => {
        let relativeIndex = index - Math.floor(dots.length / 2);
        let targetIndex = activeIndex + relativeIndex;

        if (targetIndex < 0 || targetIndex >= totalItems) {
            dot.style.opacity = "0"; 
        } else {
            let isCenter = targetIndex === activeIndex;
            let isOuter = relativeIndex === -Math.floor(dots.length / 2) || relativeIndex === Math.floor(dots.length / 2);

            dot.style.transition = "background 0.3s ease, width 0.3s ease, height 0.3s ease, opacity 0.3s ease";
            dot.style.background = isCenter ? "#9f2fdf" : "#55595f";
            dot.style.width = isCenter ? "10px" : isOuter ? "6px" : "8px";
            dot.style.height = isCenter ? "10px" : isOuter ? "6px" : "8px";
            dot.style.opacity = isOuter && !isCenter ? "0.5" : "1";
        }
    });
}

// **Einfacher Tooltip für XP-Wert**
const tooltip = document.createElement("div");
tooltip.classList.add("custom-tooltip");
document.body.appendChild(tooltip);

ctx.canvas.addEventListener("mousemove", (event) => {
    const points = chart.getElementsAtEventForMode(event, "nearest", { intersect: true }, true);
    if (points.length) {
        const point = points[0];
        const xpValue = chart.data.datasets[0].data[point.index];

        const canvasRect = ctx.canvas.getBoundingClientRect();
        tooltip.innerText = xpValue;
        tooltip.style.display = "block";
        tooltip.style.left = `${canvasRect.left + point.element.x}px`;
        tooltip.style.top = `${canvasRect.top + point.element.y - 20}px`;
    } else {
        tooltip.style.display = "none";
    }
});

ctx.canvas.addEventListener("mouseout", () => {
    tooltip.style.display = "none";
});

// **Chart**
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'XP',
            data: [],
            borderColor: '#9f2fdf',
            backgroundColor: 'rgba(118, 30, 242, 0.2)',
            borderWidth: 3,
            pointRadius: 3,
            pointBackgroundColor: '#9f2fdf',
            pointHoverRadius: 6,
        }]
    },
    options: {
        responsive: true,
        animation: { duration: 0 },
        scales: {
            y: { beginAtZero: true },
            x: {
                ticks: {
                    callback: function (val, index, values) {
                        return viewMode === 'month'
                            ? ((currentDayOfMonth - (daysInMonth - 1) + index + daysInMonth) % 30 + 1).toString()
                            : days[(todayIndex - 6 + index + 7) % 7];
                    }
                }
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        }
    }
});

function updateChart() {
    if (isAnimating) return;
    isAnimating = true;

    chart.options.animation = {
        duration: 300,
        easing: 'easeInOutCubic'
    };

    if (viewMode === 'week') {
        chart.data.labels = days.map((_, i) => days[(todayIndex - 6 + i + 7) % 7]);
        chart.data.datasets[0].data = weeks[currentWeekIndex];
    } else {
        chart.data.labels = Array.from({ length: daysInMonth }, (_, i) => ((currentDayOfMonth - (daysInMonth - 1) + i + daysInMonth) % 30 + 1).toString());
        chart.data.datasets[0].data = months[currentMonthIndex];
    }

    chart.update();
    updateDots();

    setTimeout(() => {
        isAnimating = false;
        chart.options.animation = { duration: 0 };
    }, 300);
}

// **Swipen für Wochen/Monate**
let startX = 0;
document.querySelector('.graph-container').addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

document.querySelector('.graph-container').addEventListener('touchend', (event) => {
    if (isAnimating) return;

    const endX = event.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            if (viewMode === 'week' && currentWeekIndex < weeks.length - 1) currentWeekIndex++;
            if (viewMode === 'month' && currentMonthIndex < months.length - 1) currentMonthIndex++;
        } else {
            if (viewMode === 'week' && currentWeekIndex > 0) currentWeekIndex--;
            if (viewMode === 'month' && currentMonthIndex > 0) currentMonthIndex--;
        }

        updateChart();
    }
});

// Initialize the chart data and view after fetching XP history
syncXpHistoryFromServiceWorker();