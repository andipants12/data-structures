var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.sizeI = 0;
  this.storage = {};
};


Stack.prototype.size = function () {
  return this.sizeI;
};


Stack.prototype.push = function (value) {
  this.storage[this.sizeI] = value;
  this.sizeI++;
};

Stack.prototype.pop = function () {
  if(this.sizeI > 0) {
    this.sizeI--;
    var popped = this.storage[this.sizeI];
    delete this.storage[this.sizeI];
  }
  return popped;
}