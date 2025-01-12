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
        let answers = document.querySelectorAll('.answer');
        answers.forEach((button, index) => {
            button.textContent = randomQuestion.Antworten[index];
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
            contentDiv.style.display = 'none';
            contentDiv.dataset.activeContent = '';
            topBar.classList.remove('expanded');
        } else {
            contentDiv.innerHTML = getContent(contentId);
            contentDiv.style.display = 'block';
            contentDiv.dataset.activeContent = contentId;
            topBar.classList.add('expanded');
        }
    }

    function getContent(contentId) {
        if (contentId === 'streak-content') {
            return generateWeekCalendar();
        }
        switch (contentId) {
            case 'coins-content':
                return '<p>Coins Details: Verdiene Münzen durch Quiz!</p>';
            case 'xp-content':
                return '<p>XP Details: Sammle Erfahrungspunkte!</p>';
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
        startOfWeek.setDate(today.getDate() - currentDay + 1); // Start bei Montag

        console.log("Aktuelles Datum:", today);

        let streakData = JSON.parse(localStorage.getItem('streakData')) || [0, 0, 1, 1, 1, 0, 1];
        if (streakData.length < 7) {
            streakData = Array(7).fill(0);
        }

        let calendarHTML = '<div class="week-calendar">';

        calendarHTML += '<p>Streak Übersicht</p>';
        calendarHTML += '<div class="days">';

        weekDays.forEach(day => {
            calendarHTML += `<div class="day">${day}</div>`;
        });
        calendarHTML += '</div>';

        calendarHTML += '<div class="day-row">';
        for (let i = 0; i < 7; i++) {
            const date = new Date(startOfWeek);
            date.setDate(startOfWeek.getDate() + i);
            const isActive = streakData[i] === 1;
            const isCurrent = today.toDateString() === date.toDateString();
            console.log(`Tag: ${date.toDateString()}, ist aktuell: ${isCurrent}`);
            calendarHTML += `<div class="day">
                <div class="${isCurrent ? 'current-day' : ''} ${isActive ? 'active' : 'inactive'}">${date.getDate()}</div>
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