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
  // we always want to create a new node
  const newNode = new Node(val);

  // start the list if there isn't one
  if(!this.head) {
    this.head = this.tail = newNode;
    return;
  }

  // otherwise, pop it on the end
  newNode.prev = this.tail;
  this.tail.next = newNode;

  // and reset the tail
  this.tail = newNode;

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

let linkedList = new LinkedList(); 
linkedList.add(1)
linkedList.add(2)
linkedList.add(3)
linkedList.remove(3)
console.log(linkedList); 




module.exports = LinkedList;



// //if head is null add node to the head
// //add node to tail
// let node = new Node(val);
// if(this.head === null){
//   this.head = node;
//   this.tail = node;
// }
  
// //if head is not null
// //set tail next to new node
//   //save this in temp
//   //set tail to new node
// else if(this.head !== null){
//   node.prev = this.tail; 
//   this.tail.next = node;
//   this.tail = node;
// }
  


//  //check the value of each node
//   let curr = this.head;
//   while(curr){
   
//   //if the value does match
//     //set curr.prev.next to curr.next
//     //set curr.next.prev to curr.prev
//    if(curr.val === val){
//      if(curr.val === val && this.head === curr){
//        this.head = curr.next
//        curr.next.prev = null; 
//      }
     
//      if(this.tail === curr && curr.val === val){
//        this.tail = curr.prev
//        curr.prev.next = null; 
//      }
     
//      if(curr.prev){
//         curr.prev.next = curr.next;
//      }
     
//      if(curr.next){
//        curr.next = curr.prev; 
//      }
        
//      return; 
//    }
  
//     //if the node value is not equal to value
//   //set the current node to the current node.next;
//    curr = curr.next; 
//   }
  
//   return undefined; 
