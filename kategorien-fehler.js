document.addEventListener('DOMContentLoaded', function () {
    const categoryImages = document.querySelectorAll('img[data-category]');
    const continueButton = document.getElementById('next-button');
    let selectedCategories = JSON.parse(localStorage.getItem('selectedCategories')) || [];
    const incorrectQuestions = JSON.parse(localStorage.getItem('incorrectQuestions')) || [];

    // Funktion zur Aktualisierung der Punkte (Anzahl fehlerhafter Fragen) pro Kategorie
    function updateCategoryPoints() {
        const categoryImages = document.querySelectorAll('img[data-category]');
        const incorrectQuestions = JSON.parse(localStorage.getItem('incorrectQuestions')) || [];
    
        categoryImages.forEach(img => {
            const category = img.getAttribute('data-category');
            const dot = img.nextElementSibling;
    
            // Anzahl der fehlerhaften Fragen in dieser Kategorie berechnen
            const categoryErrors = incorrectQuestions.filter(q => q.Kategorie === category).length;
    
            if (categoryErrors > 0) {
                dot.textContent = categoryErrors;
                dot.style.display = 'block'; // Punkt anzeigen
            } else {
                dot.textContent = '';
                dot.style.display = 'none'; // Punkt ausblenden
            }
        });
    }

    // Funktion zur Aktualisierung des "Weiter"-Buttons (orange/grau)
    function updateContinueButtonState() {
        if (continueButton) {
            continueButton.style.backgroundColor = selectedCategories.length === 0 ? 'gray' : '#f1730c';
            continueButton.style.boxShadow = selectedCategories.length === 0 ? '0px 6px 0px 0px rgb(38, 46, 49)' : '0px 6px 0px 0px rgb(146, 65, 7)';
            continueButton.disabled = selectedCategories.length === 0;
        }
    }

    // Anfangsstatus aktualisieren
    updateContinueButtonState();
    updateCategoryPoints();

    // Kategorien-Images durchlaufen und anklickbare Logik hinzufügen
    categoryImages.forEach(img => {
        const category = img.getAttribute('data-category');
        img.style.opacity = selectedCategories.includes(category) ? 1.0 : 0.5;

        img.addEventListener('click', function () {
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

    // Eventlistener für den "Weiter"-Button, um zur nächsten Seite zu navigieren
    if (continueButton) {
        continueButton.addEventListener('click', function () {
            if (selectedCategories.length > 0) {
                const filteredQuestions = incorrectQuestions.filter(q =>
                    selectedCategories.includes(q.Kategorie)
                );

                if (filteredQuestions.length === 0) {
                    alert('Keine fehlerhaften Fragen in den ausgewählten Kategorien vorhanden!');
                } else {
                    localStorage.setItem('filteredQuestions', JSON.stringify(filteredQuestions));
                    localStorage.removeItem('questionsAsked');
                    localStorage.removeItem('correctCount');
                    navigate('fehler.html');
                }
            }
        });
    }
});
