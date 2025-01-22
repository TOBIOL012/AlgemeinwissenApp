document.addEventListener('DOMContentLoaded', function() {
    const factDisplay = document.querySelector('.fact');
    const categoryImages = document.querySelectorAll('img[data-category]');
    const continueButton = document.getElementById('next-button');
    const wrapper = document.querySelector('.results');
    const correctAnswerDisplay = document.querySelector('.correct-answer');
    let selectedCategories = JSON.parse(localStorage.getItem('selectedCategories')) || [];

    function updateCoinText() {
        const coinTextElements = document.querySelectorAll('.coin-text');
        const totalCoins = parseInt(localStorage.getItem('totalCoins') || '0', 10);

        coinTextElements.forEach(element => {
            element.textContent = totalCoins;
        });
    }

    function updateXPText() {
        const xpElement = document.getElementById('xp-total');
        const totalXP = parseInt(localStorage.getItem('totalXP') || '0', 10);
        if (xpElement) {
            xpElement.textContent = totalXP;
        }
    }

    function updateStreakText() {
        const streakElement = document.querySelector('.Streak span');
        const streakCount = parseInt(localStorage.getItem('streakCount') || '0', 10);
        if (streakElement) {
            streakElement.textContent = streakCount;
        }
    }

    if (window.location.pathname.endsWith('profil.html')) {
        updateCoinText();
        updateXPText();
        updateStreakText();
    }

    function updateContinueButtonState() {
        if (continueButton) {
            continueButton.style.backgroundColor = selectedCategories.length === 0 ? 'gray' : '#f1730c';
            continueButton.style.boxShadow = selectedCategories.length === 0 ? '0px 6px 0px 0px rgb(38, 46, 49)' : '0px 6px 0px 0px rgb(146, 65, 7)';
            continueButton.disabled = selectedCategories.length === 0;
        } 
    }

    updateContinueButtonState();

    categoryImages.forEach(img => {
        const category = img.getAttribute('data-category');
        img.style.opacity = selectedCategories.includes(category) ? 1.0 : 0.5;

        img.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            if (category === 'Alles') {
                if (selectedCategories.includes('Alles')) {
                    selectedCategories.length = 0;
                    categoryImages.forEach(img => img.style.opacity = 0.5);
                } else {
                    selectedCategories.length = 0;
                    categoryImages.forEach(img => {
                        selectedCategories.push(img.getAttribute('data-category'));
                        img.style.opacity = 1.0;
                    });
                }
            } else {
                if (selectedCategories.includes(category)) {
                    selectedCategories.splice(selectedCategories.indexOf(category), 1);
                    this.style.opacity = 0.5;
                } else {
                    selectedCategories.push(category);
                    this.style.opacity = 1.0;
                }
                if (selectedCategories.includes('Alles')) {
                    selectedCategories.splice(selectedCategories.indexOf('Alles'), 1);
                    categoryImages.forEach(img => {
                        if (img.getAttribute('data-category') === 'Alles') {
                            img.style.opacity = 0.5;
                        }
                    });
                }
            }
            localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
            updateContinueButtonState();
        });
    });

    if (continueButton) {
        continueButton.addEventListener('click', function() {
            if (selectedCategories.length > 0) {
                localStorage.removeItem('questionsAsked');
                localStorage.removeItem('correctCount');
                window.location.href = 'schwierigkeiten.html';
            }
        });
    }

    const difficultyButtons = document.querySelectorAll('.difficulty-button1, .difficulty-button2, .difficulty-button3, .difficulty-button4, .difficulty-button5');

    difficultyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedDifficulty = this.getAttribute('data-difficulty');
            localStorage.setItem('selectedDifficulty', selectedDifficulty === 'alle' ? 'selectedDifficulty' : selectedDifficulty);

            if (['schwer', 'extrem', 'expert'].includes(selectedDifficulty)) {
                window.location.href = 'index2.html';
            } else {
                window.location.href = 'index.html';
            }
        });
    });

    let currentQuestionIndex = 0;
    let correctCount = 0;
    let askedQuestions = [];
    const totalQuestions = 15;

    function getRandomQuestion() {
        const selectedCategories = JSON.parse(localStorage.getItem('selectedCategories') || '[]');
        const selectedDifficulty = localStorage.getItem('selectedDifficulty');
        let filteredQuestions = questions;

        if (selectedCategories.length > 0 && !selectedCategories.includes('Alles')) {
            filteredQuestions = filteredQuestions.filter(q => selectedCategories.includes(q.Kategorie));
        }

        if (selectedDifficulty && selectedDifficulty !== 'alle') {
            let expertQuestions = filteredQuestions.filter(q => q.Schwierigkeitsgrad === 'expert');
            let extremQuestions = filteredQuestions.filter(q => q.Schwierigkeitsgrad === 'extrem');
            let schwerQuestions = filteredQuestions.filter(q => q.Schwierigkeitsgrad === 'schwer');
            let mittelQuestions = filteredQuestions.filter(q => q.Schwierigkeitsgrad === 'mittel');
            let leichtQuestions = filteredQuestions.filter(q => q.Schwierigkeitsgrad === 'leicht');

            let questionsPool = [];

            if (selectedDifficulty === 'expert') {
                questionsPool = [
                    ...expertQuestions,
                    ...extremQuestions.slice(0, Math.floor(extremQuestions.length * 0.3)),
                    ...schwerQuestions.slice(0, Math.floor(extremQuestions.length * 0.1))
                ];
            } else if (selectedDifficulty === 'extrem') {
                questionsPool = [
                    ...extremQuestions,
                    ...schwerQuestions.slice(0, Math.floor(extremQuestions.length * 0.3))
                ];
            } else if (selectedDifficulty === 'schwer') {
                questionsPool = [
                    ...schwerQuestions,
                    ...mittelQuestions.slice(0, Math.floor(schwerQuestions.length * 0.4))
                ];
            } else if (selectedDifficulty === 'mittel') {
                questionsPool = [
                    ...mittelQuestions,
                    ...schwerQuestions.slice(0, Math.floor(mittelQuestions.length * 0.4))
                ];
            } else {
                questionsPool = filteredQuestions.filter(q => q.Schwierigkeitsgrad === selectedDifficulty);
            }

            if (questionsPool.length > 0) {
                filteredQuestions = questionsPool;
            }
        }

        if (filteredQuestions.length === 0) {
            return null;
        }

        filteredQuestions = filteredQuestions.filter(q => !askedQuestions.includes(q.Frage));

        if (filteredQuestions.length === 0) {
            return null;
        }

        const question = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
        askedQuestions.push(question.Frage);
        return question;
    }

    function setDifficultyBlocks(difficulty) {
        const difficultyContainer = document.querySelector('.difficulty');
        difficultyContainer.innerHTML = '';

        let difficultyLevel;
        switch (difficulty) {
            case 'leicht':
                difficultyLevel = 1;
                break;
            case 'mittel':
                difficultyLevel = 2;
                break;
            case 'schwer':
                difficultyLevel = 3;
                break;
            case 'extrem':
                difficultyLevel = 4;
                break;
            case 'expert':
                difficultyLevel = 5;
                break;
            default:
                difficultyLevel = 0;
        }

        for (let i = 0; i < difficultyLevel; i++) {
            const block = document.createElement('div');
            block.classList.add('difficulty-block', difficulty);
            difficultyContainer.appendChild(block);
        }
    }

    function updateProgressBar() {
        const percentage = (currentQuestionIndex / totalQuestions) * 100;
        const progressBar = document.querySelector('.progress');
        if (progressBar) {
            progressBar.style.width = `${percentage}%`;
        }
    }

    function updateCategoryDisplay(category) {
        const categoryTextElement = document.querySelector('.category-text');
        if (categoryTextElement) {
            categoryTextElement.textContent = category;
        }
    }

    function saveIncorrectQuestion(question) {
        let incorrectQuestions = JSON.parse(localStorage.getItem('incorrectQuestions')) || [];
        
        // Überprüfen, ob die Frage bereits gespeichert ist, um Duplikate zu vermeiden
        const exists = incorrectQuestions.some(q => q.Frage === question.Frage);
        if (!exists) {
            incorrectQuestions.push({
                Frage: question.Frage,
                RichtigeAntwort: question.RichtigeAntwort,
                Antworten: question.Antworten,
                Kategorie: question.Kategorie,
                Schwierigkeitsgrad: question.Schwierigkeitsgrad,
                Fakt: question.Fakt
            });
            localStorage.setItem('incorrectQuestions', JSON.stringify(incorrectQuestions));
        }
        console.log(incorrectQuestions);
    }

    function loadQuestion() {
        if (currentQuestionIndex >= totalQuestions) {
            localStorage.setItem('correctCount', correctCount);
            window.location.href = 'belohnung.html';
            return;
        }
    
        const randomQuestion = getRandomQuestion();
        if (!randomQuestion) {
            alert('Keine Fragen für die ausgewählte Kategorie oder Schwierigkeit gefunden.');
            window.location.href = 'kategorien.html';
            return;
        }
    
        console.log('Random Question:', randomQuestion);
    
        if (!randomQuestion.Antworten || randomQuestion.Antworten.length < 4) {
            console.error('Antworten fehlen oder sind unvollständig:', randomQuestion);
            return;
        }
    
        document.querySelector('.question').textContent = randomQuestion.Frage;
        updateCategoryDisplay(randomQuestion.Kategorie);
        setDifficultyBlocks(randomQuestion.Schwierigkeitsgrad);
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        const shuffledAnswers = shuffleArray([...randomQuestion.Antworten]);

        let answers = document.querySelectorAll('.answer');
        answers.forEach((button, index) => {
            button.textContent = shuffledAnswers[index];
            button.disabled = false;
            button.classList.remove('correct-answer', 'wrong-answer');
        });
        document.querySelector('.results').style.display = 'none';
        document.querySelector('.results').classList.remove('correct', 'wrong');
        document.querySelector('.next-button').classList.remove('correct-button', 'wrong-button');
    
        let questionAnswered = false;
    
        answers.forEach(button => {
            button.addEventListener('click', function() {
                if (questionAnswered) {
                    return;
                }
                questionAnswered = true;
    
                answers.forEach(btn => btn.disabled = true);
    
                if (this.textContent === randomQuestion.RichtigeAntwort) {
                    this.classList.add('correct-answer');
                    document.querySelector('.results').classList.add('correct');
                    document.querySelector('.next-button').classList.add('correct-button');
                    factDisplay.textContent = randomQuestion.Fakt;
                    wrapper.classList.add('correct');
                    factDisplay.style.display = 'block';
                    correctCount++;
                } else {
                    this.classList.add('wrong-answer');
                    factDisplay.style.display = 'block';
                    factDisplay.textContent = randomQuestion.Fakt;
                    document.querySelector('.results').classList.add('wrong');
                    document.querySelector('.next-button').classList.add('wrong-button');
                    saveIncorrectQuestion(randomQuestion);
                }
    
                answers.forEach(btn => {
                    if (btn.textContent === randomQuestion.RichtigeAntwort) {
                        btn.classList.add('correct-answer');
                    }
                });
    
                document.querySelector('.results').style.display = 'block';
                currentQuestionIndex++;
                updateProgressBar();
            }, { once: true });
        });
    }
    
    document.querySelector('.next-button').addEventListener('click', loadQuestion);

    loadQuestion();

});
















