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
  if (!head) {
    return null;
  }
  
  let stack = [];
  
  while (head) {
   stack.push(head);
   head = head.next;
  }
  
  let newHead = stack[stack.length-1];
  let current = newHead;
  for (let i = stack.length-1; i > 0; i--) {
    current.next = stack[i-1];
    current = current.next;
  }
  
  return newHead;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
