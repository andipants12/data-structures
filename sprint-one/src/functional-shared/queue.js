// var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
// };

// var queueMethods = {};





var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
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
  // storage.push(value);
  this.queueSize++;
};