document.addEventListener('DOMContentLoaded', function() {
    const totalQuestions =15;
    let currentQuestionIndex = 0;
    let correctCount = 0;
    let askedQuestions = [];
    let clickCount = 0;
    let kleinste = Infinity;

    // Sprachaufnahme initialisieren
    let recognition;
let isRecognizing = false; // Flag, um den Status der Erkennung zu verfolgen
let isMouseDown = false; // Flag, um den Status des Knopfes zu verfolgen
    hidebars();
// Überprüfen, ob die Web Speech API unterstützt wird
if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true; // Kontinuierliche Erkennung aktivieren
    recognition.interimResults = false; // Keine Zwischenergebnisse
    recognition.lang = 'de-DE'; // Sprache auf Deutsch setzen

    recognition.onstart = function() {
        isRecognizing = true;
        console.log('Erkennung gestartet');
        document.querySelector('.mic-button').classList.add('active'); // Visuelles Feedback hinzufügen
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        const inputField = document.querySelector('.text-input');
        inputField.value = transcript.replace(/\.$/, ''); // Entfernt den Punkt am Ende
        inputField.dispatchEvent(new Event('input')); // Trigger Input Event für die Weiterverarbeitung
    };

    recognition.onerror = function(event) {
        console.error('Spracherkennungsfehler:', event.error);
    };

    recognition.onend = function() {
        isRecognizing = false;
        console.log('Erkennung beendet');
        document.querySelector('.mic-button').classList.remove('active'); // Visuelles Feedback entfernen
    };
} else {
    console.warn('Web Speech API wird von diesem Browser nicht unterstützt.');
    document.querySelector('.mic-button').style.display = 'none'; // Mikrofon-Button verstecken
}

// Sprachaufnahme beim Drücken des Mikrofon-Buttons starten und stoppen
const micButton = document.querySelector('.mic-button');


micButton.addEventListener('mousedown', function() {
    isMouseDown = true; // Maus gedrückt
    if (recognition && !isRecognizing) {
        console.log('Erkennung wird gestartet');
        recognition.start();
        startAudioProcessing();
    }
});

micButton.addEventListener('mouseup', function() {
    console.log('Maus losgelassen');
    isMouseDown = false; // Maus losgelassen
    if (recognition && isRecognizing) {
        console.log('Erkennung wird gestoppt');
        recognition.stop();
        stopAudioProcessing();
    }
});

micButton.addEventListener('mouseleave', function() {
    console.log('Maus hat den Bereich verlassen');
    if (isMouseDown && recognition && isRecognizing) {
        console.log('Erkennung wird gestoppt, weil die Maus den Bereich verlassen hat');
        recognition.stop(); // Stoppen, wenn die Maus den Bereich verlässt und der Knopf gedrückt war
        isMouseDown = false; // Flag zurücksetzen
        stopAudioProcessing();
    }
});

// Falls das Gerät auf Touch-Ereignisse reagiert (z.B. auf Mobilgeräten)
micButton.addEventListener('touchstart', function(e) {
    e.preventDefault(); // Verhindert das Standardverhalten von Touch-Ereignissen
    if (recognition && !isRecognizing) {
        console.log('Erkennung wird gestartet (Touch)');
        recognition.start();
        startAudioProcessing();
    }
});

micButton.addEventListener('touchend', function(e) {
    e.preventDefault();
    console.log('Touch beendet');
    if (recognition && isRecognizing) {
        console.log('Erkennung wird gestoppt (Touch)');
        recognition.stop();
        stopAudioProcessing();
    }
});


document.getElementById('clearImage').addEventListener('click', function() {
    console.log('hallo');
    document.getElementById('myInput').value = '';
});

document.querySelector('input').addEventListener('focus', function() {
    console.log('Tastatur könnte geöffnet sein');
});

let initialHeight = window.innerHeight;

window.addEventListener('resize', function() {
    let currentHeight = window.innerHeight;
    
    if (currentHeight < initialHeight) {
        let keyboardHeight = initialHeight - currentHeight;
        console.log('Ungefähre Tastaturhöhe:', keyboardHeight, 'px');
        document.getElementById('myInput').value = keyboardHeight;
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
    console.log(question);
    currentQuestion = question;
    return question;
    
    }

    function saveIncorrectQuestion() {
        if (!currentQuestion) {
            console.error('Keine aktuelle Frage gefunden!');
            return;
        }
    
        let incorrectQuestions = JSON.parse(localStorage.getItem('incorrectQuestions')) || [];
    
        // Überprüfen, ob die Frage bereits gespeichert ist, um Duplikate zu vermeiden
        const exists = incorrectQuestions.some(q => q.Frage === currentQuestion.Frage);
        
        if (!exists) {
            incorrectQuestions.push({
                Frage: currentQuestion.Frage,
                RichtigeAntwort: currentQuestion.RichtigeAntwort,
                Antworten: currentQuestion.Antworten,
                Kategorie: currentQuestion.Kategorie,
                Schwierigkeitsgrad: currentQuestion.Schwierigkeitsgrad,
                Fakt: currentQuestion.Fakt
            });
    
            localStorage.setItem('incorrectQuestions', JSON.stringify(incorrectQuestions));
        }
        console.log(incorrectQuestions);
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
            case 'expert':
                difficultyLevel = 5;
                break;
            default:
                difficultyLevel = 0;
        }

        for (let i = 4; i > -1; i--) {
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
            case 'expert':
                return '#d969e7';
            default:
                return '#141F25';
        }
    }

    function calculateLengthAdjustment(userAnswer, correctAnswer) {
        const lengthDifference = Math.abs(userAnswer.length - correctAnswer.length);
        const adjustmentFactor = 1 - (lengthDifference / (Math.max(userAnswer.length, correctAnswer.length) + 1));
        console.log(`Längendifferenz: ${lengthDifference}`);
        console.log(`Anpassungsfaktor: ${adjustmentFactor}`);
        return Math.max(0, adjustmentFactor); // Sicherstellen, dass der Faktor nicht negativ ist
    }

    function checkAnswer(userAnswer, correctAnswer, AntwortAnzeige, Kategorie, Schwierigkeit) {
        hidebars();
        const inputField = document.querySelector('.text-input');
        const micButton = document.querySelector('.mic-button');
        const question = document.querySelector('.question');
        const wrapper = document.querySelector('.next-button-wrapper');
        const container = document.querySelector('.container');
        const button = document.querySelector('#next-button');
        const correctAnswerDisplay = document.querySelector('.correct-answer');
        
        // Optionen für die Fuzzy-Suche
        const options = {
            includeScore: true,
            threshold: 0.8,  // Definiere den Schwellwert für die Fuzzy-Suche
        };
        
        // Erstelle eine Fuzzy-Suche für die gesamte richtige Antwort
        const fuse = new Fuse([correctAnswer], options);
        const userAnswerWords = userAnswer.toLowerCase().split(/\s+/);  // Teile die Benutzerantwort in Wörter auf
        const correctAnswerWords = correctAnswer.toLowerCase().split(/\s+/);  // Teile die richtige Antwort in Wörter auf
        
        let isMatch = false;
        
        // Funktion zur Überprüfung, ob ein String eine Zahl ist
        function isNumber(str) {
            return !isNaN(str) && !isNaN(parseFloat(str));
        }
        
        if (isNumber(correctAnswer)) {
            if (userAnswer === correctAnswer) {
                isMatch = true;
            }
        } else {
            // Überprüfen, ob der gesamte Text übereinstimmt
            const lengthAdjustmentTotal = calculateLengthAdjustment(userAnswer, correctAnswer, AntwortAnzeige);
            const result = fuse.search(userAnswer);  // Führe die Fuzzy-Suche durch
            let fuzzyScore = result.length > 0 ? result[0].score : 1;  // Hole den Fuzzy-Score, wenn vorhanden
            fuzzyScore = 1 - fuzzyScore;  // Invertiere den Score
            const weightedScoreTotal = fuzzyScore * lengthAdjustmentTotal;
            console.log(`Gesamt - Längendifferenz: ${Math.abs(userAnswer.length - AntwortAnzeige.length)}`);
            console.log(`Gesamt - Längenanpassung: ${lengthAdjustmentTotal}`);
            console.log(`Gesamt - Fuzzy-Score: ${fuzzyScore}`);
            console.log(`Gesamt - Gewichteter Score: ${weightedScoreTotal}`);
        
            if (weightedScoreTotal > 0.7) {
                isMatch = true;
            } else {
                // Überprüfen, ob ein einzelnes Wort übereinstimmt
                for (let userWord of userAnswerWords) {
                    if (userWord.length < 1) continue;  // Überspringe sehr kurze Wörter
                    console.log(`Benutzerwort: ${userWord}`);
        
                    for (let correctWord of correctAnswerWords) {
                        if (correctWord.length < 1) continue;  // Überspringe sehr kurze Wörter
        
                        if (userWord === correctWord) {
                            isMatch = true;
                            break;  // Beende die Schleife, wenn ein Wort übereinstimmt
                        }
        
                        // Überprüfe, ob beide Wörter numerische Teile enthalten
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
                                    break;  // Beende die Schleife, wenn ein numerischer Teil übereinstimmt
                                }
                            }
                        }
        
                        // Berechne den fuzzy Score für das Wortpaar
                        const lengthAdjustment = calculateLengthAdjustment(userWord, correctWord);
                        console.log(`Wortvergleich - Längenanpassung: ${lengthAdjustment}`);
        
                        const wordFuse = new Fuse([correctWord], options);
                        const wordResult = wordFuse.search(userWord);
                        if (wordResult.length === 0) {
                            console.log(`Keine Fuzzy-Ergebnisse für das Wortpaar ${userWord} und ${correctWord}`);
                            continue;  // Überspringe, wenn keine Ergebnisse gefunden wurden
                        }
        
                        let fuzzyWordScore = wordResult[0].score;
                        fuzzyWordScore = 1 - fuzzyWordScore;
                        console.log(`Wortvergleich - Fuzzy-Score: ${fuzzyWordScore}`);
        
                        const weightedWordScore = fuzzyWordScore * lengthAdjustment;
                        console.log(`Wortvergleich - Gewichteter Score: ${weightedWordScore}`);
        
                        if (weightedWordScore > 0.7) {
                            isMatch = true;
                            break;  // Beende die Schleife, wenn ein Wortpaar übereinstimmt
                        }
                    }
                    if (isMatch) break;  // Beende die Schleife, wenn eine Übereinstimmung gefunden wurde
                }
            }
        }
        
        let answeredQuestions = JSON.parse(localStorage.getItem('answeredQuestions')) || [];