function toggleContent(contentId) {
    const topBar = document.getElementById('top-bar');
    const contentDiv = document.getElementById('top-bar-content');

    if (contentDiv.dataset.activeContent === contentId) {
        // Verstecke den Inhalt und entferne die Klasse "expanded"
        contentDiv.style.display = 'none';
        contentDiv.dataset.activeContent = '';
        topBar.classList.remove('expanded');
    } else {
        // Zeige den Inhalt und füge die Klasse "expanded" hinzu
        contentDiv.innerHTML = getContent(contentId);
        contentDiv.style.display = 'block';
        contentDiv.dataset.activeContent = contentId;
        topBar.classList.add('expanded');
    }
}



function getContent(contentId) {
    if (contentId === 'streak-content') {
        return `
            <div class="streak-header">
                <p>Streak Übersicht</p>
                <button class="streak-button" onclick="location.href='calendar.html'">
                    <img src="streak-icon.png" alt="Details" class="streak-icon">
                </button>
            </div>
            ${generateWeekCalendar()}
        `;
    }
    if (contentId === 'xp-content') {
        return `
            <div class="XP-Pfad-Container">
                <a href="xp-pfad.html" class="xp-pfad-button">XP-Pfad ></a>
            </div>
        `;
    }
    switch (contentId) {
        case 'coins-content':
            return '<p>Coins Details: Verdiene Münzen durch Quiz!</p>';
        case 'notifications-content':
            return '<p>Benachrichtigungen: Neuigkeiten und Updates!</p>';
        default:
            return '';
    }
}


