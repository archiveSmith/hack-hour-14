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
  let l1Curr = l1;
  let l2Curr = l2;
  let carryOver = 0;
  let total;
  let head = null;
  
  while (l1Curr && l2Curr) {
    let sum = l1Curr.value + l2Curr.value + carryOver;
    if (sum >= 10) {
      carryOver = 1;
      sum = 10 - sum;
    }
    else {
      carryOver = 0;
    }
    let node = new Node(sum);
    
    if (total === undefined) {
      total = node;
      head = node;
    }
    else {
      total.next = node;
      total = node;
    }
    l1Curr = l1Curr.next;
    l2Curr = l2Curr.next;
  }

  if (l1Curr) {
    while (l1Curr) {
      let node = new Node(l1Curr.value);
      total.next = node;
      total = node;
      l1Curr = l1Curr.next;
    }
  }

  if (l2Curr) {
    while (l2Curr) {
      let node = new Node(l2Curr.value);
      total.next = node;
      total = node;
      l1Curr = l2Curr.next;
    }
  }
  
  return head;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
