

// Instantiate a new graph
var Graph = function() {
  this.storage = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var NewNode = function () {
    var newNode = {};
    newNode.node = node;
    newNode.edges = []; // empty arrays are "falsey"
    return newNode;
  };
  this.storage[node] = new NewNode(node);
  return this.storage;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //must first check to make sure the node exists and has not been deleted;
  if (this.storage[node] && this.storage[node].node === node) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var removed = this.storage[node];
  for (var i = 0; i < this.storage[node].edges.length; i++) {
    this.removeEdge(this.storage[node].edges[i], this.storage[node].node);
    console.log(this.storage[node].edges[i], this.storage[node].node, 'edges?')
  }
  delete this.storage[node];
  return removed;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //if the node exists
  if (this.storage[fromNode] && this.storage[fromNode].edges) {
    for (var i = 0; i < this.storage[fromNode].edges.length; i++) {
      if (this.storage[fromNode].edges[i] === toNode) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.storage[fromNode]) {
    return this.storage[fromNode].edges.push(toNode) && this.storage[toNode].edges.push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  console.log('invoked');
  if (this.storage[fromNode]) {
    console.log(this.storage[fromNode], '1st');
    if (this.storage[fromNode].edges) {
      console.log(this.storage[fromNode], '2nd');
      for (var i = 0; i < this.storage[fromNode].edges.length; i++) {
        if (this.storage[fromNode].edges[i] === toNode) {
          this.storage[fromNode].edges.splice(i, 1) && this.storage[toNode].edges.splice(i, 1);
        }
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(this.storage[key], key, this.storage);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