function generateWeekCalendar() {
    const weekDays = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
    const today = new Date();
    const currentDay = today.getDay(); // 0 = Sonntag, 1 = Montag, ...

    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - ((today.getDay() + 6) % 7)); // Start bei Montag

    let calendarHTML = '<div class="week-calendar">';
    calendarHTML += '<div class="days">';
    weekDays.forEach(day => {
        calendarHTML += `<div class="day">${day}</div>`;
    });
    calendarHTML += '</div>';

    calendarHTML += '<div class="day-row">';
    for (let i = 0; i < 7; i++) {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
    
        const isCurrent = today.toDateString() === date.toDateString(); // Vergleich aktueller Tag
        const formattedDate = date.toISOString().split("T")[0];

        calendarHTML += `<div class="day">
            <div data-date="${formattedDate}" class="${isCurrent ? 'current-day' : ''}">${date.getDate()}</div>
        </div>`;
    }
    
    calendarHTML += '</div>';
    calendarHTML += '</div>';

    return calendarHTML;
}



document.addEventListener('click', function (event) {
    const topBar = document.getElementById('top-bar');
    const contentDiv = document.getElementById('top-bar-content');
    if (!topBar.contains(event.target)) {
        contentDiv.style.display = 'none';
        contentDiv.dataset.activeContent = '';
        topBar.classList.remove('expanded');
    }
});


