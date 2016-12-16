var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {
    //this function will add a node with a specific value and reference to the list object
    //it will also update the reference of the tail and the object preceeding it
    if (list.tail === null) {
      list.tail = new Node(value);
      list.head = list.tail;
    } else {
      list.tail = new Node(value);
      list.head.next = list.tail;
    }
    
  };

  list.removeHead = function() {
    var removed = list.head.value;
    delete list.head;
    list.head = list.tail;
    return removed;
  };

  list.contains = function(target) {
    var found = false;
    var nextNode = list.head;
    console.log(nextNode);
    var find = function(node) {
      if (nextNode.value === target) {
        found = true ;
      }
      else if (nextNode.next) {
        nextNode = nextNode.next;
        console.log(nextNode);
        return find(nextNode);
      }
    };
    find(nextNode);
    return found;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
