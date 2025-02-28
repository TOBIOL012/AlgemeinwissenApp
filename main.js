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
            window.location.href = 'Kategorien.html';
            return;
        }
    
        console.log('Random Question:', randomQuestion);
    
        if (!randomQuestion.Antworten || randomQuestion.Antworten.length < 4) {
            console.error('Antworten fehlen oder sind unvollständig:', randomQuestion);
            return;
        }
    
        if (document.querySelector('.question')) {
            document.querySelector('.question').textContent = randomQuestion.Frage;
        }
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
                const isMatch = this.textContent === randomQuestion.RichtigeAntwort;
                updateStats(randomQuestion, isMatch);
    
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

        function updateStats(question, isMatch) {
            let questionText = question.Frage;
            let questionCategory = question.Kategorie;
            let questionSchwierigkeit = question.Schwierigkeitsgrad;
        
            let answeredQuestions = JSON.parse(localStorage.getItem('answeredQuestions')) || [];
            let correctAnswers = JSON.parse(localStorage.getItem('correctAnswers')) || [];
        
            // Allgemeine Statistiken
            if (!answeredQuestions.includes(questionText)) {
                answeredQuestions.push(questionText);
                localStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestions));
            }
            if (isMatch && !correctAnswers.includes(questionText)) {
                correctAnswers.push(questionText);
                localStorage.setItem('correctAnswers', JSON.stringify(correctAnswers));
            }
        
            const categories = ['Geschichte', 'Geographie', 'Musik', 'Wissenschaft', 'Kunst', 'Sport'];
            const difficulties = ['leicht', 'mittel', 'schwer', 'extrem', 'expert'];
        
            // Kategoriespezifische und Schwierigkeitsgradspezifische Statistiken
            updateCategoryAndDifficultyStats(categories, 'Category', questionCategory, questionText, isMatch);
            updateCategoryAndDifficultyStats(difficulties, 'Difficulty', questionSchwierigkeit, questionText, isMatch);
        
            // Ausgabe der allgemeinen Statistik
            console.log(`Beantwortete Fragen: ${answeredQuestions.length}`);
            console.log(`Richtige Antworten: ${correctAnswers.length}`);
        }
        
        function updateCategoryAndDifficultyStats(arr, type, questionAttribute, questionText, isMatch) {
            arr.forEach(item => {
                if (questionAttribute === item) {
                    let answered = JSON.parse(localStorage.getItem(item + type + 'Answered')) || [];
                    let correct = JSON.parse(localStorage.getItem(item + type + 'Correct')) || [];
        
                    if (!answered.includes(questionText)) {
                        answered.push(questionText);
                        localStorage.setItem(item + type + 'Answered', JSON.stringify(answered));
                    }
                    if (isMatch && !correct.includes(questionText)) {
                        correct.push(questionText);
                        localStorage.setItem(item + type + 'Correct', JSON.stringify(correct));
                    }
        
                    console.log(`Beantwortete Fragen in ${item} (${type}): ${answered.length}`);
                    console.log(`Richtige Antworten in ${item} (${type}): ${correct.length}`);
                }
            });
        }
    }
    
    if (document.querySelector('.next-button')) {
        document.querySelector('.next-button').addEventListener('click', loadQuestion);
    }

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
            <div class="streak-all" onclick="window.location.href='calendar.html'">
            <div class="streak-header">
                <p>Streak Übersicht</p>
                <button class="streak-button">
                    <img src="streak-icon.png" alt="Details" class="streak-icon">
                </button>
            </div>
            ${generateWeekCalendar()}
            </div>
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






document.addEventListener('click', function (event) {
    const topBar = document.getElementById('top-bar');
    const contentDiv = document.getElementById('top-bar-content');

    if (topBar && contentDiv && !topBar.contains(event.target)) {
        contentDiv.style.display = 'none';
        contentDiv.dataset.activeContent = '';
        topBar.classList.remove('expanded');
    }
});



















