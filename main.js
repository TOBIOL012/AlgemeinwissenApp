document.addEventListener('DOMContentLoaded', function() {
    const factDisplay = document.querySelector('.fact');
    const categoryImages = document.querySelectorAll('img[data-category]');
    const continueButton = document.getElementById('next-button');
    const wrapper = document.querySelector('.results');
    const correctAnswerDisplay = document.querySelector('.correct-answer');
    let selectedCategories = JSON.parse(localStorage.getItem('selectedCategories')) || [];

    function updateCoinText() {
        const coinTextElements = document.querySelectorAll('.coin-text');
        const totalCoins = parseInt(localStorage.getItem('totalCoins') || '0', 10);

        coinTextElements.forEach(element => {
            element.textContent = totalCoins;
        });
    }

    function updateXPText() {
        const xpElement = document.getElementById('xp-total');
        const totalXP = parseInt(localStorage.getItem('totalXP') || '0', 10);
        if (xpElement) {
            xpElement.textContent = totalXP;
        }
    }

    function updateStreakText() {
        const streakElement = document.querySelector('.Streak span');
        const streakCount = parseInt(localStorage.getItem('streakCount') || '0', 10);
        if (streakElement) {
            streakElement.textContent = streakCount;
        }
    }

    if (window.location.pathname.endsWith('profil.html')) {
        updateCoinText();
        updateXPText();
        updateStreakText();
    }

    function updateContinueButtonState() {
        if (continueButton) {
            const rootStyles = getComputedStyle(document.documentElement);
            const bgColor = rootStyles.getPropertyValue('--disabled-background').trim();
            const shadowColor = rootStyles.getPropertyValue('--disabled-shadow').trim();
            continueButton.style.backgroundColor = selectedCategories.length === 0 ? bgColor : '';
            continueButton.style.boxShadow = selectedCategories.length === 0 ? `0px 6px 0px 0px ${shadowColor}` : '';
            continueButton.disabled = selectedCategories.length === 0;
        } 
    }

    updateContinueButtonState();

    categoryImages.forEach(img => {
        const parent = img.parentElement;
        img.style.scale = "1";
        img.style.opacity = "1";
        setTimeout(() => {
            img.style.transition = "none";
        }, 400);
        const category = img.getAttribute('data-category');
        img.style.opacity = selectedCategories.includes(category) ? 1.0 : 0.5;
        if (selectedCategories.includes(category)){
            const hacken = document.createElement('img');
                    parent.appendChild(hacken);
                    hacken.className = 'hacken';
                    hacken.style.opacity = "0";
                    hacken.src = "https://img.icons8.com/FFFFFF/metro/50/checkmark.png";
                    setTimeout(() => {
                        hacken.style.opacity = "1";
                        hacken.style.scale = "1";
                    }, 200);
        }

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
                    const hackenElement = parent.querySelector('.hacken');
                    if (hackenElement) {
                        hackenElement.remove();
                    }
                    this.style.opacity = 0.5;
                } else {
                    selectedCategories.push(category);
                    const hacken = document.createElement('img');
                    parent.appendChild(hacken);
                    hacken.className = 'hacken';
                    hacken.src = "https://img.icons8.com/FFFFFF/metro/50/checkmark.png";
                    hacken.style.opacity = "0";
                    setTimeout(() => {
                        hacken.style.opacity = "1";
                        hacken.style.scale = "1";
                    }, 40);
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
                localStorage.removeItem('questionsAsked');
                localStorage.removeItem('correctCount');
                if (localStorage.getItem("isMultiplayer") == "true"){
                    localStorage.setItem("isMultiplayer" , "false")
                    window.location.href = 'fragen-mehrspieler.html';
                } else {
                    window.location.href = 'Schwierigkeiten.html';
                }
            }
        });
    }

    const difficultyButtons = document.querySelectorAll('.difficulty-button1, .difficulty-button2, .difficulty-button3, .difficulty-button4, .difficulty-button5');

    difficultyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedDifficulty = this.getAttribute('data-difficulty');
            localStorage.setItem('selectedDifficulty', selectedDifficulty === 'alle' ? 'selectedDifficulty' : selectedDifficulty);

            if (['schwer', 'extrem', 'expert'].includes(selectedDifficulty)) {
                window.location.href = 'index2.html';
            } else {
                window.location.href = 'index.html';
            }
        });
    });

    let currentQuestionIndex = 0;
    let correctCount = 0;
    let askedQuestions = [];
    const totalQuestions = 15;

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
                    ...mittelQuestions
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

        for (let i = 0; i < difficultyLevel; i++) {
            const block = document.createElement('div');
            block.classList.add('difficulty-block', difficulty);
            difficultyContainer.appendChild(block);
        }
    }

    function updateProgressBar() {
        const percentage = (currentQuestionIndex / totalQuestions) * 100;
        const progressBar = document.querySelector('.progress');
        if (progressBar) {
            progressBar.style.width = `${percentage}%`;
        }
    }

    function updateCategoryDisplay(category) {
        const categoryTextElement = document.querySelector('.category-text');
        if (categoryTextElement) {
            categoryTextElement.textContent = category;
        }
    }

    function saveIncorrectQuestion(question) {
        let incorrectQuestions = JSON.parse(localStorage.getItem('incorrectQuestions')) || [];
        
        // Überprüfen, ob die Frage bereits gespeichert ist, um Duplikate zu vermeiden
        const exists = incorrectQuestions.some(q => q.Frage === question.Frage);
        if (!exists) {
            incorrectQuestions.push({
                Frage: question.Frage,
                RichtigeAntwort: question.RichtigeAntwort,
                Antworten: question.Antworten,
                Kategorie: question.Kategorie,
                Schwierigkeitsgrad: question.Schwierigkeitsgrad,
                Fakt: question.Fakt
            });
            localStorage.setItem('incorrectQuestions', JSON.stringify(incorrectQuestions));
        }
        console.log(incorrectQuestions);
    }

    function loadQuestion() {
        if (currentQuestionIndex >= totalQuestions) {
            localStorage.setItem('correctCount', correctCount);
            window.location.href = 'belohnung.html';
            return;
        }
    
        const randomQuestion = getRandomQuestion();
        if (!randomQuestion) {
            alert('Keine Fragen für die ausgewählte Kategorie oder Schwierigkeit gefunden.');
            window.location.href = 'Kategorien.html';
            return;
        }
    
        console.log('Random Question:', randomQuestion);
    
        if (!randomQuestion.Antworten || randomQuestion.Antworten.length < 4) {
            console.error('Antworten fehlen oder sind unvollständig:', randomQuestion);
            return;
        }
    
        if (document.querySelector('.question')) {
            document.querySelector('.question').textContent = randomQuestion.Frage;
        }

        
        updateCategoryDisplay(randomQuestion.Kategorie);
        setDifficultyBlocks(randomQuestion.Schwierigkeitsgrad);


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
                const isMatch = this.textContent === randomQuestion.RichtigeAntwort;
                updateStats(randomQuestion, isMatch);
    
                answers.forEach(btn => btn.disabled = true);

                
    
                if (this.textContent === randomQuestion.RichtigeAntwort) {
                    localStorage.setItem("mission-" + randomQuestion.Kategorie.toLowerCase(), (parseInt(localStorage.getItem("mission-" + randomQuestion.Kategorie.toLowerCase())) || 0) + 1);
                    localStorage.setItem("mission-" + randomQuestion.Kategorie.toLowerCase() + "1", (parseInt(localStorage.getItem("mission-" + randomQuestion.Kategorie.toLowerCase() + "1")) || 0) + 1);
                    localStorage.setItem("mission-question1", (parseInt(localStorage.getItem("mission-question1")) || 0) + 1);
                    this.classList.add('correct-answer');
                    document.querySelector('.results').classList.add('correct');
                    document.querySelector('.next-button').classList.add('correct-button');
                    factDisplay.textContent = randomQuestion.Fakt;
                    wrapper.classList.add('correct');
                    factDisplay.style.display = 'block';
                    correctCount++;
                } else {
                    this.classList.add('wrong-answer');
                    factDisplay.style.display = 'block';
                    factDisplay.textContent = randomQuestion.Fakt;
                    document.querySelector('.results').classList.add('wrong');
                    document.querySelector('.next-button').classList.add('wrong-button');
                    saveIncorrectQuestion(randomQuestion);
                }
    
                answers.forEach(btn => {
                    if (btn.textContent === randomQuestion.RichtigeAntwort) {
                        btn.classList.add('correct-answer');
                    }
                });
    
                document.querySelector('.results').style.display = 'block';
                currentQuestionIndex++;
                updateProgressBar();
            }, { once: true });
        });

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
    }
    if (window.location.pathname.endsWith('index.html')) {
        if (document.querySelector('.next-button')) {
            document.querySelector('.next-button').addEventListener('click', loadQuestion);
        }
    }

    if (window.location.pathname.endsWith('index.html')) {
        loadQuestion();
    }

});
















