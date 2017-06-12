/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}


function kthToLastNode(k, head) {
  
  //loop through the linked list
  let curr = head;
  let arr = [];
  while(curr){
    //store each value into an array
    arr.push(curr.value);
    //set curr to next node
    curr = curr.next; 
  }
  
  return arr[arr.length - k]; 
}



// function kthToLastNode(k, head) {
//   let countArray = [];
//   while(head){
//     countArray.push(head.value); 
//     head = head.next;  
//   }
  
//   return countArray.reverse()[k-1]; 
// }

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
