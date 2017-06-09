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
  let s1,
    s2
  let currentNode1 = l1.value
  let currentNode2 = l2.value
  let newNode = Node(null)
  let newResult = result.toString().split('')

  while (currNode1.next) {
    s1 += currNode1.value.toString()
    currNode = currNode1.next
  }
  while (currNode2.next) {
    s1 += currNode2.value.toString()
    currNode = currNode2.next
  }

  let result = parseInt(s1.split('').reverse().join('')) + parseInt(s2.split('').reverse().join(''))
  let newResult = result.toString().split('').reverse()

  newResult.forEach(function(numString) {
    let currentNode3 = newNode
    currentNode3.value = parseInt(numString)
    currentNode3.next = new Node(null)
    currentNode3 = currentNode3
  })

  return currentNode3

}

module.exports = {
  Node: Node,
  addLinkedList: addLinkedList
};
