/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
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
  let newNode = new Node(val);
    if (this.head) {
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
    } else {
        this.head = newNode;
        this.tail = newNode;
    }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  
};

module.exports = LinkedList;
