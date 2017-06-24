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
//if head is null add node to the head
//add node to tail
let node = new Node(val);
if(this.head === null){
  this.head = node;
  this.tail = node;
}
  
//if head is not null
//set tail next to new node
  //save this in temp
  //set tail to new node
else if(this.head !== null){
  node.prev = this.tail; 
  this.tail.next = node;
  this.tail = node;
}
  
    
  
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  
  //check the value of each node
  let curr = this.head;
  while(curr){
   
  //if the value does match
    //set curr.prev.next to curr.next
    //set curr.next.prev to curr.prev
   if(curr.val === val){
     if(curr.val === val && this.head === curr){
       this.head = curr.next
       curr.next.prev = null; 
     }
     
     if(this.tail === curr && curr.val === val){
       this.tail = curr.prev
       curr.prev.next = null; 
     }
     
     if(curr.prev){
        curr.prev.next = curr.next;
     }
     
     if(curr.next){
       curr.next = curr.prev; 
     }
        
     return; 
   }
  
    //if the node value is not equal to value
  //set the current node to the current node.next;
   curr = curr.next; 
  }
  
  return undefined; 
};



module.exports = LinkedList;
