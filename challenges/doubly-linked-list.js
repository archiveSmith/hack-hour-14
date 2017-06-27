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
  if(!this.head){
    this.head = new Node(val); 
    this.tail = this.head;
  }
  let current = this.head;
  let prev;
  while(current.next){
    current = current.next
  }
  current.next = new Node(val);
  current.next.prev = current
  this.tail = current.next;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if(val === this.head.val){this.head = this.head.next}
  if(val === this.tail.val){this.tail = this.tail.prev}
  
};

let list = new LinkedList()
list.add(5)
list.add(6)
list.add(7)
list.remove(5)
// console.log(list)
module.exports = LinkedList;
