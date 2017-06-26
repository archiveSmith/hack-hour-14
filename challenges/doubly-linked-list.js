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
        this.head = this.tail = newNode;
    }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
let node = this.head;

  // walk the list
  while(node) {
    if(node.val === val) {
      // if we're not the head, point the one behind us to the one after
      if(node.prev) node.prev.next = node.next;
      // if we're not the tail, point the one ahead of us to the one before
      if(node.next) node.next.prev = node.prev;

      // reset the head/tail as appropriate
      if(node === this.head) {
        this.head = node.next;
      } else if(node === this.tail) {
        this.tail = node.prev;
      }
      // we're done
      return;
    }
    // if we haven't found it, keep looking
    node = node.next;
  }
};

module.exports = LinkedList;
