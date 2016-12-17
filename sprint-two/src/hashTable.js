

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket;

  if (!Array.isArray(this._storage[index])) {
    bucket = this._storage[index] = [];
    bucket.push([k, v]);
    return;
  } 
  //at this point a bucket exists at our desired index
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index][i] = [k, v];
      return;
    }
  }
  this._storage[index].push([k, v]);
  return;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage[index] && this._storage[index].length !== 0) {
    if (this._storage[index].length > 1) {
      for (var i = 0; i < this._storage[index].length; i++) {
        if (this._storage[index][i][0] === k) {
          return this._storage[index][i][1];
        }
      }
    } else {
      return this._storage[index][0][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //get key for index
  var bucket = this._storage[index];
  if (bucket) {
    if (bucket.length > 1) {
      for (var i = 0; i < bucket.length; i++) {
        console.log("inside loop")
        if (bucket[i][0] === k) {
          console.log(bucket[i][0], "match")
          bucket.splice(i, 1);
        }
      }
    } else {
      // bucket = [];
      bucket.splice(0, 1);
    }
  }

  //return tuple?
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


