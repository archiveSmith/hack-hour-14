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
  if(!this.tail) {
    this.tail = this.head = new Node(val);
    return;
  }
  let curr = this.tail;
  this.tail.next = new Node(val)
  this.tail.next.prev = curr;
  this.tail = this.tail.next;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  console.log("removing..")
  let curr = this.head;
  
  while(curr.next) {
    
    if(curr.val === val) {
    //bridge gap
      curr.prev.next = curr.next;
      curr.next.prev = curr.prev;
      return true;
    }
    curr = curr.next;
  }
  return -1;
};

// let Link = new LinkedList;
// Link.add(1);
// Link.add(2)
// Link.add(3);
// Link.add(4);
// Link.remove(3)
// console.log("\n\n RESULT", Link)

module.exports = LinkedList;