let correctAnswers = JSON.parse(localStorage.getItem('correctAnswers')) || [];

let questionText = question.textContent; // Der Text der aktuellen Frage
let questionCategory = Kategorie; // Die Kategorie der aktuellen Frage
let questionSchwierigkeit = Schwierigkeit;
// Allgemeine Prüfungen für beantwortete und korrekt beantwortete Fragen
if (!answeredQuestions.includes(questionText)) {
    answeredQuestions.push(questionText);
    localStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestions));
}

if (isMatch && !correctAnswers.includes(questionText)) {
    correctAnswers.push(questionText);
    localStorage.setItem('correctAnswers', JSON.stringify(correctAnswers));
}

// Spezielle Arrays für jede Kategorie
const categories = ['Geschichte', 'Geographie', 'Musik', 'Wissenschaft', 'Kunst', 'Sport'];
categories.forEach(category => {
    console.log("ist");
    // Initialisiere oder hole die aktuellen Kategoriedaten
    let answeredCategoryQuestions = JSON.parse(localStorage.getItem(category + 'Answered')) || [];
    let correctCategoryAnswers = JSON.parse(localStorage.getItem(category + 'Correct')) || [];

    
    if (questionCategory === category) {
        if (!answeredCategoryQuestions.includes(questionText)) {
            answeredCategoryQuestions.push(questionText);
            localStorage.setItem(category + 'Answered', JSON.stringify(answeredCategoryQuestions));
        }

        if (isMatch && !correctCategoryAnswers.includes(questionText)) {
            console.log("richtig");
            correctCategoryAnswers.push(questionText);
            localStorage.setItem(category + 'Correct', JSON.stringify(correctCategoryAnswers));
        }
    }

    // Ausgabe der kategoriespezifischen Statistik
    console.log(`Beantwortete Fragen in ${category}: ${answeredCategoryQuestions.length}`);
    console.log(`Richtige Antworten in ${category}: ${correctCategoryAnswers.length}`);
});

