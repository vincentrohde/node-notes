const fs = require('fs');

let notes = (function() {

  /* saves notes to json file */
  function saveNotes(notesLs) {
    fs.writeFile('./public/notes.json', JSON.stringify(notesLs), function(err){
      if(err) { console.log(err) }
    });
  }

  return {

    addNote: function(note) {

      fs.readFile('./public/notes.json', function(err, data) {

        if(err) { 
          /* fail safe if json file doesn't exist */
          if(err.code == 'ENOENT') {
            /* create object */
            let notesList = {
              notes: []
            }
            /* append note to list */
            notesList.notes.push(note);
            saveNotes(notesList);
          } else {
            console.log(err);
          }
          
        } else {
          let notes = JSON.parse(data);
          /* append note to list */
          notes.notes.push(note);
          saveNotes(notes);
        }

      });

    },

    readNote: function(title) {

      fs.readFile('./public/notes.json', function(err, data) {
        if(err) { console.log(err) }
        let notes = JSON.parse(data).notes;

        notes.forEach(function(note) {
          /* turn string into object */
          note = JSON.parse(note);
          if(note.title == title) {
            console.log(note);
          }
        });

      });

    },

    listNotes: function() {
      fs.readFile('./public/notes.json', function(err, data) {
        if(err) { console.log(err) }

        let note = JSON.parse(data);
        let allNotes = [];
        note.notes.forEach(function(note) {
          /* turn string into object */
          allNotes.push(JSON.parse(note));
        });

        console.log(allNotes);

      });

    }
  };
})();

module.exports = notes;
