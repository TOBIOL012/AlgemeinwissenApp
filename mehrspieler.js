document.addEventListener('DOMContentLoaded', function() {
    const addPlayerButton = document.getElementById('add-player-button');
    const removePlayerButton = document.getElementById('remove-player-button');
    const spielerContainer = document.getElementById('spieler-container');
    const difficulties = ['Leicht', 'Mittel', 'Schwer', 'Extrem'];
    const difficultyColors = {
        'Leicht': '#5EFC8D',
        'Mittel': '#E5E55E',
        'Schwer': '#E58A5E',
        'Extrem': '#E55E5E'
    };

    // Standardnamen für Spieler
    const defaultNames = ['Spieler 1', 'Spieler 2', 'Spieler 3', 'Spieler 4', 'Spieler 5', 'Spieler 6', 'Spieler 7', 'Spieler 8', 'Spieler 9', 'Spieler 10', 'Spieler 11', 'Spieler 12', 'Spieler 13', 'Spieler 14', 'Spieler 15'];

    function addDifficultyButtonFunctionality(button) {
        button.addEventListener('click', function() {
            let currentDifficulty = button.textContent;
            let currentIndex = difficulties.indexOf(currentDifficulty);
            let nextIndex = (currentIndex + 1) % difficulties.length;
            button.textContent = difficulties[nextIndex];
            button.style.color = difficultyColors[difficulties[nextIndex]]; // Farbe ändern
        });
    }

    if (addPlayerButton) {
        addPlayerButton.addEventListener('click', function() {
            const inputContainers = spielerContainer.getElementsByClassName('input-container');
            if (inputContainers.length < 15) { // Maximal 15 Spieler insgesamt
                const inputContainer = document.createElement('div');
                inputContainer.classList.add('input-container');

                const inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.className = 'spieler-name';
                // Standardnamen basierend auf der Anzahl der vorhandenen Spieler setzen
                const playerCount = inputContainers.length + 1;
                inputField.placeholder = `Spieler ${playerCount}`;
                inputField.value = defaultNames[inputContainers.length] || `Spieler ${playerCount}`;

                const difficultyButton = document.createElement('button');
                difficultyButton.className = 'schwierigkeit-button';
                difficultyButton.textContent = 'Leicht';
                difficultyButton.style.color = difficultyColors['Leicht']; // Farbe für "Leicht" setzen

                inputContainer.appendChild(inputField);
                inputContainer.appendChild(difficultyButton);
                spielerContainer.appendChild(inputContainer);

                // Schwierigkeitsbutton-Funktionalität hinzufügen
                addDifficultyButtonFunctionality(difficultyButton);
            } else {
                alert('Die maximale Anzahl von 15 Spielern ist erreicht.');
            }
        });
    }

    // Funktion zum Entfernen von Spielerfeldern
    if (removePlayerButton) {
        removePlayerButton.addEventListener('click', function() {
            const inputContainers = spielerContainer.getElementsByClassName('input-container');
            if (inputContainers.length > 2) { // Mindestens zwei Spielerfelder müssen vorhanden sein
                spielerContainer.removeChild(inputContainers[inputContainers.length - 1]);
            }
        });
    }

    // Weiter-Button zur Kategorienseite weiterleiten
    const nextButton = document.getElementById('next-button');
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            // Überprüfen, ob alle Spielerinput-Felder ausgefüllt sind
            const inputFields = document.querySelectorAll('.spieler-name');
            let allFilled = true;
            inputFields.forEach(input => {
                if (input.value.trim() === '') {
                    allFilled = false;
                }
            });

            if (allFilled) {
                // Spielerinformationen speichern
                let players = [];
                inputFields.forEach((input, index) => {
                    const playerName = input.value.trim();
                    const difficulty = input.nextElementSibling.textContent;
                    const questionCountElement = document.getElementById('question-count');
                    if (questionCountElement) {
                        const questionCount = parseInt(questionCountElement.textContent);
                        players.push({ name: playerName, difficulty: difficulty, questionCount: questionCount });
                    }
                });
                localStorage.setItem('players', JSON.stringify(players));
                localStorage.setItem('isMultiplayer', 'true'); // Mehrspielermodus speichern
                window.location.href = 'kategorien-mehrspieler.html';
            } else {
                alert('Bitte trage für alle Spieler einen Namen ein.');
            }
        });
    }

    // Funktion des Frage-Reglers
    const decreaseButton = document.getElementById('decrease-button');
    const increaseButton = document.getElementById('increase-button');
    const questionCountElement = document.getElementById('question-count');
    let questionCount = 10; // Anfangsanzahl der Fragen auf 10 setzen
    if (questionCountElement) {
        questionCountElement.textContent = questionCount;
    }

    if (decreaseButton) {
        decreaseButton.addEventListener('click', function() {
            if (questionCount > 5) {  // Verhindert, dass die Anzahl der Fragen unter 5 fällt
                questionCount--;
                if (questionCountElement) {
                    questionCountElement.textContent = questionCount;
                }
            }
        });
    }

    if (increaseButton) {
        increaseButton.addEventListener('click', function() {
            if (questionCount < 50) {  // Verhindert, dass die Anzahl der Fragen über 50 steigt
                questionCount++;
                if (questionCountElement) {
                    questionCountElement.textContent = questionCount;
                }
            }
        });
    }

    // Initiale Funktionalität für vorhandene Schwierigkeitsbuttons hinzufügen
    const initialDifficultyButtons = document.querySelectorAll('.schwierigkeit-button');
    initialDifficultyButtons.forEach(button => {
        button.style.color = difficultyColors[button.textContent]; // Anfangsfarbe setzen
        addDifficultyButtonFunctionality(button);
    });

    // Kategorie-Seite: Kategorie wählen und speichern
    const categoryImages = document.querySelectorAll('img[data-category]');
    const continueButton = document.getElementById('next-button-kategorien');
    let selectedCategories = JSON.parse(localStorage.getItem('selectedCategories')) || [];

    function updateContinueButtonState() {
        if (continueButton) {
            continueButton.style.backgroundColor = selectedCategories.length === 0 ? 'gray' : '#e48d45';
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
                localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories)); // Speichere alle ausgewählten Kategorien
                window.location.href = 'fragen-mehrspieler.html';
            }
        });
    }

    // Füge Standardnamen zu den bereits vorhandenen Input-Feldern hinzu
    const inputContainers = spielerContainer.getElementsByClassName('input-container');
    for (let i = 0; i < inputContainers.length; i++) {
        const inputField = inputContainers[i].querySelector('.spieler-name');
        if (inputField) {
            inputField.value = defaultNames[i] || `Spieler ${i + 1}`;
        }
    }
});