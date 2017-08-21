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
  let node = new Node(val);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  }
  else {
    this.tail.next = node;
    let temp = this.tail;
    node.prev = temp;
    this.tail = node;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (!this.head) return 'headless linked list';
  else if (this.head.val === val) {
    this.head = this.head.next;
    this.head.prev = null;
    return 'removed';
  }
  else {
    let current = this.head.next;
    while (current) {
      if (current.val === val) {
        current.prev.next = current.next;
        if (current.next) current.next.prev = current.prev;
        if (!current.next) this.tail = current.prev;
        return 'removed';
      }
      current = current.next;
    }
  }
  return 'value not found in linked list';
};

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
// console.log(list.tail);
console.log(list.remove(4));
console.log(list.tail);
// console.log(list.head.val)
// console.log(list.head.next.val)
// console.log(list.head.next.next.val)
// console.log(list.head.next.next.next.val)

module.exports = LinkedList;
