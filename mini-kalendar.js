
const calendarDays = document.querySelectorAll('.day-row .day div');

function syncStreakFromGlobal() {
    if (window.userData && window.userData.streakHistory) {
        streakHistory = window.userData.streakHistory;
        console.log("✅ Aktualisierte Benutzerdaten streak (aus globalen Variablen):", streakHistory);
    } else {
        console.warn("❌ Keine globalen streakHistory-Daten gefunden, verwende Standardwert.");
    }
}

function generateWeekCalendar() {
    const weekDays = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
    const today = new Date();
    const dayNumber = today.getDay();
    console.log(dayNumber);

    // Berechnung des Montags dieser Woche
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - ((today.getDay() + 6) % 7));

    const lastSevenElements = [...streakHistory];

    const weekDay = new Date().getDay(); // 0 (So) - 6 (Sa)
    const adjustedWeekDay = weekDay === 0 ? 0 : 7 - weekDay; // Sonntag bleibt 0, Montag wird 6, Dienstag 5, ..., Samstag 1

    const zerosToAdd = adjustedWeekDay;

    for (let i = 0; i < zerosToAdd; i++) {
        lastSevenElements.push(0);
    }

    console.log(lastSevenElements);

    let calendarHTML = '<div class="week-calendar">';
    
    // Wochentage hinzufügen
    calendarHTML += '<div class="days">';
    weekDays.forEach(day => {
        calendarHTML += `<div class="day">${day}</div>`;
    });
    calendarHTML += '</div>';

    calendarHTML += '<div class="day-row">';
    let o = 0;
    
    for (let i = (lastSevenElements.length - 7); i < (lastSevenElements.length); i++) {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + o);
        o++;
    
        const formattedDate = date.toISOString().split("T")[0];
        const isCurrent = today.toDateString() === date.toDateString();
        
        
        // Beispielhafte Bedingung für Streak-Daten (hier zufällig, bitte durch echte Daten ersetzen)
        const isStreak = lastSevenElements[i] !== 0; // Prüfen, ob der aktuelle Tag eine Streak ist

        const first = isStreak && lastSevenElements[i - 1] !== 1 && lastSevenElements[i - 1] !== 2;
        const second = isStreak && lastSevenElements[i - 1] !== 0 && lastSevenElements[i - 1] != null;
        const third = second && lastSevenElements[i - 2] !== 0 && lastSevenElements[i - 2] != null;
        const fourth = third && lastSevenElements[i - 3] !== 0 && lastSevenElements[i - 3] != null;
        const fifth = fourth && lastSevenElements[i - 4] !== 0 && lastSevenElements[i - 4] != null;
        const isIce = lastSevenElements[i] === 2; // Ersetze durch echte Ice-Daten

        // Dynamische Klassen bestimmen
        let classList = [];
        if (isCurrent) classList.push('current-day');
        if (isStreak) classList.push('streak-done');
        if (first) classList.push('first');
        if (second) classList.push('second');
        if (third) classList.push('third');
        if (fourth) classList.push('fourth');
        if (fifth) classList.push('fifth');
        let elementId = '';
        let start = 0;
        let end = 0;
        let freeze = 0;
        if (isIce) {
            freeze = 1; // ID setzen
        }
        if ((lastSevenElements[i + 1] !== 1 && lastSevenElements[i + 1] !== 2) || o === 7) {
            end = 1; // ID setzen
        }
        
        if ((lastSevenElements[i - 1] !== 1 && lastSevenElements[i - 1] !== 2) || o === 1) {
            start = 1; // ID setzen
        }
        if (start === 1 && end === 1 && freeze === 1) {
            elementId = 'streak-freeze-start-end';
        } else if (start === 1 && end === 1) {
            elementId = 'start-end';
        } else if (start === 1 && freeze === 1) {
            elementId = 'streak-freeze-start';
        } else if (end === 1 && freeze === 1) { 
            elementId = 'streak-freeze-end';
        } else if (start === 1) {
            elementId = 'start';
        } else if (end === 1) {
            elementId = 'end';
        } else if (freeze === 1) {
            elementId = 'streak-freeze';
        } 
        
        calendarHTML += `<div class="day">
            <div data-date="${formattedDate}" id="${elementId}" class="${classList.join(' ')}">${date.getDate()}</div>
        </div>`;
    }
    
    calendarHTML += '</div>';
    calendarHTML += '</div>';

    return calendarHTML;
}

window.generateWeekCalendar = generateWeekCalendar;

// Initiale Synchronisation starten
document.addEventListener("DOMContentLoaded", () => {
    syncStreakFromGlobal(); // Daten aus den globalen Variablen holen
});




