/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  let curr = head;
  let nextNode = head.next;
  let prevNode;


  while(curr){

  }

  return curr;
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
node1.next = node2;
node2.next = node3;
console.log(reverseLinkedList(node1));



module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
