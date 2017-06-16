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
  let sum1 = [];
  let sum2 = [];
  // loop through and get both linked list values
  let curr1 = l1;
  let curr2 = l2;
  while (curr1) {
    sum1.unshift(curr1.value);
    curr1 = curr1.next;
  }

  while (curr2) {
    sum2.unshift(curr2.value);
    curr2 = curr2.next;
  }

  // add
  sum1 = Number(sum1.join(''));
  sum2 = Number(sum2.join(''));
  let total = sum1 + sum2;

  total = String(total).split('').reverse();

  // create new linked list with those values
  const summedList = new Node(total.shift());
  let currNode = summedList;
  while (total.length !== 0) {
    currNode.next = new Node(total.shift());
    currNode = currNode.next;
  }

  return summedList;
}

// const list1 = new Node(2);
// list1.next = new Node(1);
// list1.next.next = new Node(5);
//
// // console.log(list1);
//
// const list2 = new Node(5);
// list2.next = new Node(9);
// list2.next.next = new Node(2);
//
// // console.log(list2);
//
// console.log(addLinkedList(list1, list2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
