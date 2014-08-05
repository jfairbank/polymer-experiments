var Polymer = require('polymer');

Polymer('todo-list-edit-item', {
  keyEvents: {
    13: 'finishEditing'
  },

  finishEditing: function() {
    this.item.finishEditing();
  },

  keyPress: function(e) {
    var method = this.keyEvents[e.keyCode];

    if (method) {
      this[method]();
    }
  }
});
