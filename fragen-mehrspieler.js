document.addEventListener('DOMContentLoaded', function() {
    const players = JSON.parse(localStorage.getItem('players')) || [];
    const selectedCategories = JSON.parse(localStorage.getItem('selectedCategories')) || [];
    const totalQuestionsPerPlayer = players[0].questionCount; // Alle Spieler haben die gleiche Anzahl von Fragen
    const totalQuestions = totalQuestionsPerPlayer * players.length;

    // Speichern der Gesamtzahl der Fragen in localStorage
    localStorage.setItem('totalQuestions', totalQuestions);

    let currentPlayerIndex = 0;
    let questionsAsked = localStorage.getItem('questionsAsked') ? parseInt(localStorage.getItem('questionsAsked')) : 0;
    let currentQuestionIndex = 0;
    let correctCount = 0;

    console.log('Players:', players);
    console.log('Selected Categories:', selectedCategories);
    console.log('Total Questions Per Player:', totalQuestionsPerPlayer);
    console.log('Total Questions:', totalQuestions);

    // Initialisiere die Anzahl der beantworteten Fragen und Punkte für jeden Spieler
    players.forEach(player => {
        if (player.questionsAnswered === undefined) player.questionsAnswered = 0;
        if (player.points === undefined) player.points = 0;
    });

    function getNextPlayer() {
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        console.log('Current Player Index:', currentPlayerIndex);
        return players[currentPlayerIndex];
    }

    function getFilteredQuestions(player) {
        let filteredQuestions = questions.filter(q => selectedCategories.includes(q.Kategorie) && q.Schwierigkeitsgrad.toLowerCase() === player.difficulty.toLowerCase());

        // Falls die Kategorie "Alles" ausgewählt ist, alle Fragen gemäß der Schwierigkeitsstufe des Spielers einbeziehen
        if (selectedCategories.includes('Alles')) {
            filteredQuestions = questions.filter(q => q.Schwierigkeitsgrad.toLowerCase() === player.difficulty.toLowerCase());
        }

        console.log('Filtered Questions for', player.name, ':', filteredQuestions);
        return filteredQuestions;
    }

    function updateCurrentPlayerDisplay(player) {
        const currentPlayerElement = document.querySelector('.current-player');
        if (currentPlayerElement) {
            currentPlayerElement.textContent = player.name;
        }
    }

    function updateQuestionStatusDisplay(player) {
        const questionStatusElement = document.querySelector('.question-status');
        if (questionStatusElement) {
            questionStatusElement.textContent = `${player.questionsAnswered + 1}/${totalQuestionsPerPlayer}`;
        }
    }

    function loadQuestion() {
        console.log('Questions Asked:', questionsAsked, 'Total Questions:', totalQuestions);
        if (questionsAsked >= totalQuestions) {
            localStorage.setItem('correctCount', correctCount);
            console.log('Redirecting to endranking-mehrspieler.html');
            questionsAsked = 0;
            localStorage.setItem('questionsAsked', questionsAsked);
            window.location.href = 'endranking-mehrspieler.html';
            return;
        }

        const currentPlayer = players[currentPlayerIndex];
        updateCurrentPlayerDisplay(currentPlayer);
        updateQuestionStatusDisplay(currentPlayer);
        const filteredQuestions = getFilteredQuestions(currentPlayer);

        if (filteredQuestions.length === 0) {
            alert('Keine Fragen für die ausgewählte Kategorie oder Schwierigkeit gefunden.');
            window.location.href = 'kategorien-mehrspieler.html';
            return;
        }

        const randomQuestion = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
        document.querySelector('.question').textContent = randomQuestion.Frage;
        document.querySelector('.category-text').textContent = randomQuestion.Kategorie; // Zeigt die tatsächliche Kategorie der Frage an
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
                    correctCount++;
                    currentPlayer.points++; // Punkte erhöhen
                } else {
                    this.classList.add('wrong-answer');
                    document.querySelector('.results').classList.add('wrong');
                    document.querySelector('.next-button').classList.add('wrong-button');
                }

                answers.forEach(btn => {
                    if (btn.textContent === randomQuestion.RichtigeAntwort) {
                        btn.classList.add('correct-answer');
                    }
                });

                document.querySelector('.results').style.display = 'block';
                currentPlayer.questionsAnswered++;
                currentQuestionIndex++;
                questionsAsked++;
                localStorage.setItem('questionsAsked', questionsAsked); // Speichere den aktuellen Stand
                updateProgressBar();
            }, { once: true });
        });

        function updateProgressBar() {
            const percentage = (currentQuestionIndex / totalQuestions) * 100;
            const progressBar = document.querySelector('.progress');
            if (progressBar) {
                progressBar.style.width = `${percentage}%`;
            }
        }

        function setDifficultyBlocks(difficulty) {
            const difficultyContainer = document.querySelector('.difficulty');
            difficultyContainer.innerHTML = '';

            let difficultyLevel;
            switch (difficulty.toLowerCase()) {
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
                default:
                    difficultyLevel = 0;
            }

            for (let i = 0; i < difficultyLevel; i++) {
                const block = document.createElement('div');
                block.classList.add('difficulty-block', difficulty.toLowerCase());
                difficultyContainer.appendChild(block);
            }
        }
    }

    document.querySelector('.next-button').addEventListener('click', function() {
        console.log('Next Button Clicked - Questions Asked:', questionsAsked, 'Total Questions:', totalQuestions);
        if (questionsAsked >= totalQuestions) {
            console.log('Redirecting to endranking-mehrspieler.html');
            questionsAsked = 0;
            localStorage.setItem('questionsAsked', questionsAsked);
            window.location.href = 'endranking-mehrspieler.html';
        } else if ((currentPlayerIndex + 1) % players.length === 0 && questionsAsked < totalQuestions) {
            localStorage.setItem('players', JSON.stringify(players));
            console.log('Redirecting to ranking-mehrspieler.html');
            window.location.href = 'ranking-mehrspieler.html';
        } else {
            getNextPlayer();
            loadQuestion();
        }
    });

    loadQuestion();
});