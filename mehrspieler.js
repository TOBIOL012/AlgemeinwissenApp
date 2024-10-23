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

    function updateDeleteButtons() {
        const inputContainers = spielerContainer.getElementsByClassName('input-container');
        const filledInputs = Array.from(spielerContainer.getElementsByClassName('spieler-name'))
            .filter(input => input.value.trim() !== '');

        Array.from(inputContainers).forEach((container) => {
            const deleteButton = container.querySelector('.kreuz');
            const inputField = container.querySelector('.spieler-name');
            if (deleteButton) {
                if (inputField.value.trim() !== '' || filledInputs.length > 2) {
                    deleteButton.style.display = 'inline';
                } else {
                    deleteButton.style.display = 'none';
                }
            }
        });
    }

    function updateDifficultyButtons() {
        const inputContainers = spielerContainer.getElementsByClassName('input-container');
        Array.from(inputContainers).forEach((container, index) => {
            const difficultyButton = container.querySelector('.schwierigkeit-button');
            if (difficultyButton) {
                if (index === inputContainers.length - 1) {
                    difficultyButton.textContent = '';
                    difficultyButton.style.color = 'inherit';
                    difficultyButton.disabled = true;
                } else if (difficultyButton.textContent === '' || difficultyButton.disabled) {
                    difficultyButton.textContent = 'Leicht';
                    difficultyButton.style.color = difficultyColors['Leicht'];
                    difficultyButton.disabled = false;
                }
            }
        });
    }

    function addNewInputField() {
        const inputContainer = document.createElement('div');
        inputContainer.classList.add('input-container');

        const inputWrapper = document.createElement('div');
        inputWrapper.classList.add('input-wrapper');

        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.className = 'spieler-name';
        inputField.maxLength = 15;

        const deleteButton = document.createElement('img');
        deleteButton.className = 'kreuz';
        deleteButton.src = 'kreuz.png';
        deleteButton.alt = 'Bild';
        deleteButton.style.cursor = 'pointer';
        deleteButton.style.display = 'none';
        deleteButton.addEventListener('click', function() {
            handleDelete(inputContainer, inputField);
        });

        inputWrapper.appendChild(inputField);
        inputWrapper.appendChild(deleteButton);

        const difficultyButton = document.createElement('button');
        difficultyButton.className = 'schwierigkeit-button';
        difficultyButton.textContent = 'Leicht';
        difficultyButton.style.color = difficultyColors['Leicht'];

        inputContainer.appendChild(inputWrapper);
        inputContainer.appendChild(difficultyButton);
        spielerContainer.appendChild(inputContainer);

        addDifficultyButtonFunctionality(difficultyButton);
        updatePlaceholders();
        updateDeleteButtons();
        updateDifficultyButtons();

        inputField.addEventListener('input', function() {
            deleteButton.style.display = 'inline';
            updateContinueButtonState();
            if (spielerContainer.lastElementChild === inputContainer) {
                if (spielerContainer.getElementsByClassName('input-container').length < 15) {
                    addNewInputField();
                }
            }
        });

        inputField.addEventListener('blur', function() {
            if (inputField.value.trim() === '') {
                handleDelete(inputContainer, inputField);
            }
        });
    }

    function handleDelete(inputContainer, inputField) {
        const filledInputs = Array.from(spielerContainer.getElementsByClassName('spieler-name'))
            .filter(input => input.value.trim() !== '');

        if (filledInputs.length > 2) {
            spielerContainer.removeChild(inputContainer);
        } else {
            inputField.value = '';
        }
        updatePlaceholders();
        updateDeleteButtons();
        updateDifficultyButtons();
        updateContinueButtonState();
    }

    // Add initial input fields
    for (let i = 0; i < 2; i++) {
        addNewInputField();
    }

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
                    return;
                }
                if (playerName === '') {
                    allFilled = false;
                } else {
                    const difficulty = input.closest('.input-container').querySelector('.schwierigkeit-button').textContent;
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

    // Kategorie-Seite: Kategorie wählen und speichern
    const categoryImages = document.querySelectorAll('img[data-category]');
    const continueButton = document.getElementById('next-button-kategorien');
    const continueButton1 = document.getElementById('next-button-kategorien');
    let selectedCategories = JSON.parse(localStorage.getItem('selectedCategories')) || [];

    function updateContinueButtonState() {
        const inputFields = spielerContainer.getElementsByClassName('spieler-name');
        const firstTwoFilled = Array.from(inputFields).slice(0, 2).every(input => input.value.trim() !== '');

        if (continueButton) {
            const shouldDisable = !firstTwoFilled;

            continueButton1.style.backgroundColor = shouldDisable ? 'gray' : '#f1730c';
            continueButton1.style.boxShadow = shouldDisable ? '0px 6px 0px 0px rgb(38, 46, 49)' : '0px 6px 0px 0px rgb(146, 65, 7)';
            continueButton1.disabled = shouldDisable;
        }
    }

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

    // Add event listeners to input fields to update button state
    const inputFields = spielerContainer.getElementsByClassName('spieler-name');
    Array.from(inputFields).forEach(input => {
        input.addEventListener('input', updateContinueButtonState);
    });

    // Initial update of the button state
    updateContinueButtonState();
});