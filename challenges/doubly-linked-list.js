/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.length = 0;
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {

  let nodeToAdd = new Node()
  nodeToAdd.val = val

  if (this.length = 0) {
    this.head = nodeToAdd
    this.tail = nodeToAdd
  } else {
    this.tail.next = nodeToAdd
    nodeToAdd.prev = this.tail
    this.tail = nodeToAdd
  }
  this.length++
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let currentNode = this.head

  if (this.length === 1 && this.head.val === val) {
    this.head = null;
    this.tail = null;
    return val
  }

  while (currentNode.next) {
    if (currentNode.val === val) {
      currentNode.next = currentNode
    }
  }

  this.length--;
};

module.exports = LinkedList;
