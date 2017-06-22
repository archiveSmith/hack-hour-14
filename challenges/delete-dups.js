/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */


function deleteDups(head) {
  let current = head;
  let previous;

  while (current && current.next) {
    previous = current;

    while (previous.next) {
      if (current.value === previous.next.value) {
        previous.next = previous.next.next;
      } else {
        previous = previous.next;
      }
    }
    current = current.next;
  }
}

function Node(value) {
  this.value = value;
  this.next = null;
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;

module.exports = deleteDups;
