document.addEventListener('DOMContentLoaded', function () {
    const spielerContainer = document.getElementById('spieler-container');
    const addPlayerButton = document.getElementById('add-player-button'); // Button für Spieler hinzufügen
    const maxPlayers = 15; // Maximale Anzahl von Spielern
    const difficulties = ['Leicht', 'Mittel', 'Schwer', 'Extrem'];
    const difficultyColors = {
        'Leicht': '#5EFC8D',
        'Mittel': '#E5E55E',
        'Schwer': '#E58A5E',
        'Extrem': '#E55E5E'
    };

    function addDifficultyButtonFunctionality(button) {
        button.addEventListener('click', function () {
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
        Array.from(inputContainers).forEach((container) => {
            const deleteButton = container.querySelector('.kreuz');
            const inputField = container.querySelector('.spieler-name');
            if (deleteButton) {
                if (inputContainers.length > 2) {
                    deleteButton.style.display = 'inline';
                } else {
                    deleteButton.style.display = inputField.value.trim() !== '' ? 'inline' : 'none';
                }
            }
        });
    }

    function updateDifficultyButtons() {
        const inputContainers = spielerContainer.getElementsByClassName('input-container');
        Array.from(inputContainers).forEach((container) => {
            const difficultyButton = container.querySelector('.schwierigkeit-button');
            if (difficultyButton) {
                if (difficultyButton.textContent === '' || difficultyButton.disabled) {
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
        deleteButton.addEventListener('click', function () {
            handleDelete(inputContainer, inputField);
        });
    
        // Lösche Block nur beim Verlassen des Feldes (Blur)
        inputField.addEventListener('blur', function () {
            const inputContainers = spielerContainer.getElementsByClassName('input-container');
            if (inputContainers.length > 2 && inputField.value.trim() === '') {
                spielerContainer.removeChild(inputContainer);
                updatePlaceholders();
                updateDeleteButtons();
                updateDifficultyButtons();
                updateContinueButtonState();
            }
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
    
        inputField.addEventListener('input', function () {
            updateContinueButtonState();
            updateDeleteButtons(); // Aktualisiere das Kreuz-Button-Display
        });
    }








    

    const sliderTrack = document.getElementById('sliderTrack');
    const min = 5;
    const max = 50;
    const step = 5;
    let currentIndex = 0;

    for (let i = min; i <= max; i += step) {
        const item = document.createElement('div');
        item.className = 'slider-item';
        item.textContent = i;
        sliderTrack.appendChild(item);
    }

    const items = Array.from(document.querySelectorAll('.slider-item'));

    function updateActiveItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });

        const offset = (index * (items[0].offsetWidth + 20)) - (sliderTrack.parentElement.offsetWidth / 2 - items[0].offsetWidth / 2);
        sliderTrack.style.transform = `translateX(${-offset}px)`;
    }

    updateActiveItem(currentIndex);

    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    sliderTrack.addEventListener('mousedown', startDrag);
    sliderTrack.addEventListener('touchstart', startDrag);

    sliderTrack.addEventListener('mousemove', drag);
    sliderTrack.addEventListener('touchmove', drag);

    sliderTrack.addEventListener('mouseup', endDrag);
    sliderTrack.addEventListener('touchend', endDrag);
    sliderTrack.addEventListener('mouseleave', endDrag);

    function startDrag(event) {
        isDragging = true;
        startX = getPositionX(event);
        sliderTrack.style.transition = 'none';
        prevTranslate = currentTranslate;
    } 

    function drag(event) {
        if (!isDragging) return;
        const currentPosition = getPositionX(event);
        const movedBy = currentPosition - startX;
        currentTranslate = prevTranslate + movedBy;
        sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
    }

    function endDrag() {
        isDragging = false;
        sliderTrack.style.transition = 'transform 0.3s';

        const itemWidth = items[0].offsetWidth + 20;
        currentIndex = Math.round(-currentTranslate / itemWidth);

        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex > items.length - 1) currentIndex = items.length - 1;

        updateActiveItem(currentIndex);
    }

    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }





















    function handleDelete(inputContainer, inputField) {
        const inputContainers = spielerContainer.getElementsByClassName('input-container');
        if (inputContainers.length > 2) {
            // Löschen des gesamten Blocks
            spielerContainer.removeChild(inputContainer);
        } else if (inputField.value.trim() !== '') {
            // Löschen des Textes, wenn nur zwei Blöcke vorhanden sind
            inputField.value = '';
        }

        updatePlaceholders();
        updateDeleteButtons();
        updateDifficultyButtons();
        updateContinueButtonState();
    }

    // Spieler hinzufügen Button Logik
    if (addPlayerButton) {
        addPlayerButton.addEventListener('click', function () {
            const inputContainers = spielerContainer.getElementsByClassName('input-container');
            if (inputContainers.length < maxPlayers) {
                addNewInputField();
            }
            if (inputContainers.length >= maxPlayers) {
                addPlayerButton.disabled = true;
                addPlayerButton.style.cursor = 'not-allowed';
            }
        });
    }

    // Weiter-Button zur Kategorienseite weiterleiten
    const nextButton = document.getElementById('next-button');
    if (nextButton) {
        nextButton.addEventListener('click', function () {
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
        decreaseButton.addEventListener('click', function () {
            if (questionCount > 5) {
                questionCount--;
                if (questionCountElement) {
                    questionCountElement.textContent = questionCount;
                }
            }
        });
    }

    if (increaseButton) {
        increaseButton.addEventListener('click', function () {
            if (questionCount < 50) {
                questionCount++;
                if (questionCountElement) {
                    questionCountElement.textContent = questionCount;
                }
            }
        });
    }

    function updateContinueButtonState() {
        const inputFields = spielerContainer.getElementsByClassName('spieler-name');
        const firstTwoFilled = Array.from(inputFields).slice(0, 2).every(input => input.value.trim() !== '');

        if (nextButton) {
            const shouldDisable = !firstTwoFilled;
            nextButton.style.backgroundColor = shouldDisable ? 'gray' : '#f1730c';
            nextButton.style.boxShadow = shouldDisable ? '0px 6px 0px 0px rgb(38, 46, 49)' : '0px 6px 0px 0px rgb(146, 65, 7)';
            nextButton.disabled = shouldDisable;
        }
    }

    // Add initial input fields
    for (let i = 0; i < 2; i++) {
        addNewInputField();
    }
    document.documentElement.style.height = 'auto';
    document.body.style.height = 'auto';
    // Initial Update der Button-States
    updateContinueButtonState();
});