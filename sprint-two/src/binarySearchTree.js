var BinarySearchTree = function(value) {
  var newTree = Object.create(binaryMethods);
  newTree.left = null;
  newTree.right = null;
  newTree.value = value;

  return newTree;
};

var binaryMethods = {};
binaryMethods.contains = function(v) {
  console.log(this);
  if (this.value === v) {
    return true;
  } 
  if (this.left && this.value > v) {
    return this.left.contains(v);
  } else if (this.right && this.value < v) {
    return this.right.contains(v);
  }
  return false;
};

binaryMethods.insert = function(v) {
  if (!this.left && this.value > v) {
    this.left = BinarySearchTree(v);
    return;
  }
  else if (!this.right && this.value < v) {
    this.right = BinarySearchTree(v);
    return;
  }
  else {
    if (this.value < v) {
      this.right.insert(v);
    }
    else if (this.value > v) {
      this.left.insert(v);
    }
  }
};

binaryMethods.depthFirstLog = function(callback) {
  callback(this.value);
  while (this.right) {
    return this.right.depthFirstLog(callback);
  }
  while (this.left) {
    return this.left.depthFirstLog(callback);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
