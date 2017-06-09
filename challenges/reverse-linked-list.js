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
  let currentNode = this.value
  let prevNode,
    nextNode
  while (currentNode) {
    nextNode = currentNode.next
    currentNode.next = prevNode
    prevNode = currentNode
    currNode = nextNode
  }
  head = prevNode
}

module.exports = {
  Node: Node,
  reverseLinkedList: reverseLinkedList
};
