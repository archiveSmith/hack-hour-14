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

LinkedList.prototype.add = function (val) {
  let newNode = new Node(val)
  if (this.head === null) { this.head = newNode; this.tail = newNode }
  else{newNode.prev = this.tail;
  this.tail.next = newNode;
  this.tail = newNode;}
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  let currNode = this.head;
  //check for head
  if (currNode.val === val) {
    if(currNode.next)
    currNode.next.prev = null;
    this.head = currNode.next||null;
    if(currNode=== this.tail)
    this.tail = null;
  }
  else {
    while (currNode.next) {
      if (currNode.next.val === val) {
        if (currNode.next === this.tail) this.tail = this.tail.prev;
        currNode.next = currNode.next.next || null;
        if (currNode.next)
          currNode.next.prev = currNode;
        break;
      }
      currNode = currNode.next;
    }
  }
};
// let list = new LinkedList()
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.add(5);
// list.add(6);
// list.remove(2);

module.exports = LinkedList;
