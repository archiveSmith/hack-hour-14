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

LinkedList.prototype.add = function(val) {
  if (!this.head) {
    this.head = this.tail = new Node(val);
  }
  else {
    let node = new Node(val);
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let currNode = this.head;
  
  while (currNode) {
    if (currNode.val === val) {
      // currNode is head and tail
      if (!currNode.prev && !currNode.next) {
        this.head =  this.tail = null;
        return;
      }
      // currNode is head
      if (!currNode.prev) {
        this.head = currNode.next;
        currNode.next.prev = null;
        return;
      }
      // currNode is tail
      if (!currNode.next) {
        currNode.prev.next = null;
        this.tail = currNode.prev;
        return;
      }
      // currNode is in middle
      {
        currNode.prev.next = currNode.next;
        currNode.next.prev = currNode.prev;
        return;
      }
    }
    currNode = currNode.next;
  }
};

module.exports = LinkedList;
