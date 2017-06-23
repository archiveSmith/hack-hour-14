/*
Create a doubly linked list with an add and remove method
 */

const l = console.log

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
LinkedList.prototype.add = function (val) {
  // l('this', this)  // this is the linked list
  let newNode = new Node(val)
  newNode.prev = this.tail;
  this.tail.next = newNode;
  this.tail = newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  // handle case where val is value of head of ll
  if (this.head.val === val) {
    this.head = this.head.next;
    this.head.prev = null;
    return;
  }
  // handle cases where val is value of node in body of ll
  let currNode = this.head.next
  while (currNode.next) {
    if (currNode.val === val) {
      currNode.prev.next = currNode.next;
      currNode.next.prev = currNode.prev;
      return;
    }
  }
  // handle case where val is value of tail of ll
  if (this.tail.val === val) {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
};

// create linked list
const ll = new LinkedList;
const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);

// specify ll head and tail pointers
ll.head = n1;
ll.tail = n3;

// linking
n1.next = n2;
n2.prev = n1;
n2.next = n3;
n3.prev = n2;

l('ll initially -------> ', ll)
ll.add(4);
l('ll after adding 4 --> ', ll)
ll.remove(1);
l('ll after deleting 1 --> ', ll)
ll.remove(3);
l('ll after deleting 3 --> ', ll)
ll.remove(4);
l('ll after deleting 4 --> ', ll)

module.exports = LinkedList;
