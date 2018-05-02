let noteConstr = (function() {
  /* note constructor */
  /* small comment */
  /* another comment */
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