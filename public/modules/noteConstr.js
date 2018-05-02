let noteConstr = (function() {
  /* note constructor */
<<<<<<< HEAD
  /* small comment */
=======
>>>>>>> 0071b1c9bd883764059afd434eb4b89d53dae645
  function Note(title, body, timestamp) {
    this.title = title,
    this.body = body,
    this.timestamp = timestamp
  }

  return {
    construct: function(title, body, timestamp) {
      /* returns note */
      return new Note(title, body, timestamp);
    }
  }
})();

module.exports = noteConstr;