const schwierigkeiten = ['leicht', 'mittel', 'schwer', 'extrem', 'expert'];
schwierigkeiten.forEach(schwierigkeiten => {
    console.log("ist");
    // Initialisiere oder hole die aktuellen Kategoriedaten
    let answeredCategoryQuestions = JSON.parse(localStorage.getItem(schwierigkeiten + 'Answered')) || [];
    let correctCategoryAnswers = JSON.parse(localStorage.getItem(schwierigkeiten + 'Correct')) || [];

    
    if (questionSchwierigkeit === schwierigkeiten) {
        if (!answeredCategoryQuestions.includes(questionText)) {
            answeredCategoryQuestions.push(questionText);
            localStorage.setItem(schwierigkeiten + 'Answered', JSON.stringify(answeredCategoryQuestions));
        }

        if (isMatch && !correctCategoryAnswers.includes(questionText)) {
            console.log("richtig");
            correctCategoryAnswers.push(questionText);
            localStorage.setItem(schwierigkeiten + 'Correct', JSON.stringify(correctCategoryAnswers));
        }
    }

    // Ausgabe der kategoriespezifischen Statistik
    console.log(`Beantwortete Fragen in ${schwierigkeiten}: ${answeredCategoryQuestions.length}`);
    console.log(`Richtige Antworten in ${schwierigkeiten}: ${correctCategoryAnswers.length}`);
});

