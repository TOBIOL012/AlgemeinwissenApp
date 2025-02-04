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
        console.log("oioioi");
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








    

    



      




   

    
    
    
    
    // Wähle den Picker-Container und die einzelnen Picker-Items aus
    const pickerContainer = document.querySelector(".picker-container");
    const pickerItems = document.querySelectorAll(".picker-item");

    // Funktion, um das mittige Element hervorzuheben
function updateActiveItem() {
    console.log("Item:"); // Debugging
    const containerCenter = pickerContainer.scrollLeft + pickerContainer.offsetWidth / 2;

    let closestItem = null;
    let closestDistance = Infinity;
    

    pickerItems.forEach((item) => {
        console.log("Item:", item); // Debugging
        const itemCenter = item.offsetLeft + item.offsetWidth / 2;
        const distance = Math.abs(containerCenter - itemCenter);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestItem = item;
        }
    });

    // Setze die aktive Klasse und Farbe für alle Items zurück
    pickerItems.forEach((item) => {
        item.classList.remove("active");
        item.style.color = "#cfcfcf"; // Standardfarbe
    });

    // Füge die aktive Klasse und die neue Farbe dem nächstgelegenen Element hinzu
    if (closestItem) {
        closestItem.classList.add("active");
        closestItem.style.color = "#cfcfcf"; // Neue Farbe für das aktive Element
        console.log("Mittige Zahl:", closestItem.textContent); // Debugging
    }
}
    // Überwache das Scroll-Event im Picker-Container
    pickerContainer.addEventListener("scroll", () => {
        updateActiveItem(); // Aktualisiere die aktive Zahl beim Scrollen
    });


    
    




















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




document.addEventListener('DOMContentLoaded', function () {
    const pickerContainer = document.querySelector(".picker-container");
    const pickerItems = document.querySelectorAll(".picker-item");

    function updateActiveItem() {
        const containerCenter = pickerContainer.scrollLeft + pickerContainer.offsetWidth / 2;

        let closestItem = null;
        let closestDistance = Infinity;

        pickerItems.forEach((item) => {
            const itemCenter = item.offsetLeft + item.offsetWidth / 2;
            const distance = Math.abs(containerCenter - itemCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestItem = item;
            }
        });

        pickerItems.forEach((item) => {
            item.classList.remove("active", "active-2", "active-3", "active-4");
            item.style.color = "#cfcfcf"; // Standardfarbe
            item.style.opacity = "0"; // Unsichtbar machen
        });

        if (closestItem) {
            closestItem.classList.add("active");
            closestItem.style.color = "#cfcfcf";
            closestItem.style.opacity = "1";

            const closestIndex = Array.from(pickerItems).indexOf(closestItem);
            
            // **Links und rechts daneben als "active-2" setzen**
            if (pickerItems[closestIndex - 1]) {
                pickerItems[closestIndex - 1].classList.add("active-2");
                pickerItems[closestIndex - 1].style.color = "#BBBBBB";
                pickerItems[closestIndex - 1].style.opacity = "1";
            }
            if (pickerItems[closestIndex + 1]) {
                pickerItems[closestIndex + 1].classList.add("active-2");
                pickerItems[closestIndex + 1].style.color = "#BBBBBB";
                pickerItems[closestIndex + 1].style.opacity = "1";
            }

            // **Zwei Stellen daneben als "active-3" setzen**
            if (pickerItems[closestIndex - 2]) {
                pickerItems[closestIndex - 2].classList.add("active-3");
                pickerItems[closestIndex - 2].style.color = "#BBBBBB";
                pickerItems[closestIndex - 2].style.opacity = "1";
            }
            if (pickerItems[closestIndex + 2]) {
                pickerItems[closestIndex + 2].classList.add("active-3");
                pickerItems[closestIndex + 2].style.color = "#BBBBBB";
                pickerItems[closestIndex + 2].style.opacity = "1";
            }

            // **Drei Stellen daneben als "active-4" setzen**
            if (pickerItems[closestIndex - 3]) {
                pickerItems[closestIndex - 3].classList.add("active-4");
                pickerItems[closestIndex - 3].style.color = "#BBBBBB";
                pickerItems[closestIndex - 3].style.opacity = "1";
            }
            if (pickerItems[closestIndex + 3]) {
                pickerItems[closestIndex + 3].classList.add("active-4");
                pickerItems[closestIndex + 3].style.color = "#BBBBBB";
                pickerItems[closestIndex + 3].style.opacity = "1";
            }
        }
    }

    // **Setze die 5 als Startwert in der Mitte**
    function setInitialPickerPosition() {
        const targetItem = Array.from(pickerItems).find(item => item.textContent === "10");

        if (targetItem) {
            const scrollOffset = targetItem.offsetLeft - pickerContainer.offsetWidth / 2 + targetItem.offsetWidth / 2;
            pickerContainer.scrollLeft = scrollOffset;
            targetItem.classList.add("active");
            targetItem.style.color = "#cfcfcf";
            targetItem.style.opacity = "1";

            const targetIndex = Array.from(pickerItems).indexOf(targetItem);
            
            if (pickerItems[targetIndex - 1]) {
                pickerItems[targetIndex - 1].classList.add("active-2");
                pickerItems[targetIndex - 1].style.color = "#BBBBBB";
                pickerItems[targetIndex - 1].style.opacity = "1";
            }
            if (pickerItems[targetIndex + 1]) {
                pickerItems[targetIndex + 1].classList.add("active-2");
                pickerItems[targetIndex + 1].style.color = "#BBBBBB";
                pickerItems[targetIndex + 1].style.opacity = "1";
            }

            if (pickerItems[targetIndex - 2]) {
                pickerItems[targetIndex - 2].classList.add("active-3");
                pickerItems[targetIndex - 2].style.color = "#BBBBBB";
                pickerItems[targetIndex - 2].style.opacity = "1";
            }
            if (pickerItems[targetIndex + 2]) {
                pickerItems[targetIndex + 2].classList.add("active-3");
                pickerItems[targetIndex + 2].style.color = "#BBBBBB";
                pickerItems[targetIndex + 2].style.opacity = "1";
            }

            if (pickerItems[targetIndex - 3]) {
                pickerItems[targetIndex - 3].classList.add("active-4");
                pickerItems[targetIndex - 3].style.color = "#BBBBBB";
                pickerItems[targetIndex - 3].style.opacity = "1";
            }
            if (pickerItems[targetIndex + 3]) {
                pickerItems[targetIndex + 3].classList.add("active-4");
                pickerItems[targetIndex + 3].style.color = "#BBBBBB";
                pickerItems[targetIndex + 3].style.opacity = "1";
            }
        }
    }

    pickerContainer.addEventListener("scroll", updateActiveItem);

    // **Nach Laden der Seite ausführen**
    setTimeout(setInitialPickerPosition, 100);
});






