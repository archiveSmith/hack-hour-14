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
  if(this.head == null){
    this.head = node;
    this.tail = node;
    return
  }
  for(let i = this.head; i != null; i = i.next){
    console.log(i)
    if(i.next == null){
      i.next = node;
      node.prev = i;
      this.tail = node;
      break;
    }
  }
  
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if(this.head.val == val){
    let theNext = this.head.next;
    theNext.prev = null;
    this.head = theNext;
  }
  for(let i = this.head; i != null; i = i.next){
    if(i.val == val){
      if(i == this.tail){
        this.tail = i.prev;
        i.prev.next = null;
        return;
      }
      let theNext = i.next;
      theNext.prev = i.prev;
      i.prev.next = theNext;
      break;
    }
  }
};
module.exports = LinkedList;
