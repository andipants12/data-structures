var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage.push(item);
};

setPrototype.contains = function(item) {
  var state = false;
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === item) {
      state = true;
    }
  }
  return state; 
};

setPrototype.remove = function(item) {
  for (var i = 0; i < this.storage.length; i++) {
    console.log(this.storage[i]);
    if (this.storage[i] === item) {
      return this.storage.splice(i, 1);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
