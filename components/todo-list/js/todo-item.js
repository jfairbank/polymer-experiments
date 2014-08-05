var TodoItem = function(options) {
  this.title     = options.title;
  this.editing   = !!options.editing;
  this.completed = !!options.completed;
};

TodoItem.prototype.startEditing = function() {
  this.editing = true;
};

TodoItem.prototype.finishEditing = function() {
  this.editing = false;
};

TodoItem.prototype.complete = function() {
  this.completed = true;
};

module.exports = TodoItem;