// Ausgabe der allgemeinen Statistik
console.log(`Beantwortete Fragen: ${answeredQuestions.length}`);
console.log(`Richtige Antworten: ${correctAnswers.length}`);

        // Verarbeite die Antwort basierend auf dem Übereinstimmungsstatus
        if (isMatch) {
            correctCount++;
            localStorage.setItem("mission-" + Kategorie.toLowerCase(), (parseInt(localStorage.getItem("mission-" + Kategorie.toLowerCase())) || 0) + 1);
            localStorage.setItem("mission-" + Kategorie.toLowerCase() + "1", (parseInt(localStorage.getItem("mission-" + Kategorie.toLowerCase() + "1")) || 0) + 1);
            localStorage.setItem("mission-question1", (parseInt(localStorage.getItem("mission-question1")) || 0) + 1);
            console.log('Richtig! Aktuelle Anzahl der richtigen Antworten:', correctCount);
            inputField.classList.add('correct');
            micButton.classList.add('correct');
            question.classList.add('correct');
            wrapper.classList.add('correct');
            button.classList.add('correct');
            container.classList.add('correct');
            wrapper.classList.remove('no-transition');
            correctAnswerDisplay.innerHTML = `<span class="highlight">Richtig!</span> <span class="highlight">${AntwortAnzeige}</span>`;
            correctAnswerDisplay.classList.remove('incorrect');
            correctAnswerDisplay.style.display = 'block';
            const bars = document.querySelectorAll('.bar');
            bars.forEach(bar => bar.style.height = '0px');
            container.disabled = !inputField.value.trim();
        } else {
            saveIncorrectQuestion(question);
            console.log('Falsch! Die richtige Antwort wäre:', correctAnswer);
            correctAnswerDisplay.innerHTML = `<span class="highlight">Antwort:</span> <span class="highlight">${AntwortAnzeige}</span>`;
            correctAnswerDisplay.classList.add('incorrect');
            correctAnswerDisplay.style.display = 'block';
            inputField.classList.add('incorrect');
            micButton.classList.add('incorrect');
            question.classList.add('incorrect');
            wrapper.classList.add('incorrect');
            button.classList.add('incorrect');
            container.classList.add('incorrect');
            wrapper.classList.remove('no-transition');
            const bars = document.querySelectorAll('.bar');
            bars.forEach(bar => bar.style.height = '0px');
            container.disabled = !inputField.value.trim();
        }
        document.querySelector('#next-button').textContent = 'Weiter';
    }
    

    function loadNextQuestion() {
        hidebars();
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => bar.style.height = '0px');
        const inputField = document.querySelector('.text-input');
        const wrapper = document.querySelector('.next-button-wrapper');
        const button = document.querySelector('#next-button');
        const micButton = document.querySelector('.mic-button');
        const correctAnswerDisplay = document.querySelector('.correct-answer');
        const answerBox = document.querySelector('.answer-box'); // Hinzufügen, um die Box auszublenden
        const factDisplay = document.querySelector('.fact'); // Vorher existierendes Fact-Element ansprechen
        const factBox = document.querySelector('.fact-box'); // Hinzufügen, um die Box auszublenden
        const question = document.querySelector('.question');
        const categoryText = document.querySelector('.category-text');
        const categoryIcon = document.querySelector('.category-icon');
        const container = document.querySelector('.container');
        wrapper.classList.add('no-transition');
        inputField.classList.remove('correct', 'incorrect');
        micButton.classList.remove('correct', 'incorrect');
        question.classList.remove('correct', 'incorrect');
        wrapper.classList.remove('correct', 'incorrect');
        button.classList.remove('correct', 'incorrect');
        container.classList.remove('correct', 'incorrect');
        correctAnswerDisplay.style.display = 'none';
        correctAnswerDisplay.classList.remove('incorrect');
        answerBox.style.display = 'none'; // Die Box ausblenden
        factDisplay.style.display = 'none'; // Fakt ausblenden
        factBox.style.display = 'none'; // Die Box ausblenden
        
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
        categoryText.textContent = randomQuestion.Kategorie;
        inputField.value = '';
        
        // Setze die Kategorie-spezifische Textfarbe
        categoryText.style.color = getCategoryColor(randomQuestion.Kategorie);
        
        // Setze das Kategorie-spezifische Bild
        categoryIcon.src = `categorie-icons/${getCategoryIcon(randomQuestion.Kategorie)}`;
        
        setDifficultyBlocks(randomQuestion.Schwierigkeitsgrad);
        
        currentQuestionIndex++;
        updateProgressBar();
        
        const nextButton = document.querySelector('#next-button');
        document.querySelector('#next-button').textContent = 'Einloggen';
        nextButton.disabled = !inputField.value.trim();
        button.classList.remove('active');
        
        function handleInput() {
            // Aktivieren oder Deaktivieren des Buttons basierend auf dem Eingabefeldwert
            nextButton.disabled = !inputField.value.trim();
            if (inputField.value.trim()) {
                nextButton.classList.add('active');
            } else {
                nextButton.classList.remove('active');
            }
            // Ändern des Button-Textes basierend auf dem Eingabefeldwert
            nextButton.textContent = inputField.value.trim() ? 'Einloggen' : 'Einloggen';
        }
        
        inputField.removeEventListener('input', handleInput);
        inputField.addEventListener('input', handleInput);
        
        nextButton.removeEventListener('click', handleNextClick);
        nextButton.addEventListener('click', handleNextClick);
        
        clickCount = 0;
    }
    
    function getCategoryColor(category) {
        // Funktion, die die Farbe basierend auf der Kategorie zurückgibt
        switch (category) {
            case 'Geschichte':
                return '#ECB021'; // Beispiel-Farbe
            case 'Geographie':
                return '#35C1F1'; // Beispiel-Farbe
            case 'Musik':
                return '#90CAF9'; // Beispiel-Farbe
            case 'Sport':
                return '#FF6F00';
            case 'Wissenschaft':
                return '#F3FF33';
            case 'Kunst':
                return '#F3FF33';
            default:
                return '#000000'; // Standardfarbe
        }
    }
    

    function getCategoryIcon(category) {
        switch (category) {
            case 'Geschichte': return 'i-tempel.png';
            case 'Geographie': return 'i-weltkarte.png';
            case 'Musik': return 'i-noten.png';
            case 'Sport': return 'i-basketball.png';
            case 'Wissenschaft': return 'i-microscop.png';
            case 'Kunst': return 'Kunst.png';
            case 'Biologie': return 'i-dna.png';
            case 'Politik': return 'icons8....png';
            default: return 'default.png';
        }
    }

    function handleNextClick() {
        hidebars();
        const inputField = document.querySelector('.text-input');
        const noteInput = document.querySelector('.note-input'); // Neues Eingabefeld
        const nextButton = document.querySelector('#next-button');
        const correctAnswerDisplay = document.querySelector('.correct-answer');
        const answerBox = document.querySelector('.answer-box');
        const factDisplay = document.querySelector('.fact');
        const factBox = document.querySelector('.fact-box');
        const wrapper = document.querySelector('.next-button-wrapper');

// Prüfen, ob das Element existiert
if (wrapper) {
    // Prüfen, ob das Element die Klassen `correct` oder `incorrect` hat
    if (wrapper.classList.contains('correct') || wrapper.classList.contains('incorrect')) {
        wrapper.removeAttribute('style');
    } 
} 
        const userAnswer = inputField.value.trim();
        const randomQuestion = questions.find(q => q.Frage === document.querySelector('.question').textContent);
    
        if (navigator.vibrate) {
            navigator.vibrate(200);
        }
    
        clickCount++;
        if (clickCount === 1) {
            checkAnswer(userAnswer, randomQuestion.RichtigeAntwortMöglichkeiten, randomQuestion.RichtigeAntwort, randomQuestion.Kategorie, randomQuestion.Schwierigkeitsgrad);
            answerBox.style.display = 'block';
            nextButton.disabled = false;
    
            factDisplay.textContent = randomQuestion.Fakt;
            factDisplay.style.display = 'block';
            factBox.style.display = 'block';
        } else if (clickCount === 2) {
            const note = noteInput.value.trim();
            if (note) {
                saveNoteToLocalStorage(randomQuestion.Frage, note);
                noteInput.value = ''; // Eingabefeld nach dem Speichern leeren
            }
            wrapper.removeAttribute('style');
            loadNextQuestion();
        }
    }


    
    function saveNoteToLocalStorage(question, note) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes = notes.filter(n => n.question !== question); // Vorhandene Notiz für die Frage überschreiben
        notes.push({ question, note });
        localStorage.setItem('notes', JSON.stringify(notes));
    }
    
    loadNextQuestion();

    function startAudioProcessing() {
        hidebars();
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            analyser = audioContext.createAnalyser();
            microphone = audioContext.createMediaStreamSource(stream);
            scriptProcessor = audioContext.createScriptProcessor(256, 1, 1);
    
            analyser.smoothingTimeConstant = 0.3;
            analyser.fftSize = 32;
    
            microphone.connect(analyser);
            analyser.connect(scriptProcessor);
            scriptProcessor.connect(audioContext.destination);
    
            const barScales = [0.2, 0.5, 0.9, 0.8, 0.4, 0.2, 0.05]; // Prozentuale Höhenverteilung der Balken
    
            scriptProcessor.onaudioprocess = function() {
                const array = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(array);
                const values = array.reduce((a, b) => a + b) / array.length;
    
                // Kleinste Lautstärke aktualisieren, wenn die aktuelle Lautstärke kleiner ist
                if (values < kleinste && values > 10) {
                    kleinste = values;
                    console.log(kleinste);
                }
    
                
                // Lautstärke auf Balkenhöhen anwenden
                const bars = document.querySelectorAll('.bar');
                bars.forEach((bar, index) => {
                    bar.style.height = `${Math.min(6, Math.max(1, ((values - (kleinste * 0.7)) * barScales[index] * 0.15)))}em`;
                });
            };
        }).catch(error => console.error('Fehler bei der Audioverarbeitung:', error));
    }


    function hidebars() {
        const element = document.querySelectorAll('mic-button');
    const bars = document.querySelectorAll('.bar');
    if (document.activeElement === element) {
        console.log('Hallo2')
    } else {
        bars.forEach(bar => bar.style.height = '0px');
        console.log('Hallo1')
    } 
    }


    function stopAudioProcessing() {
        if (audioContext) {
            audioContext.close();
            audioContext = null;
        }
        if (scriptProcessor) {
            scriptProcessor.disconnect();
            scriptProcessor = null;
        }
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => bar.style.height = '0px'); // Balken zurücksetzen
    }

       

});

