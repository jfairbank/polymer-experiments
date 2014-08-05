var Polymer  = require('polymer');
var _        = require('underscore');
var TodoItem = require('./todo-item');

Polymer('todo-list', {
  items: [],

  haveItems: false,

  ready: function() {
    this.displayOwner = this._getDisplayOwner();
    this._initializeItems();
  },

  itemsChanged: function() {
    this._updateHaveItems();
  },

  removeItem: function(event) {
    var item = event.detail;
    var index = this.items.indexOf(item);

    if (index > -1) {
      this.items.splice(index, 1);
    }
  },

  addItem: function() {
    var item = new TodoItem({
      title: 'New todo',
      editing: true
    });

    this.items.push(item);
  },

  _initializeItems: function() {
    this.items = [];

    var items = this.querySelectorAll('todo-list-item');
    _.each(items, this._initializeChildItem, this);
  },

  _initializeChildItem: function(child) {
    this.items.push(child.item);
  },

  _updateHaveItems: function() {
    this.haveItems = this.items.length > 0;
  },

  _getDisplayOwner: function() {
    return this.owner ? (this.owner + "'s") : 'Your';
  }
});