function highlightStreakDays() {
    auth.onAuthStateChanged((user) => {
        if (user) {
            const uid = user.uid;
            firestore.collection("users").doc(uid).get().then((doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    const streakHistory = data.streakHistory || [];
                    
                    const today = new Date();
                    const startOfWeek = new Date(today);
                    startOfWeek.setDate(today.getDate() - ((today.getDay() + 6) % 7)); // Montag der aktuellen Woche

                    const days = document.querySelectorAll('.day-row .day div');
                    
                    days.forEach((day, index) => {
                        const date = new Date(startOfWeek);
                        date.setDate(startOfWeek.getDate() + index);
                        const formattedDate = date.toISOString().split("T")[0];

                        if (streakHistory.includes(formattedDate)) {
                            day.classList.add('streak-day'); // Streak-Tag markieren
                        }
                    });
                } else {
                    console.error("Benutzerdokument nicht gefunden.");
                }
            }).catch((error) => {
                console.error("Fehler beim Abrufen des Benutzerdokuments:", error);
            });
        } else {
            console.error("Benutzer nicht eingeloggt.");
        }
    });
}

// Diese Funktion nach dem Rendern des Kalenders aufrufen
document.addEventListener('DOMContentLoaded', function () {
    highlightStreakDays();
});

















document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.getElementById('progress-bar');
    const indicator = document.getElementById('indicator');
    const xpBox = document.getElementById('xp-box');

    const firestore = firebase.firestore();
    const uid = localStorage.getItem('uid');
    const maxXP = 10000; // Maximale XP
    const stepXP = 500; // XP-Schrittgröße für Marker und Rewards

    // Funktion für die Number Counter Animation
    function animateCounter(element, start, end, duration) {
        const range = end - start;
        const increment = range / (duration / 16); // Schrittweite pro Frame (16ms bei ~60fps)
        let current = start;

        const updateCounter = () => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                current = end;
            }
            element.textContent = Math.floor(current); // XP-Wert anzeigen
            if (current !== end) {
                requestAnimationFrame(updateCounter);
            }
        };
        updateCounter();
    }

    // Striche und Zahlen in die Progress-Bar einfügen
    function addMarkers() {
        for (let xp = 500; xp <= maxXP; xp += stepXP) {
            const positionPercent = (xp / maxXP) * 100; // Position basierend auf Prozent

            // Strich erstellen
            const marker = document.createElement('div');
            marker.classList.add('marker');
            marker.style.top = `${positionPercent}%`;

            // Zahl erstellen
            const label = document.createElement('div');
            label.classList.add('marker-label');
            label.style.top = `${positionPercent}%`;
            label.textContent = xp; // XP-Wert als Text

            // Beide in die Progress-Bar einfügen
            progressBar.appendChild(marker);
            progressBar.appendChild(label);
        }
    }

    // Rewards dynamisch zur Progress-Bar hinzufügen
    function addRewards() {
        for (let xp = 500; xp <= maxXP; xp += stepXP) {
            const positionPercent = (xp / maxXP) * 100; // Position basierend auf Prozent

            // Reward erstellen
            const reward = document.createElement('div');
            reward.classList.add('reward');
            reward.style.top = `${positionPercent}%`; // Setze Position entsprechend XP
            reward.textContent = `🎁`; // Symbol oder Text für die Belohnung

            // Reward zur Progress-Bar hinzufügen
            progressBar.appendChild(reward);
        }
    }

    // Fortschrittsanzeige aktualisieren
    function updateProgressBar(xp) {
        const progressHeight = Math.min((xp / maxXP) * 100, 100); // Höhe als Prozentsatz

        // Indicator-Animation
        indicator.style.height = `${progressHeight}%`;

        // XP-Box-Position synchronisieren
        xpBox.style.top = `${progressHeight}%`;

        // Number Counter Animation starten
        const currentXP = parseInt(xpBox.textContent) || 0; // Aktueller XP-Wert (start)
        animateCounter(xpBox, currentXP, xp, 2000); // 2000ms = 2s Dauer der Animation
    }

    // Marker und Rewards hinzufügen
    addMarkers(); // Markierungen hinzufügen
    addRewards(); // Rewards hinzufügen

    // XP aus Firestore abrufen und aktualisieren
    if (uid) {
        firestore.collection('users').doc(uid).onSnapshot(
            (doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    const totalXP = data.xp || 0;
                    updateProgressBar(totalXP); // Fortschrittsanzeige aktualisieren
                } else {
                    console.error('Benutzerdaten nicht gefunden.');
                }
            },
            (error) => {
                console.error('Fehler beim Abrufen der XP-Daten:', error);
            }
        );
    } else {
        console.error('Keine Benutzer-UID gefunden.');
    }
});










