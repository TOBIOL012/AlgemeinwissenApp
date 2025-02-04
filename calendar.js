let streakHistory = [1, 1, 1, 1, 1, 1, 1];
const contentDiv = document.querySelector('.kalendar');

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(reg => console.log('Service Worker registriert:', reg))
        .catch(err => console.error('Service Worker Fehler:', err));
}

function syncStreakFromServiceWorker() {
    if (!navigator.serviceWorker.controller) {
        console.error("❌ Kein aktiver Service Worker gefunden. Registrierung überprüfen!");
        return;
    }

    console.log("📨 Sende Nachricht an Service Worker:", { type: "initUserData", uid: localStorage.getItem("uid") });

    try {
        navigator.serviceWorker.controller.postMessage({ type: "initUserData", uid: localStorage.getItem("uid") });
        console.log("✅ Nachricht erfolgreich gesendet!");
    } catch (error) {
        console.error("❌ Fehler beim Senden der Nachricht an den Service Worker:", error);
    }

    navigator.serviceWorker.addEventListener("message", (event) => {
        console.log("📩 Nachricht vom Service Worker erhalten:", event.data);

        if (event.data.type === "userDataUpdated") {
            const data = event.data.data;
            console.log("✅ Aktualisierte Benutzerdaten streak:", data.streakHistory);
            streakHistory = data.streakHistory;

            // Streak-Daten aktualisieren
            document.querySelector(".streak-stats-number").textContent = data.streak || 0;
            document.querySelector(".highest-streak-stats-number").textContent = data.higheststreak || 0;
            document.querySelector(".tage-stats-number").textContent = streakHistory.filter(day => day === 1).length;

            // Kalender aktualisieren
            const contentDiv = document.querySelector(".kalendar");
            contentDiv.innerHTML = `
                <div class="streak-all">
                    <p>${new Date(new Date().setDate(new Date().getDate() - streakHistory.length)).toLocaleString('default', { month: 'long' })}, ${new Date(new Date().setDate(new Date().getDate() - streakHistory.length)).getFullYear()}</p>
                    ${generateMonthCalendar()}
                </div>
            `;

            // Nach ganz unten scrollen
            setTimeout(() => {
                contentDiv.scrollTop = contentDiv.scrollHeight;
            }, 0);
        }
    });
}

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function generateMonthCalendar() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const lastDay = new Date(year, month, 0); 
    let startDate = new Date(lastDay);
    let afterStartDate = addDays(startDate, 2);
    
    // Start of the month
    const startOfMonth = new Date(year, month, 1);

    // End of the month
    const endOfMonth = new Date(year, month, 0);
    console.log(endOfMonth.getDate());
    const daysInMonth = endOfMonth.getDate();

    const lastMonthElements = [...streakHistory];
    console.log(streakHistory);

    const monthDay = new Date().getDate(); 
    console.log(monthDay);
    const adjustedMonthDay = daysInMonth - monthDay;
    console.log(daysInMonth);

    const zerosToAdd = adjustedMonthDay;
    console.log(zerosToAdd);

    for (let i = 0; i < zerosToAdd; i++) {
        lastMonthElements.push(0);
    }
    startDate.setDate(startDate.getDate() - lastMonthElements.length + 1);

    console.log(lastMonthElements);

    let calendarHTML = ''; // Initialize calendarHTML to be empty
    let o = 0;
    let rowCounter = 0;

    calendarHTML += '<div class="month"><div class="month-calendar"><div class="day-row">'; // Start the first month and month-calendar with a day-row
    console.log(startDate.getDate());
    for (let i = 0; i < (lastMonthElements.length); i++) {
        if (o === 0) {
            const daystoadd = startDate.getDate() - 1;
            for (let j = 0; j < daystoadd; j++) {
                calendarHTML += `<div class="day"><div class="empty">${j + 1}</div></div>`;
                rowCounter++;
                if (rowCounter % 7 === 0 && rowCounter !== 0) {
                    calendarHTML += '</div><div class="day-row">'; // Close previous row and start new row
                }
            }
        }
        if (startDate.getDate() === 1 && i > 0) {
            // Fill the last row with empty elements if it's not complete
            while (rowCounter % 7 !== 0) {
                calendarHTML += '<div class="day"><div class="empty"></div></div>';
                rowCounter++;
            }
            calendarHTML += '</div></div></div>'; // Close previous day-row, month-calendar, and month
            
            const newMonth = startDate.toLocaleString('default', { month: 'long' });
            const newYear = startDate.getFullYear();
            calendarHTML += `<p>${newMonth}, ${newYear}</p>`; // Add new month indicator with month and year
            calendarHTML += '<div class="month"><div class="month-calendar"><div class="day-row">'; // Start new month, month-calendar, and day-row
            rowCounter = 0; // Reset row counter for the new month
        }

        if (rowCounter % 7 === 0 && rowCounter !== 0) {
            calendarHTML += '</div><div class="day-row">'; // Close previous row and start new row
        }

        const date = new Date(startOfMonth);
        date.setDate(startOfMonth.getDate() + o);
        o++;
    
        const formattedDate = date.toISOString().split("T")[0];
        const isCurrent = i +1 === lastMonthElements.length - zerosToAdd;
        
        // Example condition for streak data (replace with actual data)
        const isStreak = lastMonthElements[i] !== 0 && lastMonthElements[i] != null;

        const first = isStreak && lastMonthElements[i - 1] !== 1 && lastMonthElements[i - 1] !== 2;
        const second = isStreak && lastMonthElements[i - 1] !== 0 && lastMonthElements[i - 1] != null;
        const third = second && lastMonthElements[i - 2] !== 0 && lastMonthElements[i - 2] != null;
        const fourth = third && lastMonthElements[i - 3] !== 0 && lastMonthElements[i - 3] != null;
        const fifth = fourth && lastMonthElements[i - 4] !== 0 && lastMonthElements[i - 4] != null;
        const isIce = lastMonthElements[i] === 2;

        // Determine dynamic classes
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
            freeze = 1;
        }
        if ((lastMonthElements[i + 1] !== 1 && lastMonthElements[i + 1] !== 2) || [7, 14, 21, 28].includes(startDate.getDate()) || afterStartDate.getDate() === 1) {
            end = 1;
        }
        console.log(startDate.getDate() + ', ' + afterStartDate.getDate());
        
        if ((lastMonthElements[i - 1] !== 1 && lastMonthElements[i - 1] !== 2) || o === 1 || [1, 8, 15, 22, 29].includes(startDate.getDate())) {
            start = 1;
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
            <div data-date="${formattedDate}" id="${elementId}" class="${classList.join(' ')}">${startDate.getDate()}</div>
        </div>`;

        rowCounter++;
        startDate.setDate(startDate.getDate() + 1);
        afterStartDate = addDays(startDate, 1);
    }

    // Fill the last row with empty elements if it's not complete
    while (rowCounter % 7 !== 0) {
        calendarHTML += '<div class="day"><div class="empty"></div></div>';
        rowCounter++;
    }

    calendarHTML += '</div></div></div>'; // Close the last month-calendar and month
    return calendarHTML;
    
}

// Start synchronization
document.addEventListener("DOMContentLoaded", () => {
    syncStreakFromServiceWorker(); // Fetch data from the Service Worker
});