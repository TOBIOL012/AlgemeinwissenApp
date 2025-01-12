document.addEventListener('DOMContentLoaded', function() {
    const categoryImages = document.querySelectorAll('img[data-category]');
    const continueButton = document.getElementById('next-button');
    let selectedCategories = JSON.parse(localStorage.getItem('selectedCategories')) || [];

    // Funktion zur Aktualisierung des "Weiter"-Buttons (orange/grau)
    function updateContinueButtonState() {
        if (continueButton) {
            continueButton.style.backgroundColor = selectedCategories.length === 0 ? 'gray' : '#f1730c';
            continueButton.style.boxShadow = selectedCategories.length === 0 ? '0px 6px 0px 0px rgb(38, 46, 49)' : '0px 6px 0px 0px rgb(146, 65, 7)';
            continueButton.disabled = selectedCategories.length === 0;
        }
    }

    // Anfangsstatus des "Weiter"-Buttons aktualisieren
    updateContinueButtonState();

    // Kategorien-Images durchlaufen und anklickbare Logik hinzufügen
    categoryImages.forEach(img => {
        const category = img.getAttribute('data-category');
        img.style.opacity = selectedCategories.includes(category) ? 1.0 : 0.5;

        img.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            if (category === 'Alles') {
                if (selectedCategories.includes('Alles')) {
                    // Wenn "Alles" ausgewählt ist, deaktiviere es und setze alle Kategorien zurück
                    selectedCategories.length = 0;
                    categoryImages.forEach(img => img.style.opacity = 0.5);
                } else {
                    // Wenn "Alles" nicht ausgewählt ist, wähle es aus und deaktiviere alle anderen Kategorien
                    selectedCategories.length = 0;
                    categoryImages.forEach(img => {
                        selectedCategories.push(img.getAttribute('data-category'));
                        img.style.opacity = 1.0;
                    });
                }
            } else {
                if (selectedCategories.includes(category)) {
                    // Wenn eine Kategorie ausgewählt ist, entferne sie
                    selectedCategories.splice(selectedCategories.indexOf(category), 1);
                    this.style.opacity = 0.5;
                } else {
                    // Wenn eine Kategorie nicht ausgewählt ist, füge sie hinzu
                    selectedCategories.push(category);
                    this.style.opacity = 1.0;
                }

                // Wenn "Alles" ausgewählt wurde, entferne es bei der Auswahl anderer Kategorien
                if (selectedCategories.includes('Alles')) {
                    selectedCategories.splice(selectedCategories.indexOf('Alles'), 1);
                    categoryImages.forEach(img => {
                        if (img.getAttribute('data-category') === 'Alles') {
                            img.style.opacity = 0.5;
                        }
                    });
                }
            }

            // Speichere die ausgewählten Kategorien im LocalStorage und aktualisiere den Button-Status
            localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
            updateContinueButtonState();
        });
    });

    // Eventlistener für den "Weiter"-Button, um zur nächsten Seite zu navigieren
    if (continueButton) {
        continueButton.addEventListener('click', function() {
            if (selectedCategories.length > 0) {
                // Überprüfen, ob es fehlerhafte Fragen gibt
                const incorrectQuestions = JSON.parse(localStorage.getItem('incorrectQuestions')) || [];
                const filteredQuestions = incorrectQuestions.filter(q => 
                    selectedCategories.includes(q.Kategorie)
                );

                if (filteredQuestions.length === 0) {
                    alert('Keine fehlerhaften Fragen in den ausgewählten Kategorien vorhanden!');
                } else {
                    // Speichere die gefilterten Fragen im LocalStorage
                    localStorage.setItem('filteredQuestions', JSON.stringify(filteredQuestions));
                    
                    // Lösche vorherige Daten, falls vorhanden
                    localStorage.removeItem('questionsAsked');
                    localStorage.removeItem('correctCount');

                    // Navigiere zur Fehlerseite
                    window.location.href = 'fehler.html';
                }
            }
        });
    }
});
