// var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
// };

// var queueMethods = {};





var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = [];
  someInstance.queueSize = 0;
  // var storage = [];
  extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

var extend = function (to, source) {
  for (var key in source) {
    to[key] = source[key];
  }
  return to;
};

queueMethods.size = function () {
  return this.queueSize;
};


queueMethods.enqueue = function (value) {
  this.storage.push(value);
  this.queueSize++;
};

queueMethods.dequeue = function () {
  this.queueSize--;
  if (this.queueSize < 0) {
    this.queueSize = 0;
  }
  return this.storage.shift();
};