document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.next-button-wrapper');
    let startY;
    let currentY = 0;

    function onTouchStart(e) {
        if (!wrapper.classList.contains('correct') && !wrapper.classList.contains('incorrect')) return;
        startY = e.touches[0].clientY - currentY;
    }

    function onTouchMove(e) {
        const touchY = e.touches[0].clientY;
        currentY = touchY - startY;
        currentY = Math.max(0, currentY);
        currentY = Math.min(window.innerHeight * 0.6, currentY);
        wrapper.style.transform = `translateY(${currentY}px)`;
    }

    function onTouchEnd() {
        if (currentY > window.innerHeight * 0.3) {
            currentY = window.innerHeight * 0.6;
        } else {
            currentY = 0;
        }
        wrapper.style.transform = `translateY(${currentY}px)`;
    }

    function resetWrapper() {
        wrapper.style.transition = 'transform 0.3s ease-out';
        wrapper.style.transform = 'translateY(100%)';
    }

    function loadNextQuestionWrapper() {
        resetWrapper();
        setTimeout(() => {
            wrapper.classList.add('correct'); // Position auf sichtbar setzen
        }, 100);
    }

    wrapper.addEventListener('touchstart', onTouchStart);
    wrapper.addEventListener('touchmove', onTouchMove);
    wrapper.addEventListener('touchend', onTouchEnd);

    // Simulation der nächsten Frage
    function loadNextQuestion() {
        loadNextQuestionWrapper();
        // Logik zum Laden der nächsten Frage...
    }
});