function toggleContent(contentId) {
    const topBar = document.getElementById('top-bar');
    const contentDiv = document.getElementById('top-bar-content');

    if (contentDiv.dataset.activeContent === contentId) {
        // Verstecke den Inhalt und entferne die Klasse "expanded"
        contentDiv.style.display = 'none';
        contentDiv.dataset.activeContent = '';
        contentDiv.style.scale = "0.3";
        contentDiv.style.transform = "";
        topBar.classList.remove('expanded');
    } else {
        // Zeige den Inhalt und füge die Klasse "expanded" hinzu
        contentDiv.innerHTML = getContent(contentId);
        if (contentId == "streak-content"){
            contentDiv.style.transformOrigin = "top left";
        } else if (contentId == "coins-content"){
            contentDiv.style.transformOrigin = "top center";
        } else if (contentId == "xp-content"){
            contentDiv.style.transformOrigin = "top center";
        } else {
            contentDiv.style.transformOrigin = "top right";
        }
        setTimeout(() => {
            contentDiv.style.scale = "1";
            contentDiv.style.transform = "";
        }, 1);
        contentDiv.style.display = 'block';
        contentDiv.dataset.activeContent = contentId;
        topBar.classList.add('expanded');
    }
}



function getContent(contentId) {
    if (contentId === 'streak-content') {
        if (localStorage.getItem("uid")){
            if (window.userData.higheststreak == null){
                setTimeout(() => {
                    document.querySelector(".internet-img").style.scale = "1";
                }, 10);
                return `
                <div class="nointernet">
                    <img class="internet-img" src="internet.png" style="scale:0.3;">
                    <div class="internet-text">Kein Internet</div>
                </div>
            `;
            } else {
                return `
                <div class="streak-all">
                <div class="streak-header">
                    <p>Streak Übersicht</p>
                    <button class="streak-button">
                        <img src="streak-icon.png" alt="Details" class="streak-icon">
                    </button>
                </div>
                ${generateWeekCalendar()}
                </div>
            `;
            }
            
        } else {
            setTimeout(() => {
                const loginButton = document.querySelector(".login-button");
                if (loginButton) {
                    loginButton.addEventListener('click', function() {
                        const frames = document.querySelectorAll("div[id='iframe']");
                        frames.forEach(frame => frame.style.display = "none");
                        frames[4].style.display = "flex";
                    });

                }
            }, 10);
            return `
                <div class="login-container">
                    <div class="login-button-text">Streak erst mit Account möglich</div>
                    <div class="login-button">Account Erstellen</div>
                </div>
            `;
        }
    }
    if (contentId === 'xp-content') {
        
        if (localStorage.getItem("uid")){
            if (window.userData.higheststreak == null){
                setTimeout(() => {
                    document.querySelector(".internet-img").style.scale = "1";
                }, 10);
                return `
                <div class="nointernet">
                    <img class="internet-img" src="internet.png" style="scale:0.3;">
                    <div class="internet-text">Kein Internet</div>
                </div>
            `;
            } else {
                return `
            <div class="XP-Pfad-Container">
                <a href="xp-pfad.html" class="xp-pfad-button">XP-Pfad ></a>
            </div>
            `;
            }
            
        } else {
            setTimeout(() => {
                const loginButton = document.querySelector(".login-button");
                if (loginButton) {
                    loginButton.addEventListener('click', function() {
                        const frames = document.querySelectorAll("div[id='iframe']");
                        frames.forEach(frame => frame.style.display = "none");
                        frames[4].style.display = "flex";
                    });

                }
            }, 100);
            return `
                <div class="login-container">
                    <div class="login-button-text">Streak erst mit Account möglich</div>
                    <div class="login-button">Account Erstellen</div>
                </div>
            `;
        }
    }
    if (contentId === 'coins-content') {
        if (localStorage.getItem("uid")){
            if (window.userData.higheststreak == null){
                setTimeout(() => {
                    document.querySelector(".internet-img").style.scale = "1";
                }, 100);
                return `
                <div class="nointernet">
                    <img class="internet-img" src="internet.png" style="scale:0.3;">
                    <div class="internet-text">Kein Internet</div>
                </div>
            `;
            } else {
                return `
            <div class="XP-Pfad-Container"></div>
            `;
            }
            
        } else {
            setTimeout(() => {
                const loginButton = document.querySelector(".login-button");
                if (loginButton) {
                    loginButton.addEventListener('click', function() {
                        const frames = document.querySelectorAll("div[id='iframe']");
                        frames.forEach(frame => frame.style.display = "none");
                        frames[4].style.display = "flex";
                    });

                }
            }, 100);
            return `
                <div class="login-container">
                    <div class="login-button-text">Streak erst mit Account möglich</div>
                    <div class="login-button">Account Erstellen</div>
                </div>
            `;
        }
    }
    if (contentId === 'notifications-content') {
        if (localStorage.getItem("uid")){
            if (window.userData.higheststreak == null){
                setTimeout(() => {
                    document.querySelector(".internet-img").style.scale = "1";
                }, 100);
                return `
                <div class="nointernet">
                    <img class="internet-img" src="internet.png" style="scale:0.3;">
                    <div class="internet-text">Kein Internet</div>
                </div>
            `;
            } else {
                return `
            <div class="XP-Pfad-Container"></div>
            `;
            }
            
        } else {
            setTimeout(() => {
                const loginButton = document.querySelector(".login-button");
                if (loginButton) {
                    loginButton.addEventListener('click', function() {
                        const frames = document.querySelectorAll("div[id='iframe']");
                        frames.forEach(frame => frame.style.display = "none");
                        frames[4].style.display = "flex";
                    });

                }
            }, 10);
            return `
                <div class="login-container">
                    <div class="login-button-text">Streak erst mit Account möglich</div>
                    <div class="login-button">Account Erstellen</div>
                </div>
            `;
        }
    }


}

document.addEventListener('click', function (event) {
    const topBar = document.getElementById('top-bar');
    const contentDiv = document.getElementById('top-bar-content');

    if (topBar && contentDiv && !topBar.contains(event.target)) {
        contentDiv.style.display = 'none';
        contentDiv.dataset.activeContent = '';
        contentDiv.style.scale = "0.3";
        contentDiv.style.transform = "";
        topBar.classList.remove('expanded');
    }
});







