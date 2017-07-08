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
  let current = head;
  const arr = [];
  while (current.next) {
    arr.push(current.value);
    current = current.next;
    if (!current.next) arr.push(current.value);
  }
  arr.reverse();
  let reversedLL = new Node(arr[0]);
  let curr = reversedLL;
  for (let i = 1; i < arr.length; i += 1) {
    curr.next = new Node(arr[i]);
    curr = curr.next;
  }
  return reversedLL;
}

let list = {value: 1, next: {value: 2, next: {value: 3, next: null}}};
console.log(reverseLinkedList(list));

// recursive attempt:
// function reverseLinkedList(head, node) {
//   if (!head) return node; //base case
//   let current = head;
//   while (current.next) {
//     current = current.next;
//   }
//   const value = current.value;
//   current = null;
//   if (!node) node = new Node(value);
//   else {
//     node.next = new Node(value);
//   }
//   console.log(head);
//   reverseLinkedList(head, node);
// }

//elegant solution:
// function reverseLinkedList(head) {
//   let curr = head;
//   let prev = null;
//
//   while (curr) {
//     let temp = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = temp;
//   }
//   return prev;
// }

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
