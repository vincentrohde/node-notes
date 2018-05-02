let noteConstr = (function() {
  function Note(title, body, timestamp) {
    this.title = title,
    this.body = body,
    this.timestamp = timestamp
  }

  return {
    construct: function(title, body, timestamp) {
      return new Note(title, body, timestamp);
    }
  }
})();

module.exports = noteConstr;