document.addEventListener('DOMContentLoaded', function () {
    const progressBar = document.getElementById('progress-bar');
    const indicator = document.getElementById('indicator');
    const xpBox = document.getElementById('xp-box');
    

    const firestore = firebase.firestore();
    const uid = localStorage.getItem('uid');
    const maxXP = 10000;
    const stepXP = 500;
    const rewardLevels = Array.from({ length: 21 }, (_, i) => i * 500); // XP-Stufen von 0 bis 10.000

    // **Exakte Orange-Farbe festlegen**
    const orangeColor = "#E48D45"; // Falls eine andere Farbe besser passt, kannst du sie mir sagen

    // **Marker für XP-Werte hinzufügen**
    function addMarkers() {
        rewardLevels.forEach(xpValue => {
            if (xpValue === 0) return;

            const positionPercent = (xpValue / maxXP) * 100;

            // **Marker-Strich erstellen**
            const marker = document.createElement('div');
            marker.classList.add('marker');
            marker.style.position = "absolute";
            marker.style.left = "0";
            marker.style.width = "15px";
            marker.style.height = "4px";
            marker.style.backgroundColor = "#2F4957";
            marker.style.top = `${positionPercent}%`;

            // **XP-Wert als Label**
            const label = document.createElement('div');
            label.classList.add('marker-label');
            label.style.position = "absolute";
            label.style.color = "#2F4957";
            label.style.fontSize = "1rem";
            label.style.left = "25px"; // **Mehr Abstand von der Bar**
            label.style.top = `${positionPercent}%`;
            label.textContent = xpValue;

            progressBar.appendChild(marker);
            progressBar.appendChild(label);
        });
    }

    // **Rewards hinzufügen**
    function addRewards() {
        rewardLevels.forEach(xpValue => {
            if (xpValue === 0) return;
            const positionPercent = (xpValue / maxXP) * 100;

            const reward = document.createElement('div');
            reward.classList.add('reward');
            reward.style.top = `${positionPercent}%`;
            reward.dataset.xp = xpValue;
            reward.textContent = "GE";

            progressBar.appendChild(reward);
        });
    }

    if (window.location.pathname.includes("xp-pfad.html")) {
        let xplast = localStorage.getItem('xplast') || "0"; // Falls null, setze auf "0"
        console.log(xplast);
        indicator.style.height = `${Math.min((xplast / maxXP) * 100, 100)}%`;
        xpBox.style.top = `${Math.min((xplast / maxXP) * 100, 100)}%`;
    }

    // **XP-Fortschritt aktualisieren & Rewards färben**
    function updateProgressBar(xp) {
        const progressHeight = Math.min((xp / maxXP) * 100, 100);
        let xplast = parseFloat(localStorage.getItem('xplast')) || 0;  // Falls null, setze auf "0"

        indicator.style.height = `${progressHeight}%`;
        console.log("uwuwuwneger");
        xpBox.style.top = `${progressHeight}%`;

        // **XP-Box Wert animieren**
        const currentXP = parseInt(xpBox.textContent) || 0;
        console.log(xplast);
        console.log(xp);
        if (xplast !== xp){
            console.log("was zum sigma");
            animateCounter(xpBox, xplast, xp, 2000);
            localStorage.setItem('xplast', xp);
        } else {
            xpBox.textContent = xp;
        }


        // **Rewards färben mit dem exakt gleichen Orange**
        document.querySelectorAll('.reward').forEach(reward => {
            const rewardXP = parseInt(reward.dataset.xp);
            if (xp >= rewardXP) {
                reward.style.backgroundColor = orangeColor;
            }
        });
    }

    // **XP-Box Animation**
    function animateCounter(element, start, end, duration) {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        console.log(increment);

        function updateCounter() {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                current = end;
            }
            element.textContent = Math.floor(current);
            if (current !== end) {
                requestAnimationFrame(updateCounter);
            }
        }
        updateCounter();
    }

    // **Initialisierung**
    addMarkers();
    addRewards();

    // **XP aus Firestore abrufen & Fortschritt updaten**
    if (uid) {
        navigator.serviceWorker.controller.postMessage({ type: "initUserData", uid });

        navigator.serviceWorker.addEventListener("message", (event) => {
            if (event.data.type === "userDataUpdated") {
                const data = event.data.data;
                const totalXP = data.xp || 0;
                localStorage.setItem("lastXp", totalXP);
                updateProgressBar(totalXP);
            }
        });
    } else {
        console.error("Keine Benutzer-UID gefunden.");
    }
});







