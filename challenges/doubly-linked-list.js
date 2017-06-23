/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
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
  // if head = null assign head and tail to a new Node
  if (!this.head) {
    this.head = new Node(val);
    this.tail = this.head;
    this.length += 1;
    // else temporarily store current tail > assign new node to tail
    // assign the tail to the stored node > assign temp to the prev of the curr tail
  } else {
    let temp = this.tail;
    this.tail = new Node(val);
    temp.next = this.tail;
    this.tail.prev = temp;
    this.length += 1;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  // loop through until you find the val
  let currNode = this.head;
  while (currNode) {
    if (currNode.val === val) {
      // if only 1 node is left in the list
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        // if val can be found in head and head has other nodes attached
      } else if (currNode === this.head) {
        this.head = currNode.next;
        this.head.prev = null;
        this.length -= 1;
        break;
        // if val can be found in tail
      } else if (currNode === this.tail) {
        this.tail = currNode.prev;
        this.tail.next = null;
        this.length -= 1;
      } else {
        // for middle Nodes
        currNode.prev.next = currNode.next;
        currNode.next.prev = currNode.prev;
        this.length -= 1;
        break;
      }
    }
    currNode = currNode.next;
  }
};

module.exports = LinkedList;

// TEST
// let list = new LinkedList();
// list.add(1);
// list.add(2);
// list.add(3);
// list.remove(3);
// list.remove(2);
// list.remove(1);
// console.log(list);
