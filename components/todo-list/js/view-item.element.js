var Polymer = require('polymer');

Polymer('todo-list-view-item', {
  startEditing: function() {
    this.item.startEditing();
  },

  completeItem: function() {
    this.item.complete();
  }
});
