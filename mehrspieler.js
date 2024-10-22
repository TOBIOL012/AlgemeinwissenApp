document.addEventListener('DOMContentLoaded', function() {
    const spielerContainer = document.getElementById('spieler-container');
    const difficulties = ['Leicht', 'Mittel', 'Schwer', 'Extrem'];
    const difficultyColors = {
        'Leicht': '#5EFC8D',
        'Mittel': '#E5E55E',
        'Schwer': '#E58A5E',
        'Extrem': '#E55E5E'
    };

    function addDifficultyButtonFunctionality(button) {
        button.addEventListener('click', function() {
            let currentDifficulty = button.textContent;
            let currentIndex = difficulties.indexOf(currentDifficulty);
            let nextIndex = (currentIndex + 1) % difficulties.length;
            button.textContent = difficulties[nextIndex];
            button.style.color = difficultyColors[difficulties[nextIndex]];
        });
    }

    function updatePlaceholders() {
        const inputFields = spielerContainer.getElementsByClassName('spieler-name');
        Array.from(inputFields).forEach((input, index) => {
            input.placeholder = `Spieler ${index + 1}`;
        });
    }

    function addNewInputField() {
        const inputContainer = document.createElement('div');
        inputContainer.classList.add('input-container');

        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.className = 'spieler-name';
        inputField.maxLength = 15;

        const difficultyButton = document.createElement('button');
        difficultyButton.className = 'schwierigkeit-button';
        difficultyButton.textContent = 'Leicht'; // Default difficulty
        difficultyButton.style.color = difficultyColors['Leicht'];

        const deleteButton = document.createElement('img');
        deleteButton.className = 'kreuz';
        deleteButton.src = 'kreuz.png';
        deleteButton.alt = 'Bild';
        deleteButton.style.position = 'absolute';
        deleteButton.style.right = '10px';
        deleteButton.style.cursor = 'pointer';
        deleteButton.addEventListener('click', function() {
            const inputContainers = spielerContainer.getElementsByClassName('input-container');
            if (inputContainers.length > 1) {
                spielerContainer.removeChild(inputContainer);
                updatePlaceholders();
            }
        });

        inputContainer.appendChild(inputField);
        inputContainer.appendChild(difficultyButton);
        inputContainer.style.position = 'relative';
        inputContainer.appendChild(deleteButton);
        spielerContainer.appendChild(inputContainer);

        addDifficultyButtonFunctionality(difficultyButton);
        updatePlaceholders();

        inputField.addEventListener('input', function() {
            if (inputField.value.trim() !== '' && spielerContainer.lastElementChild === inputContainer) {
                if (spielerContainer.getElementsByClassName('input-container').length < 15) {
                    addNewInputField();
                }
            }
        });

        inputField.addEventListener('blur', function() {
            const inputContainers = spielerContainer.getElementsByClassName('input-container');
            if (inputField.value.trim() === '' && inputContainers.length > 1) {
                spielerContainer.removeChild(inputContainer);
                updatePlaceholders();
            }
        });
    }

    // Initiales Input-Feld hinzufügen
    addNewInputField();

    // Weiter-Button zur Kategorienseite weiterleiten
    const nextButton = document.getElementById('next-button');
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            const inputFields = document.querySelectorAll('.spieler-name');
            let allFilled = true;
            let players = [];

            inputFields.forEach((input, index) => {
                const playerName = input.value.trim();
                if (playerName === '' && index === inputFields.length - 1) {
                    return; // Skip the last empty input field
                }
                if (playerName === '') {
                    allFilled = false;
                } else {
                    const difficulty = input.nextElementSibling.textContent;
                    const questionCountElement = document.getElementById('question-count');
                    if (questionCountElement) {
                        const questionCount = parseInt(questionCountElement.textContent);
                        players.push({ name: playerName, difficulty: difficulty, questionCount: questionCount });
                    }
                }
            });

            if (allFilled) {
                localStorage.setItem('players', JSON.stringify(players));
                localStorage.setItem('isMultiplayer', 'true');
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
    let questionCount = 5;
    if (questionCountElement) {
        questionCountElement.textContent = questionCount;
    }

    if (decreaseButton) {
        decreaseButton.addEventListener('click', function() {
            if (questionCount > 5) {
                questionCount--;
                if (questionCountElement) {
                    questionCountElement.textContent = questionCount;
                }
            }
        });
    }

    if (increaseButton) {
        increaseButton.addEventListener('click', function() {
            if (questionCount < 50) {
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
        button.style.color = difficultyColors[button.textContent];
        addDifficultyButtonFunctionality(button);
    });

    // Kategorie-Seite: Kategorie wählen und speichern
    const categoryImages = document.querySelectorAll('img[data-category]');
    const continueButton = document.getElementById('next-button-kategorien');
    let selectedCategories = JSON.parse(localStorage.getItem('selectedCategories')) || [];

    function updateContinueButtonState() {
        if (continueButton) {
            continueButton.style.backgroundColor = selectedCategories.length === 0 ? 'gray' : '#e48d45';
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
                localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
                window.location.href = 'fragen-mehrspieler.html';
            }
        });
    }
});