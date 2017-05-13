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
  let currNode = head;
  const values = [];
  while (currNode) {
    values.push(currNode.value);
    currNode = currNode.next;
  }
  const newHead = new Node(values[values.length - 1]);
  let newCurrNode = newHead;
  for (let i = values.length - 2; i >= 0; i -= 1) {
    newCurrNode.next = new Node(values[i]);
    newCurrNode = newCurrNode.next;
  }
  return newHead;
}

// TESTS

// const list = new Node(7);
// list.next = new Node(23);
// list.next.next = new Node(5);
// list.next.next.next = new Node(27);
//
// console.log(reverseLinkedList(list));

// TO DO - Bonus - do this in place

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
