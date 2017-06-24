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
  if (!this.head) return undefined;
  else if (this.head.val === val) {
    console.log('off with the head!')
    this.head = this.head.next;
    this.head.prev = null;
  }
  else {
    let current = this.head.next;
    while (current) {
      if (current.val === val) {
        current.prev.next = current.next;
        if (current.next) {
          console.log('removed from middle')
          current.next.prev = current.prev;
        }
      }
      current = current.next;
    }
  }
  return 'end of the list';
};

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.remove(4);
console.log(list.head.val)
console.log(list.head.next.val)
console.log(list.head.next.next.val)
// console.log(list.head.next.next.next.val)

module.exports = LinkedList;
