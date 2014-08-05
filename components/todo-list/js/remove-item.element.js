var Polymer = require('polymer');

Polymer('todo-list-remove-item', {
  removeItem: function() {
    this.fire('remove-item', this.item);
  }
});
