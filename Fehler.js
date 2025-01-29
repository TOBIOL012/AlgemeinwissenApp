document.addEventListener('DOMContentLoaded', function() {
    //localStorage.removeItem('incorrectQuestions');
    const factDisplay2 = document.querySelector('.fact2');
    const factDisplay = document.querySelector('.fact');
    const categoryImages = document.querySelectorAll('img[data-category]');
    const continueButton = document.querySelector('.next-button2');
    const wrapper = document.querySelector('.results2');
    const correctAnswerDisplay = document.querySelector('.correct-answer2');
    const correctAnswerDisplay2 = document.querySelector('.answer-box2');
    let selectedCategories = JSON.parse(localStorage.getItem('selectedCategories')) || [];
    let isAnswerChecked = false;
    let currentRandomQuestion = null;
    const incorrectQuestions = JSON.parse(localStorage.getItem('incorrectQuestions')) || [];
    console.log(incorrectQuestions);
    



    

    const difficultyButtons = document.querySelectorAll('.difficulty-button1, .difficulty-button2, .difficulty-button3, .difficulty-button4, .difficulty-button5');

    let currentQuestionIndex = 0;
    let correctCount = 0;
    let askedQuestions = [];
    const totalQuestions = 15;
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

console.log("1");
loadQuestion();

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


document.getElementById('clearImage2').addEventListener('click', function() {
    console.log('hallo');
    document.getElementById('myInput').value = '';
});

document.querySelector('input').addEventListener('focus', function() {
    console.log('Tastatur könnte geöffnet sein');
});

function getRandomQuestion() {
    // Lade die fehlerhaften Fragen aus dem LocalStorage
    const incorrectQuestions = JSON.parse(localStorage.getItem('incorrectQuestions')) || [];
    const selectedCategories = JSON.parse(localStorage.getItem('selectedCategories')) || [];

    // Prüfe, ob fehlerhafte Fragen existieren
    if (incorrectQuestions.length === 0) {
        console.warn('Keine fehlerhaften Fragen vorhanden.');
        return null; // Keine Fragen verfügbar
    }

    // Filtere die Fragen basierend auf den ausgewählten Kategorien
    let filteredQuestions = incorrectQuestions;
    if (selectedCategories.length > 0 && !selectedCategories.includes('Alles')) {
        filteredQuestions = incorrectQuestions.filter(q => selectedCategories.includes(q.Kategorie));
    }

    // Prüfe, ob nach der Filterung Fragen übrig sind
    if (filteredQuestions.length === 0) {
        console.warn('Keine fehlerhaften Fragen in den ausgewählten Kategorien vorhanden.');
        return null; // Keine passenden Fragen verfügbar
    }

    // Wähle eine zufällige Frage aus den gefilterten Fragen
    const question = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];

    // Markiere die Frage als gestellt
    askedQuestions.push(question.Frage);

    console.log('Zufällige Frage:', question); // Debugging
    return question; // Gebe die Frage zurück
}

    function setDifficultyBlocks(difficulty) {
        // HTML-Container auswählen
        const auswahlContainer = document.querySelector('.difficulty'); // Für 'auswahl'
        const eintippContainer = document.querySelector('.difficulty2'); // Für 'eintipp'
    
        // Container leeren
        auswahlContainer.innerHTML = '';
        eintippContainer.innerHTML = '';
    
        // Schwierigkeit zu Level mappen
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
    
        // Blöcke erstellen basierend auf Schwierigkeit
        const targetContainer = (difficulty === 'leicht' || difficulty === 'mittel') ? auswahlContainer : eintippContainer;
    
        for (let i = 0; i < difficultyLevel; i++) {
            const block = document.createElement('div');
            block.classList.add('difficulty-block', difficulty); // CSS-Klassen hinzufügen
            targetContainer.appendChild(block); // Blöcke in den passenden Container einfügen
        }
    
        console.log(`Schwierigkeit: ${difficulty} | Blöcke erstellt in: ${targetContainer.className}`);
    }

    function updateProgressBar() {
        const percentage = (currentQuestionIndex / totalQuestions) * 100;
        const progressBar = document.querySelector('.progress');
        if (progressBar) {
            progressBar.style.width = `${percentage}%`;
        }
    }

    function updateCategoryDisplay(category) {
        const categoryTextElement = document.querySelector('.category-text2');
        const categoryTextElement2 = document.querySelector('.category-text');
        if (categoryTextElement) {
            categoryTextElement.textContent = category;
            categoryTextElement2.textContent = category;
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
        const inputField = document.querySelector('.text-input2');
        const micButton = document.querySelector('.mic-button');
        const question = document.querySelector('.question2');
        const wrapper = document.querySelector('.next-button-wrapper');
        const container = document.querySelector('.container2');
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
            console.log('Richtig! Aktuelle Anzahl der richtigen Antworten:', correctCount);
            const incorrectQuestions = JSON.parse(localStorage.getItem('incorrectQuestions')) || [];
            const updatedQuestions = incorrectQuestions.filter(q => q.Frage !== currentRandomQuestion);
            localStorage.setItem('incorrectQuestions', JSON.stringify(updatedQuestions));
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



    
    function loadQuestion(AntwortAnzeige) {
        isAnswerChecked = false;
        console.log("loaded");
        

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

        if (!randomQuestion || !randomQuestion.Schwierigkeitsgrad) {
            console.error('Fehler: randomQuestion oder Schwierigkeitsgrad ist nicht geladen.');
            alert('Die Daten konnten nicht geladen werden. Bitte überprüfe die Datenquelle.');
            return; // Beende die Funktion, um Fehler zu vermeiden
        }

        const auswahl = document.querySelector('.auswahl');
        const eintipp = document.querySelector('.eintipp');
    
        if (randomQuestion.Schwierigkeitsgrad === 'leicht' || randomQuestion.Schwierigkeitsgrad === 'mittel') {
            console.log("auswahl");
            auswahl.style.display = 'block';
            eintipp.style.display = 'none';
            document.querySelector('.question1').textContent = randomQuestion.Frage;
        updateCategoryDisplay(randomQuestion.Kategorie);
        setDifficultyBlocks(randomQuestion.Schwierigkeitsgrad);
        const factDisplay2 = document.querySelector('.fact2');
        factDisplay2.textContent = randomQuestion.Fakt;
        factDisplay2.style.display = 'flex';

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

        document.querySelector('.results2').style.display = 'flex';
        document.querySelector('.results2').classList.remove('correct', 'wrong');
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
                    document.querySelector('.results2').classList.add('correct');
                    document.querySelector('.next-button').classList.add('correct-button');
                    factDisplay2.textContent = randomQuestion.Fakt;
                    correctAnswerDisplay2.innerHTML = `<span class="highlight">Richtig!</span> <span class="highlight">${randomQuestion.RichtigeAntwort}</span>`;
                    correctAnswerDisplay2.classList.remove('incorrect');
                    correctAnswerDisplay2.style.display = 'block';
                    const incorrectQuestions = JSON.parse(localStorage.getItem('incorrectQuestions')) || [];
                    const updatedQuestions = incorrectQuestions.filter(q => q.Frage !== randomQuestion.Frage);
                    localStorage.setItem('incorrectQuestions', JSON.stringify(updatedQuestions));
                    wrapper.classList.add('correct');
                    factDisplay2.style.display = 'block';
                    correctCount++;
                } else {
                    factDisplay2.textContent = randomQuestion.Fakt;
                    console.log("hallo");
                    this.classList.add('wrong-answer');
                    factDisplay2.style.display = 'block';
                    correctAnswerDisplay2.innerHTML = `<span class="highlight">Antwort:</span> <span class="highlight">${randomQuestion.RichtigeAntwort}</span>`;
                    correctAnswerDisplay2.classList.add('incorrect');
                    correctAnswerDisplay2.style.display = 'block';
                    document.querySelector('.results2').classList.add('wrong');
                    document.querySelector('.next-button').classList.add('wrong-button');
                }

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

                answers.forEach(btn => {
                    if (btn.textContent === randomQuestion.RichtigeAntwort) {
                        btn.classList.add('correct-answer');
                    }
                });
    
                document.querySelector('.results2').style.display = 'flex';
                currentQuestionIndex++;
                updateProgressBar();
            }, { once: true });
        });
        } else {
            console.log("eintipp");
            auswahl.style.display = 'none';
            eintipp.style.display = 'block';
                hidebars();
                const bars = document.querySelectorAll('.bar');
                bars.forEach(bar => bar.style.height = '0px');
                const inputField = document.querySelector('.text-input2');
                const wrapper = document.querySelector('.next-button-wrapper');
                const button = document.querySelector('#next-button');
                const micButton = document.querySelector('.mic-button');
                const correctAnswerDisplay = document.querySelector('.correct-answer');
                const factDisplay = document.querySelector('.fact'); // Vorher existierendes Fact-Element ansprechen
                const factBox = document.querySelector('.fact-box'); // Hinzufügen, um die Box auszublenden
                const question = document.querySelector('.question2');
                const categoryText = document.querySelector('.category-text2');
                const categoryIcon = document.querySelector('.category-icon2');
                const container = document.querySelector('.container2');
                wrapper.classList.add('no-transition');
                inputField.classList.remove('correct', 'incorrect');
                micButton.classList.remove('correct', 'incorrect');
                question.classList.remove('correct', 'incorrect');
                wrapper.classList.remove('correct', 'incorrect');
                button.classList.remove('correct', 'incorrect');
                container.classList.remove('correct', 'incorrect');
                correctAnswerDisplay.style.display = 'none';
                correctAnswerDisplay.classList.remove('incorrect');
                factDisplay.style.display = 'none'; // Fakt ausblenden
                factBox.style.display = 'none'; // Die Box ausblenden
                
                if (currentQuestionIndex >= totalQuestions) {
                    localStorage.setItem('correctCount', correctCount);
                    window.location.href = 'belohnung.html';
                    return;
                }
                
                if (!randomQuestion) {
                    alert('Keine Fragen für die ausgewählte Kategorie oder Schwierigkeit gefunden.');
                    window.location.href = 'kategorien.html';
                    return;
                }
                
                document.querySelector('.question2').textContent = randomQuestion.Frage;
                categoryText.textContent = randomQuestion.Kategorie;
                inputField.value = '';
                
                // Setze die Kategorie-spezifische Textfarbe
                categoryText.style.color = getCategoryColor(randomQuestion.Kategorie);
                
                // Setze das Kategorie-spezifische Bild
                categoryIcon.src = `categorie-icons/${getCategoryIcon(randomQuestion.Kategorie)}`;
                
                setDifficultyBlocks(randomQuestion.Schwierigkeitsgrad);
                currentRandomQuestion = randomQuestion.Frage;
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
        const inputField = document.querySelector('.text-input2');
        const nextButton = document.querySelector('#next-button');
        const correctAnswerDisplay = document.querySelector('.correct-answer2');
        const factDisplay = document.querySelector('.fact');
        const factBox = document.querySelector('.fact-box');
        const randomQuestion = questions.find(q => q.Frage === document.querySelector('.question2').textContent);
    
        if (!randomQuestion) {
            console.error('Frage konnte nicht gefunden werden.');
            return;
        }
    
        if (!isAnswerChecked) {
            // Zustand: Antwort überprüfen
            const userAnswer = inputField.value.trim();
            checkAnswer(userAnswer, randomQuestion.RichtigeAntwortMöglichkeiten, randomQuestion.RichtigeAntwort, randomQuestion.Kategorie, randomQuestion.Schwierigkeitsgrad);
    
            factDisplay.textContent = randomQuestion.Fakt;
            factDisplay.style.display = 'block';
            factBox.style.display = 'block';
    
            // Button für den nächsten Zustand vorbereiten
            isAnswerChecked = true; // Antwort wurde geprüft
        } else {
            // Zustand: Nächste Frage laden
            loadQuestion();
    
            // Button für den ursprünglichen Zustand zurücksetzen
            nextButton.textContent = 'Einloggen';
            isAnswerChecked = false; // Zurücksetzen auf den ursprünglichen Zustand
        }
    }

    
    const nextButton = document.querySelector('.next-button2');
    nextButton.addEventListener('click', function() {
        loadQuestion();
    });


    const showNextButton = () => {
        const wrapper = document.querySelector('.results2');
        wrapper.classList.add('correct');
    };
    
    document.querySelectorAll('.answer').forEach(button => {
        button.addEventListener('click', function () {
            showNextButton(); // Direkt anzeigen, ohne Prüfung der Antwort
        });
    });


    console.log("problem");
});



