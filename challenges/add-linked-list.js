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

function addLinkedList(l1, l2) {
let l3 = new Node()
let current1 = l1;
let current2 = l2;
let current3 = l3;
while(current1||current2){
  if(current1 && current2){
  current3.value = current1.value + current2.value;
}else if(current1){
  current3.value = current1.value
}else{
  current3.value = current2.value
}

  current1 = current1.next;
  current2 = current2.next;
  current3.next = new Node();
}
}

addLinkedList(2, 5)


module.exports = {Node: Node, addLinkedList: addLinkedList};
