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
  let current1 = l1;
  let current2 = l2;
  let output = new Node((l1.value || 0) + (l2.value || 0));
  let outputTail = output;
  let carryOver = false;
  while (current1.next || current2.next) {
    current1 = current1.next || null;
    current2 = current2.next || null;
    if (carryOver) {
      var sum = (current1.value + 1 || 1) + (current2.value || 0);
    }
    else {
      var sum = (current1.value || 0) + (current2.value || 0);
    };
    if (sum >= 10) {
      sum = sum % 10;
      carryOver = true;
    }
    else {
      carryOver = false;
    };
    outputTail.next = new Node(sum);
    outputTail = outputTail.next;
  }
  return output;
}

module.exports = { Node: Node, addLinkedList: addLinkedList };
