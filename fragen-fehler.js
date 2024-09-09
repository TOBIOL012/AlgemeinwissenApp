document.addEventListener('DOMContentLoaded', function() {
    const notesTable = document.getElementById('notesTable').querySelector('tbody');
    
    function renderNotes() {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notesTable.innerHTML = ''; // Tabelle leeren
        notes.forEach((note, index) => {
            const row = document.createElement('tr');
            
            const questionCell = document.createElement('td');
            questionCell.textContent = note.question;
            
            const noteCell = document.createElement('td');
            noteCell.textContent = note.note;
            
            const actionCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Löschen';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', function() {
                deleteNote(index);
            });
            
            actionCell.appendChild(deleteButton);
            row.appendChild(questionCell);
            row.appendChild(noteCell);
            row.appendChild(actionCell);
            
            notesTable.appendChild(row);
        });
    }
    
    function deleteNote(index) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        renderNotes();
    }
    
    renderNotes(); // Initiale Darstellung
});