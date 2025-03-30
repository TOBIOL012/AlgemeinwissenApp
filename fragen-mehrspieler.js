document.addEventListener('DOMContentLoaded', function() {
    // ====================================================
    // Multiplayer-Grundlagen und globale Variablen
    // ====================================================
    let players, selectedCategories, totalQuestionsPerPlayer, totalQuestions, currentPlayerIndex, questionsAsked, currentQuestionIndex, correctCount, isAnswerChecked;

    function initializeGameData() {
      players = JSON.parse(localStorage.getItem('players')) || [];
      selectedCategories = JSON.parse(localStorage.getItem('selectedCategories')) || [];
      totalQuestionsPerPlayer = players[0]?.questionCount || 0;
      totalQuestions = totalQuestionsPerPlayer * players.length;
      localStorage.setItem('totalQuestions', totalQuestions);

      currentPlayerIndex = 0;
      questionsAsked = localStorage.getItem('questionsAsked') ? parseInt(localStorage.getItem('questionsAsked')) : 0;
      currentQuestionIndex = 0;
      correctCount = 0;
      isAnswerChecked = false; // Nur im Eintippmodus

      console.log('DEBUG: Players:', players);
      console.log('DEBUG: Selected Categories:', selectedCategories);
      console.log('DEBUG: Total Questions Per Player:', totalQuestionsPerPlayer);
      console.log('DEBUG: Total Questions:', totalQuestions);

      players.forEach(player => {
        if (player.questionsAnswered === undefined) player.questionsAnswered = 0;
        if (player.points === undefined) player.points = 0;
      });
    }

    // Call the function to initialize game data
    initializeGameData();
    window.initializeGameData = initializeGameData;



    
  
    // ====================================================
    // Multiplayer-Anzeige
    // ====================================================
    function getNextPlayer() {
      console.log(currentPlayerIndex, players.length);
      currentPlayerIndex = (currentPlayerIndex + 1) % (players.length + 1);
      console.log(currentPlayerIndex);
      console.log('DEBUG: Next Player Index:', currentPlayerIndex);
      return players[currentPlayerIndex];
    }
    
    function updateCurrentPlayerDisplay(player) {
      const currentPlayerEl = document.querySelector('.current-player');
      if (currentPlayerEl) {
        currentPlayerEl.textContent = player.name;
        console.log('DEBUG: Current player set to:', player.name);
      }
    }
    function updateQuestionStatusDisplay(player) {
      const statusEl = document.querySelector('.question-status');
      if (statusEl) {
        statusEl.textContent = `${player.questionsAnswered + 1}/${totalQuestionsPerPlayer}`;
        console.log('DEBUG: Question status:', statusEl.textContent);
      }
    }
    
    // ====================================================
    // Nächste Frage-Handler (inkl. Spielerwechsel)
    // ====================================================
    function nextQuestionHandler() {
      getNextPlayer();
      console.log('überprüf', currentPlayerIndex, players.length);
      if (questionsAsked >= totalQuestions) {
        localStorage.setItem('correctCount', correctCount);
        console.log('DEBUG: Alle Fragen beantwortet – redirect to endranking-mehrspieler.html');
        window.updateRanking();
        return;
      }else if(((currentPlayerIndex + 1) % (players.length + 1)) === 0 && questionsAsked < totalQuestions) {
        localStorage.setItem('players', JSON.stringify(players));
        console.log('DEBUG: Runde beendet – redirect to ranking-mehrspieler.html');
        window.updateRanking();
        return;
      }else{
        loadQuestion();
    }
    }
    
    // ====================================================
    // Fuse-Prüfung
    // ====================================================
    if (typeof Fuse === 'undefined') {
      console.error('DEBUG: Fuse is not defined – please include fuse.js');
    }
    
    // ====================================================
    // Sprachaufnahme (wie in Fehler.js)
    // ====================================================
    let recognition;
    let isRecognizing = false;
    let isMouseDown = false;
    if ('webkitSpeechRecognition' in window) {
      recognition = new webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = 'de-DE';
      recognition.onstart = function() {
        isRecognizing = true;
        console.log('DEBUG: Speech recognition started');
        const micBtn = document.querySelector('.mic-button');
        if (micBtn) micBtn.classList.add('active');
      };
      recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        const inputField = document.querySelector('.text-input2');
        if (inputField) {
          inputField.value = transcript.replace(/\.$/, '');
          inputField.dispatchEvent(new Event('input'));
          console.log('DEBUG: Speech recognition result:', transcript);
        }
      };
      recognition.onerror = function(event) {
        console.error('DEBUG: Speech recognition error:', event.error);
      };
      recognition.onend = function() {
        isRecognizing = false;
        console.log('DEBUG: Speech recognition ended');
        const micBtn = document.querySelector('.mic-button');
        if (micBtn) micBtn.classList.remove('active');
      };
    } else {
      console.warn('DEBUG: Web Speech API not supported');
      const micBtn = document.querySelector('.mic-button');
      if (micBtn) micBtn.style.display = 'none';
    }
    if (document.querySelector('.mic-button')) {
      const micBtn = document.querySelector('.mic-button');
      micBtn.addEventListener('mousedown', function() {
        isMouseDown = true;
        if (recognition && !isRecognizing) {
          console.log('DEBUG: MouseDown – starting speech recognition');
          recognition.start();
          startAudioProcessing();
        }
      });
      micBtn.addEventListener('mouseup', function() {
        isMouseDown = false;
        if (recognition && isRecognizing) {
          console.log('DEBUG: MouseUp – stopping speech recognition');
          recognition.stop();
          stopAudioProcessing();
        }
      });
      micBtn.addEventListener('mouseleave', function() {
        if (isMouseDown && recognition && isRecognizing) {
          console.log('DEBUG: MouseLeave – stopping speech recognition');
          recognition.stop();
          isMouseDown = false;
          stopAudioProcessing();
        }
      });
      micBtn.addEventListener('touchstart', function(e) {
        e.preventDefault();
        if (recognition && !isRecognizing) {
          console.log('DEBUG: TouchStart – starting speech recognition');
          recognition.start();
          startAudioProcessing();
        }
      });
      micBtn.addEventListener('touchend', function(e) {
        e.preventDefault();
        if (recognition && isRecognizing) {
          console.log('DEBUG: TouchEnd – stopping speech recognition');
          recognition.stop();
          stopAudioProcessing();
        }
      });
    }
    
    // ====================================================
    // Eingabefeld leeren
    // ====================================================
    document.getElementById('clearImage2').addEventListener('click', function() {
      console.log('DEBUG: Clear button clicked');
      document.getElementById('myInput2').value = '';
    });
    
    document.querySelector('input').addEventListener('focus', function() {
      console.log('DEBUG: Input field focused');
    });
    
    // ====================================================
    // Frageauswahl: Verwende alle Fragen des gewählten Schwierigkeitsgrads
    // ====================================================
    function getRandomQuestion() {
      if (!questions || questions.length === 0) {
        console.warn('DEBUG: No questions available.');
        return null;
      }
      const currentPlayer = players[currentPlayerIndex];
      let filteredQuestions = questions.filter(q => selectedCategories.includes(q.Kategorie) &&
        q.Schwierigkeitsgrad.toLowerCase() === currentPlayer.difficulty.toLowerCase());
      if (selectedCategories.includes('Alles')) {
        filteredQuestions = questions.filter(q => q.Schwierigkeitsgrad.toLowerCase() === currentPlayer.difficulty.toLowerCase());
      }
      if (filteredQuestions.length === 0) {
        console.warn('DEBUG: No matching questions found.');
        return null;
      }
      const question = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
      console.log('DEBUG: Random question:', question);
      return question;
    }
    
    // ====================================================
    // Schwierigkeit-Blöcke setzen
    // ====================================================
    function setDifficultyBlocks(difficulty) {
      const auswahlContainer = document.querySelector('.difficulty');
      const eintippContainer = document.querySelector('.difficulty2');
      if (auswahlContainer) auswahlContainer.innerHTML = '';
      if (eintippContainer) eintippContainer.innerHTML = '';
      let difficultyLevel;
      switch (difficulty) {
        case 'leicht': difficultyLevel = 1; break;
        case 'mittel': difficultyLevel = 2; break;
        case 'schwer': difficultyLevel = 3; break;
        case 'extrem': difficultyLevel = 4; break;
        case 'expert': difficultyLevel = 5; break;
        default: difficultyLevel = 0;
      }
      if (difficulty.toLowerCase() === 'leicht' || difficulty.toLowerCase() === 'mittel') {
        for (let i = 0; i < difficultyLevel; i++) {
          const block = document.createElement('div');
          block.classList.add('difficulty-block', difficulty.toLowerCase());
          auswahlContainer.appendChild(block);
        }
      } else {
        for (let i = 0; i < difficultyLevel; i++) {
          const block = document.createElement('div');
          block.classList.add('difficulty-block2', difficulty.toLowerCase());
          eintippContainer.appendChild(block);
        }
      }
      console.log(`DEBUG: Difficulty "${difficulty}" – blocks created in ${(difficulty.toLowerCase() === 'leicht' || difficulty.toLowerCase() === 'mittel') ? '.difficulty' : '.difficulty2'}`);
    }
    
    // ====================================================
    // Kategorieanzeige aktualisieren
    // ====================================================
    // In Auswahlmodus wird nur .category-text verwendet, im Eintippmodus nur .category-text2.
    function updateCategoryDisplay(category, mode) {
      if (mode === 'auswahl') {
        const catAuswahl = document.querySelector('.category-text');
        if (catAuswahl) {
          catAuswahl.textContent = category;
          catAuswahl.style.display = 'inline';
          console.log('DEBUG: Category (Auswahl):', category);
        }
        const catEintipp = document.querySelector('.category-text2');
        if (catEintipp) catEintipp.style.display = 'none';
      } else {
        const catEintipp = document.querySelector('.category-text2');
        if (catEintipp) {
          catEintipp.textContent = category;
          catEintipp.style.display = 'inline';
          console.log('DEBUG: Category (Eintipp):', category);
        }
        const catAuswahl = document.querySelector('.category-text');
        if (catAuswahl) catAuswahl.style.display = 'none';
      }
    }
    
    // ====================================================
    // Fuzzy-Suche zur Antwortüberprüfung
    // ====================================================
    function calculateLengthAdjustment(userAnswer, correctAnswer) {
      const lengthDifference = Math.abs(userAnswer.length - correctAnswer.length);
      const adjustmentFactor = 1 - (lengthDifference / (Math.max(userAnswer.length, correctAnswer.length) + 1));
      console.log(`DEBUG: Length difference: ${lengthDifference}, Adjustment factor: ${adjustmentFactor}`);
      return Math.max(0, adjustmentFactor);
    }
    
    function checkAnswer(userAnswer, correctAnswer) {
      const options = { includeScore: true, threshold: 0.8 };
      const fuse = new Fuse([correctAnswer], options);
      const result = fuse.search(userAnswer);
      let fuzzyScore = result.length > 0 ? result[0].score : 1;
      fuzzyScore = 1 - fuzzyScore;
      const lengthAdj = calculateLengthAdjustment(userAnswer, correctAnswer);
      const totalScore = fuzzyScore * lengthAdj;
      console.log(`DEBUG: Total weighted score: ${totalScore}`);
      return totalScore > 0.7;
    }
    
    // ====================================================
    // Statistiken aktualisieren
    // ====================================================
    function updateStats(question, isCorrect) {
      let answeredQuestions = JSON.parse(localStorage.getItem('answeredQuestions')) || [];
      let correctAnswers = JSON.parse(localStorage.getItem('correctAnswers')) || [];
      const questionText = question.Frage;
      if (!answeredQuestions.includes(questionText)) {
        answeredQuestions.push(questionText);
        localStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestions));
      }
      if (isCorrect && !correctAnswers.includes(questionText)) {
        correctAnswers.push(questionText);
        localStorage.setItem('correctAnswers', JSON.stringify(correctAnswers));
      }
      const categories = ['Geschichte', 'Geographie', 'Musik', 'Wissenschaft', 'Kunst', 'Sport'];
      const difficulties = ['leicht', 'mittel', 'schwer', 'extrem', 'expert'];
      updateCategoryAndDifficultyStats(categories, 'Category', question.Kategorie, questionText, isCorrect);
      updateCategoryAndDifficultyStats(difficulties, 'Difficulty', question.Schwierigkeitsgrad, questionText, isCorrect);
      console.log(`DEBUG: Stats updated – Answered: ${answeredQuestions.length}, Correct: ${correctAnswers.length}`);
    }
    
    function updateCategoryAndDifficultyStats(arr, type, questionAttribute, questionText, isCorrect) {
      arr.forEach(item => {
        if (questionAttribute === item) {
          let answered = JSON.parse(localStorage.getItem(item + type + 'Answered')) || [];
          let correct = JSON.parse(localStorage.getItem(item + type + 'Correct')) || [];
          if (!answered.includes(questionText)) {
            answered.push(questionText);
            localStorage.setItem(item + type + 'Answered', JSON.stringify(answered));
          }
          if (isCorrect && !correct.includes(questionText)) {
            correct.push(questionText);
            localStorage.setItem(item + type + 'Correct', JSON.stringify(correct));
          }
          console.log(`DEBUG: ${item} (${type}) – Answered: ${answered.length}, Correct: ${correct.length}`);
        }
      });
    }
    
    // ====================================================
    // Kategorie-Farbe und Icon (optional)
    // ====================================================
    function getCategoryColor(category) {
      switch (category) {
        case 'Geschichte': return '#ECB021';
        case 'Geographie': return '#35C1F1';
        case 'Musik': return '#90CAF9';
        case 'Sport': return '#FF6F00';
        case 'Wissenschaft': return '#F3FF33';
        case 'Kunst': return '#F3FF33';
        default: return '#000000';
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
    
    // ====================================================
    // Lautstärkebalken verstecken
    // ====================================================
    function hidebars() {
      const bars = document.querySelectorAll('.bar');
      bars.forEach(bar => bar.style.height = '0px');
    }
    
    // ====================================================
    // Hauptfunktion zum Laden einer Frage
    // ====================================================
    function loadQuestion() {
      console.log('DEBUG: Questions Asked:', questionsAsked, 'of', totalQuestions);
    
      const currentPlayer = players[currentPlayerIndex];
      updateCurrentPlayerDisplay(currentPlayer);

      updateQuestionStatusDisplay(currentPlayer);
    
      const randomQuestion = getRandomQuestion();
      if (!randomQuestion) {
        alert('DEBUG: No matching questions found.');
        window.location.href = 'kategorien.html';
        return;
          }
          console.log('DEBUG: Random Question:', randomQuestion);
        
          // ===============================
          // Auswahlmodus (leicht, mittel)
          // ===============================
          if (randomQuestion.Schwierigkeitsgrad.toLowerCase() === 'leicht' ||
          randomQuestion.Schwierigkeitsgrad.toLowerCase() === 'mittel') {
        document.querySelector('.auswahl').style.display = 'block';
        document.querySelector('.eintipp').style.display = 'none';
        updateCategoryDisplay(randomQuestion.Kategorie, 'auswahl');
        document.querySelector('.question1').textContent = randomQuestion.Frage;
        setDifficultyBlocks(randomQuestion.Schwierigkeitsgrad);
        
        const factDisplay2 = document.querySelector('.fact2');
        factDisplay2.textContent = randomQuestion.Fakt;
        factDisplay2.style.display = 'none';
        
        function shuffleArrayLocal(array) {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        }
        const shuffledAnswers = shuffleArrayLocal([...randomQuestion.Antworten]);
        const answers = document.querySelectorAll('.answer');
        const wrapper = document.querySelector('.results2');
        answers.forEach((button, index) => {
          button.textContent = shuffledAnswers[index];
          button.disabled = false;
          button.classList.remove('correct-answer', 'wrong-answer');
          button.onclick = function() {
            console.log('DEBUG: Auswahlmodus – Answer clicked:', button.textContent);
            answers.forEach(btn => btn.disabled = true);
            const isMatch = (button.textContent === randomQuestion.RichtigeAntwort);
            updateStats(randomQuestion, isMatch);

            answers.forEach(btn => {
              if (btn.textContent === randomQuestion.RichtigeAntwort) {
                btn.classList.add('correct-answer');
              }
            });

            if (isMatch) {
              this.classList.add('correct-answer');
              document.querySelector('.results2').classList.add('correct');
              document.querySelector('.next-button').classList.add('correct-button');
              factDisplay2.textContent = randomQuestion.Fakt;
              const currentPlayer = players[currentPlayerIndex];
              currentPlayer.points++;
              correctCount++;
            } else {
              this.classList.add('wrong-answer');
              document.querySelector('.results2').classList.add('wrong');
              document.querySelector('.next-button').classList.add('wrong-button');
            }
            factDisplay2.style.display = 'block';

            const nextBtn = document.querySelector('#next-button2');
            if (nextBtn) {
              nextBtn.onclick = function() {
                document.querySelector('.results2').classList.remove('correct', 'wrong');
                document.querySelector('.next-button').classList.remove('correct-button', 'wrong-button');
                document.querySelector('.next-button-wrapper').classList.remove('correct', 'wrong');
                document.querySelector('.next-button2').classList.remove('correct-button', 'wrong-button');
                factDisplay2.style.display = 'none';
                
                const currentPlayer = players[currentPlayerIndex];
                currentPlayer.questionsAnswered++;
                questionsAsked++;
                localStorage.setItem('questionsAsked', questionsAsked);
                localStorage.setItem('players', JSON.stringify(players));
              };
            }
          };
        });
      }
      // ===============================
      // Eintippmodus (schwer, extrem, expert)
      // ===============================
      else {
        document.querySelector('.auswahl').style.display = 'none';
        document.querySelector('.eintipp').style.display = 'block';
        updateCategoryDisplay(randomQuestion.Kategorie, 'eintipp');
        document.querySelector('.question2').textContent = randomQuestion.Frage;
        setDifficultyBlocks(randomQuestion.Schwierigkeitsgrad);
        const factDisplay2 = document.querySelector('.fact2');
        factDisplay2.textContent = randomQuestion.Fakt;
        const inputField = document.querySelector('.text-input2');
        inputField.value = '';
        const nextButton = document.querySelector('#next-button');
        nextButton.textContent = 'Einloggen';
        nextButton.disabled = false;
        nextButton.onclick = function() {
          if (!isAnswerChecked) {
            const userAnswer = inputField.value.trim();
            if (userAnswer === '') {
              console.log('DEBUG: Eintippmodus – No input provided.');
              return;
            }
            const isMatch = checkAnswer(userAnswer, randomQuestion.RichtigeAntwort);
            updateStats(randomQuestion, isMatch);
            const answerbox = document.querySelector('.answer-box');
            const factBox = document.querySelector('.fact-box');
            const factDisplay = document.querySelector('.fact2');
            if (isMatch) {
              answerbox.innerHTML = `<span class="highlight">Richtig!</span> <span class="highlight">${randomQuestion.RichtigeAntwort}</span>`;
              factBox.textContent = randomQuestion.Fakt;
              currentPlayer.points++;
              correctCount++;
              console.log('DEBUG: Eintippmodus – Answer correct.');
            } else {
              answerbox.innerHTML = `<span class="highlight">Antwort:</span> <span class="highlight">${randomQuestion.RichtigeAntwort}</span>`;
              factBox.textContent = randomQuestion.Fakt;
              factDisplay.classList.add('incorrect');
              console.log('DEBUG: Eintippmodus – Answer incorrect.');
            }
            factBox.style.display = 'block';
            const wrapper = document.querySelector('.next-button-wrapper');
            wrapper.style.display = 'flex';
            wrapper.style.transform = 'translateY(0)';
            wrapper.style.opacity = '1';
            isAnswerChecked = true;
            nextButton.textContent = 'Weiter';
            console.log('DEBUG: Eintippmodus – Fact displayed, button changed to "Weiter".');
          } else {
            console.log('DEBUG: Eintippmodus – Next-Button clicked, loading next question.');
            const currentPlayer = players[currentPlayerIndex];
            currentPlayer.questionsAnswered++;
            currentQuestionIndex++;
            questionsAsked++;
            localStorage.setItem('questionsAsked', questionsAsked);
            // Reset des Faktbereichs
            const factBox = document.querySelector('.fact-box');
            const wrapper = document.querySelector('.next-button-wrapper');
            wrapper.style.transform = 'translateY(100%)';
            wrapper.style.opacity = '0';
            nextButton.textContent = 'Einloggen';
            isAnswerChecked = false;
            nextQuestionHandler();
          }
        };
      }
    }

    window.loadQuestion = loadQuestion;
    
    // ====================================================
    // Handler für den separaten Weiter-Button im Auswahlmodus
    // ====================================================
    const nextButton2 = document.querySelector('#next-button2');
    if (nextButton2) {
      nextButton2.onclick = function() {
        document.querySelector('.results2').classList.remove('correct', 'wrong');
        document.querySelector('.next-button').classList.remove('correct-button', 'wrong-button');
        document.querySelector('.next-button-wrapper').classList.remove('correct', 'wrong');
        document.querySelector('.next-button2').classList.remove('correct-button', 'wrong-button');
        console.log('DEBUG: Next-Button2 (selection mode) clicked.');
        const currentPlayer = players[currentPlayerIndex];
        currentPlayer.questionsAnswered++;
        currentQuestionIndex++;
        questionsAsked++;
        localStorage.setItem('questionsAsked', questionsAsked);
      };
    }
    
    // ====================================================
    // Optionale zusätzliche Handler (falls benötigt)
    // ====================================================
    function handleNextClick() {
      hidebars();
      const inputField = document.querySelector('.text-input2');
      const nextButton = document.querySelector('#next-button');
      const factDisplay = document.querySelector('.fact');
      const factBox = document.querySelector('.fact-box');
      const randomQuestion = questions.find(q => q.Frage === document.querySelector('.question2').textContent);
      if (!randomQuestion) {
        console.error('DEBUG: Question not found.');
        return;
      }
      if (!isAnswerChecked) {
        const userAnswer = inputField.value.trim();
        if (userAnswer === '') return;
        const isMatch = checkAnswer(userAnswer, randomQuestion.RichtigeAntwort);
        updateStats(randomQuestion, isMatch);
        factDisplay.textContent = randomQuestion.Fakt;
        factDisplay.style.display = 'block';
        factBox.style.display = 'block';
        isAnswerChecked = true;
        nextButton.textContent = 'Weiter';
      } else {
        loadQuestion();
        nextButton.textContent = 'Einloggen';
        isAnswerChecked = false;
      }
    }
    
    const nextBtnEintipp = document.querySelector('.next-button2');
    if (nextBtnEintipp) {
      nextBtnEintipp.addEventListener('click', function() {
        console.log('DEBUG: Next-Button2 (for eintipp mode) clicked.');
        nextQuestionHandler();
      });
    }
    
    const showNextButton = () => {
      const wrapper = document.querySelector('.next-button-wrapper');
      wrapper.classList.add('correct');
      console.log('DEBUG: showNextButton() – Wrapper shown.');
    };
    
    document.querySelectorAll('.answer').forEach(button => {
      button.addEventListener('click', function() {
        showNextButton();
      });
    });
    
    console.log('DEBUG: Multi-Mehrspieler-Modus läuft');
    loadQuestion();
  });
  