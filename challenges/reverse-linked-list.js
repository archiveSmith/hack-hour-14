/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

let reverseLinkedList = head => {
  let vals = []
  for (let node = head; node !== null; node = node.next) vals.push(node.value)
  for (let node = head, i = vals.length - 1; node !== null; node = node.next, i--) node.value = vals[i]
  return head
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList}
