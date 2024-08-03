document.addEventListener('DOMContentLoaded', function() {
    const totalQuestions = 20;
    let currentQuestionIndex = 0;
    let correctCount = 0;
    let askedQuestions = [];
    let clickCount = 0;

    // Sprachaufnahme initialisieren
    let recognition;
    let isRecognizing = false;

    // Überprüfen, ob die Web Speech API unterstützt wird
    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
        recognition.continuous = false; // Kontinuierliche Erkennung deaktivieren
        recognition.interimResults = false; // Keine Zwischenergebnisse
        recognition.lang = 'de-DE'; // Sprache auf Deutsch setzen

        recognition.onstart = function() {
            isRecognizing = true;
        };

        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            const inputField = document.querySelector('.text-input');
            inputField.value = transcript.replace(/\.$/, ''); // Entfernt den Punkt am Ende
            inputField.dispatchEvent(new Event('input')); // Trigger Input Event für die Weiterverarbeitung
        };

        recognition.onerror = function(event) {
            console.error('Speech recognition error:', event.error);
        };

        recognition.onend = function() {
            isRecognizing = false;
            document.querySelector('.mic-button').classList.remove('active'); // Visuelles Feedback entfernen
        };
    } else {
        console.warn('Web Speech API wird von diesem Browser nicht unterstützt.');
        document.querySelector('.mic-button').style.display = 'none'; // Mikrofon-Button verstecken
    }

    // Sprachaufnahme beim Drücken des Mikrofon-Buttons starten und stoppen
    const micButton = document.querySelector('.mic-button');

    micButton.addEventListener('mousedown', function() {
        if (recognition && !isRecognizing) {
            this.classList.add('active'); // Visuelles Feedback hinzufügen
            recognition.start();
        }
    });

    micButton.addEventListener('mouseup', function() {
        if (recognition && isRecognizing) {
            recognition.stop();
        }
    });

    micButton.addEventListener('mouseleave', function() {
        if (recognition && isRecognizing) {
            recognition.stop();
        }
    });

    function getRandomQuestion() {
        const selectedCategories = JSON.parse(localStorage.getItem('selectedCategories') || '[]');
        const selectedDifficulty = localStorage.getItem('selectedDifficulty');
        let filteredQuestions = questions;

        if (selectedCategories.length > 0 && !selectedCategories.includes('Alles')) {
            filteredQuestions = filteredQuestions.filter(q => selectedCategories.includes(q.Kategorie));
        }

        if (selectedDifficulty && selectedDifficulty !== 'alle') {
            let extremQuestions = filteredQuestions.filter(q => q.Schwierigkeitsgrad === 'extrem');
            let schwerQuestions = filteredQuestions.filter(q => q.Schwierigkeitsgrad === 'schwer');
            let mittelQuestions = filteredQuestions.filter(q => q.Schwierigkeitsgrad === 'mittel');
            let leichtQuestions = filteredQuestions.filter(q => q.Schwierigkeitsgrad === 'leicht');

            let questionsPool = [];

            if (selectedDifficulty === 'extrem') {
                questionsPool = [
                    ...extremQuestions,
                    ...mittelQuestions.slice(0, Math.floor(extremQuestions.length * 0.2)),
                    ...schwerQuestions.slice(0, Math.floor(extremQuestions.length * 0.1))
                ];
            } else if (selectedDifficulty === 'schwer') {
                questionsPool = [
                    ...schwerQuestions,
                    ...mittelQuestions.slice(0, Math.floor(schwerQuestions.length * 0.2)),
                    ...leichtQuestions.slice(0, Math.floor(schwerQuestions.length * 0.1))
                ];
            } else if (selectedDifficulty === 'mittel') {
                questionsPool = [
                    ...mittelQuestions,
                    ...leichtQuestions.slice(0, Math.floor(mittelQuestions.length * 0.3))
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

    function updateProgressBar() {
        const percentage = (currentQuestionIndex / totalQuestions) * 100;
        const progressBar = document.querySelector('.progress');
        if (progressBar) {
            progressBar.style.width = `${percentage}%`;

            const progressText = progressBar.querySelector('a');
            if (progressText) {
                progressText.textContent = `${percentage.toFixed(0)}%`;
            } else {
                console.warn('Das Fortschritts-Text-Element konnte nicht gefunden werden.');
            }
        } else {
            console.error('Das Fortschritts-Element konnte nicht gefunden werden.');
        }
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
            default:
                difficultyLevel = 0;
        }

        for (let i = 3; i > -1; i--) {
            const block = document.createElement('div');
            block.classList.add('difficulty-block');
            if (i < difficultyLevel) {
                block.classList.add('active');
                block.style.backgroundColor = getDifficultyColor(difficulty);
            }
            difficultyContainer.appendChild(block);
        }
    }

    function getDifficultyColor(difficulty) {
        switch (difficulty) {
            case 'leicht':
                return '#5EFC8D';
            case 'mittel':
                return '#E5E55E';
            case 'schwer':
                return '#E58A5E';
            case 'extrem':
                return '#E55E5E';
            default:
                return '#303031';
        }
    }

    function calculateLengthAdjustment(userAnswer, correctAnswer) {
        const lengthDifference = Math.abs(userAnswer.length - correctAnswer.length);
        const adjustmentFactor = 1 - (lengthDifference / (Math.max(userAnswer.length, correctAnswer.length) + 1));
        console.log(`Längendifferenz: ${lengthDifference}`);
        console.log(`Anpassungsfaktor: ${adjustmentFactor}`);
        return Math.max(0, adjustmentFactor); // Sicherstellen, dass der Faktor nicht negativ ist
    }

    function checkAnswer(userAnswer, correctAnswer) {
        const inputField = document.querySelector('.text-input');
        const micButton = document.querySelector('.mic-button');
        const correctAnswerDisplay = document.querySelector('.correct-answer');

        const options = {
            includeScore: true,
            threshold: 0.8,
        };

        const fuse = new Fuse([correctAnswer], options);
        const userAnswerWords = userAnswer.toLowerCase().split(/\s+/);
        const correctAnswerWords = correctAnswer.toLowerCase().split(/\s+/);

        let isMatch = false;

        // Helper function to check if a string is a number
        function isNumber(str) {
            return !isNaN(str) && !isNaN(parseFloat(str));
        }
        if (isNumber(correctAnswer)){
            if(userAnswer === correctAnswer){
                isMatch = true;
            } 
        } else {
        // Check if the entire text matches
        const lengthAdjustmentTotal = calculateLengthAdjustment(userAnswer, correctAnswer);
        const result = fuse.search(userAnswer);
        let fuzzyScore = result.length > 0 ? result[0].score : 1;
        fuzzyScore = 1 - fuzzyScore;
        const weightedScoreTotal = fuzzyScore * lengthAdjustmentTotal;
        console.log(`Gesamt - Längendifferenz: ${Math.abs(userAnswer.length - correctAnswer.length)}`);
        console.log(`Gesamt - Längenanpassung: ${lengthAdjustmentTotal}`);
        console.log(`Gesamt - Fuzzy-Score: ${fuzzyScore}`);
        console.log(`Gesamt - Gewichteter Score: ${weightedScoreTotal}`);

        if (weightedScoreTotal > 0.8) {
            isMatch = true;
        } else {
            // Check each word pair for a match
            for (let userWord of userAnswerWords) {
                if (userWord.length < 3) continue; // Skip comparison for very short words
                console.log(`Benutzerwort: ${userWord}`);

                for (let correctWord of correctAnswerWords) {
                    if (correctWord.length < 3) continue; // Skip comparison for very short words

                    if (userWord === correctWord) {
                        isMatch = true;
                        break;
                    }

                    const correctWordNumericMatch = correctWord.match(/(\d+)([a-zA-Z]*)/);
                    const userWordNumericMatch = userWord.match(/(\d+)([a-zA-Z]*)/);

                    if (correctWordNumericMatch && userWordNumericMatch) {
                        const correctWordNumericValue = parseInt(correctWordNumericMatch[1], 10);
                        const userWordNumericValue = parseInt(userWordNumericMatch[1], 10);

                        if (correctWordNumericValue === userWordNumericValue) {
                            const correctWordText = correctWordNumericMatch[2];
                            const userWordText = userWordNumericMatch[2];

                            if (correctWordText === userWordText) {
                                isMatch = true;
                                break;
                            } else {
                                continue;
                            }
                        } else {
                            continue;
                        }
                    } else {
                        continue;
                    }
                    const lengthAdjustment = calculateLengthAdjustment(userWord, correctWord);
                    console.log(`Wortvergleich - Längenanpassung: ${lengthAdjustment}`);

                    const wordFuse = new Fuse([correctWord], options);
                    const wordResult = wordFuse.search(userWord);
                    let fuzzyWordScore = wordResult.length > 0 ? wordResult[0].score : 1;
                    fuzzyWordScore = 1 - fuzzyWordScore;
                    console.log(`Wortvergleich - Fuzzy-Score: ${fuzzyWordScore}`);

                    const weightedWordScore = fuzzyWordScore * lengthAdjustment;
                    console.log(`Wortvergleich - Gewichteter Score: ${weightedWordScore}`);

                    if (weightedWordScore > 0.8) {
                        isMatch = true;
                        break;
                    }
                }
                if (isMatch) break;
            }
        } }

        if (isMatch) {
            correctCount++;
            console.log('Richtig! Aktuelle Anzahl der richtigen Antworten:', correctCount);

            inputField.classList.add('correct');
            micButton.classList.add('correct');
            correctAnswerDisplay.textContent = `${correctAnswer}`;
            correctAnswerDisplay.style.display = 'block';
        } else {
            console.log('Falsch! Die richtige Antwort wäre:', correctAnswer);
            correctAnswerDisplay.textContent = `Die richtige Antwort wäre: ${correctAnswer}`;
            correctAnswerDisplay.style.display = 'block';

            inputField.classList.add('incorrect');
            micButton.classList.add('incorrect');
        }
        document.querySelector('#next-button').textContent = 'Weiter';
    }

    function loadNextQuestion() {
        const inputField = document.querySelector('.text-input');
        const micButton = document.querySelector('.mic-button');
        const correctAnswerDisplay = document.querySelector('.correct-answer');
        inputField.classList.remove('correct', 'incorrect');
        micButton.classList.remove('correct', 'incorrect');
        correctAnswerDisplay.style.display = 'none';

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

        document.querySelector('.question').textContent = randomQuestion.Frage;
        document.querySelector('.category-text').textContent = randomQuestion.Kategorie;
        inputField.value = '';

        setDifficultyBlocks(randomQuestion.Schwierigkeitsgrad);
        
        currentQuestionIndex++;
        updateProgressBar();

        const nextButton = document.querySelector('#next-button');
        document.querySelector('#next-button').textContent = '???';
        nextButton.style.backgroundColor = '#e48d45';

        function handleInput() {
            nextButton.disabled = !inputField.value.trim();
            nextButton.style.backgroundColor = inputField.value.trim() ? '#e48d45' : '#e48d45';
            document.querySelector('#next-button').textContent = inputField.value.trim() ? 'Einloggen' : '???';
        }

        inputField.removeEventListener('input', handleInput);
        inputField.addEventListener('input', handleInput);

        nextButton.removeEventListener('click', handleNextClick);
        nextButton.addEventListener('click', handleNextClick);

        clickCount = 0;
    }

    function handleNextClick() {
        const inputField = document.querySelector('.text-input');
        const nextButton = document.querySelector('#next-button');
        const correctAnswerDisplay = document.querySelector('.correct-answer');
        const userAnswer = inputField.value.trim();
        const randomQuestion = questions.find(q => q.Frage === document.querySelector('.question').textContent);

        clickCount++;
        if (clickCount === 1) {
            checkAnswer(userAnswer, randomQuestion.RichtigeAntwort);
            correctAnswerDisplay.style.display = 'block';
            nextButton.disabled = false;
            nextButton.style.backgroundColor = '#e48d45';
        } else if (clickCount === 2) {
            loadNextQuestion();
        }
    }

    loadNextQuestion();
});
