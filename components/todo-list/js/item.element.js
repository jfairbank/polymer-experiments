var Polymer  = require('polymer');
var _        = require('underscore');
var TodoItem = require('./todo-item');

var updateAttribute = function(attribute) {
  if (this[attribute] !== this.item[attribute]) {
    this[attribute] = this.item[attribute];
  }
};

Polymer('todo-list-item', {
  item: null,

  title: 'New todo',
  editing: false,
  completed: false,

  observe: {
    'item.title':     _.partial(updateAttribute, 'title'),
    'item.editing':   _.partial(updateAttribute, 'editing'),
    'item.completed': _.partial(updateAttribute, 'completed')
  },

  ready: function() {
    this._initializeTitle();
    this._initializeItem();
  },

  _initializeTitle: function() {
    if (this.item) {
      return updateAttribute.call(this, 'title');
    }

    var title = this.textContent.trim();

    if (title) {
      this.title = title;
    }
  },

  _initializeItem: function() {
    if (!this.item) {
      this.item = new TodoItem({
        title: this.title,
        editing: this.editing,
        completed: this.completed
      });
    }
  }
});
