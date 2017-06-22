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

  //edge cases:
  if (!l2) return l1;
  if (!l1 && !l2) return null;

  const arr1 = [];
  const arr2 = [];

  while (l1) {
    arr1.push(l1.value);
    l1 = l1.next;
  }

  while (l2) {
    arr2.push(l2.value);
    l2 = l2.next;
  }

  const sum = (+arr1.reverse().join('')) + (+arr2.reverse().join(''));
  const arr = sum.toString().split('').reverse();

  let linkedList = null;
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    linkedList = {
      value: arr[i],
      next: linkedList
    }
  }
  return linkedList;

  //other method to conver array to linked list:
  // const nodes = [];
  // for (let i = 0; i < arr.length; i += 1) {
  //   nodes.push(new Node(+arr[i]));
  // }
  //
  // for (let j = 0; j < nodes.length - 1; j += 1) {
  //   nodes[j].next = nodes[j + 1];
  // }
  // return nodes[0];
}

const list1 = {value: 2, next: {value: 1, next: {value: 5, next: null}}};
const list2 = {value: 5, next: {value: 9, next: {value: 2, next: null}}};

console.log(addLinkedList(list1,list2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
