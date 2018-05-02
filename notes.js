const fs = require('fs');

let notes = (function() {

  return {

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
