var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  //container for potential children
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));


};

treeMethods.contains = function(target) {
  var state = false;
  var helper = function (currentChild) {
    if (currentChild.value === target) {
      return state = true;
    } else if (!!currentChild.children) {
      for (var i = 0; i < currentChild.children.length; i++) {
        helper(currentChild.children[i]);
      } 
    }
  };
  helper(this);
  return state;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