function addMarkers() {
    const stepXP = 500; // XP-Schrittgröße für Marker
    const maxXP = 10000; // Maximale XP
    const progressBar = document.getElementById('progress-bar');

    for (let xp = 500; xp <= maxXP; xp += stepXP) { // Schleife startet bei 500 XP
        const positionPercent = (xp / maxXP) * 100; // Position in Prozent berechnen

        // Strich erstellen
        const marker = document.createElement('div');
        marker.classList.add('marker');
        marker.style.top = `${positionPercent}%`;

        // Label erstellen
        const label = document.createElement('div');
        label.classList.add('marker-label');
        label.style.top = `${positionPercent}%`;
        label.textContent = xp; // XP-Wert als Text

        // Marker und Label zur Progress-Bar hinzufügen
        progressBar.appendChild(marker);
        progressBar.appendChild(label);
    }
}




function addRewards() {
    const stepXP = 500; // XP-Schrittgröße für Rewards
    const maxXP = 10000; // Maximale XP
    const progressBar = document.getElementById('progress-bar');

    for (let xp = 500; xp <= maxXP; xp += stepXP) { // Beginne bei 500 XP
        const positionPercent = (xp / maxXP) * 100; // Position basierend auf Prozent

        // Reward erstellen
        const reward = document.createElement('div');
        reward.classList.add('reward');
        reward.style.top = `${positionPercent}%`; // Setze Position entsprechend XP
        reward.textContent = `🎁`; // Symbol oder Text für die Belohnung

        // Reward zur Progress-Bar hinzufügen
        progressBar.appendChild(reward);
    }
}







function animateCounter(element, start, end, duration) {
    const range = end - start; // Differenz zwischen Start- und Endwert
    const increment = range / (duration / 16); // Schrittweite pro Frame (16ms bei ~60fps)
    let current = start;
    const updateCounter = () => {
        current += increment;
        if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
            current = end; // Zahl darf den Endwert nicht überschreiten
        }
        element.textContent = Math.floor(current); // Aktuelle Zahl aktualisieren
        if (current !== end) {
            requestAnimationFrame(updateCounter); // Nächster Frame
        }
    };
    updateCounter();
}







