var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.stackSize = 0;

  extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

var extend = function (destination, source) {
  for (var key in source) {
    destination[key] = source[key];
  }
  return destination;
};

stackMethods.push = function (value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

stackMethods.pop = function () {
  
  if (this.stackSize > 0) {
    this.stackSize--;
    var output = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
  }
  return output;
};

stackMethods.size = function() {
  return this.stackSize;
};


