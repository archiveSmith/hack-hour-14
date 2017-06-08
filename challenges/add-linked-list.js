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
  const head = new Node(0);
  let currNode = head;
  let carryOver = 0;
  let power = 0;
  while (l1 || l2 || carryOver) {
    let sum;
    if (l1 && l2) {
      sum = l1.value + l2.value + carryOver;
      if (sum > 9) carryOver = 1;
      else carryOver = 0;
      currNode.next = new Node(sum % 10);
      l1 = l1.next;
      l2 = l2.next;
    }
    else if (l1 && !l2) {
      sum = l1.value + carryOver;
      l1 = l1.next;
    }
    else if (!l1 && l2) {
      sum = l2.value + carryOver;
      l2 = l2.next;
    }
    else {
      sum = carryOver;
    }
    if (sum > 9) carryOver = 1;
    else carryOver = 0;
    currNode.next = new Node(sum % 10);
    currNode = currNode.next;
    power++;
  }
  return head.next;
}

module.exports = { Node: Node, addLinkedList: addLinkedList };
