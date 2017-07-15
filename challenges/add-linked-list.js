/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

//inputs: 2 linked lists
//output: addition of the lists backwards

function addLinkedList(l1, l2) {
    
}

let node1 = new Node(2);
let node2 = new Node(1);
let node3 = new Node(5);
node1.next = node2;
node2.next = node3

let node4 = new Node(5);
let node5 = new Node(9);
let node6 = new Node(2);

node4.next = node5;
node5.next = node6;


module.exports = {Node: Node, addLinkedList: addLinkedList};


  // curr1 = l1;
  // curr2 = l2;
  // let digits = [];
  // let remainder = 0;
  // while(curr1 && curr2){
  //   let toAdd = curr1.value + curr2.value + remainder;
  //   if(toAdd > 9 && curr1.next !== null){
  //     remainder = Number(toAdd.toString()[0]);
  //     toAdd =  Number(toAdd.toString()[1]);
  //   }
  //   digits.push(toAdd)
  //   curr1 = curr1.next;
  //   curr2 = curr2.next; 
  // }
  // return digits; 

