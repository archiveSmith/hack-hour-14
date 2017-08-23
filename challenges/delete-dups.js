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

// O(n)2 time complexity (nested loops)
// O(1) space complexity (constant num of variables)

function deleteDups(head) {
  // create reference in head Node
  let currNode = head;
  // set a prev variable to track previous nodes
  let prev;
  // while currNode && currNode.next is not null
  while (currNode && currNode.next) {
    // assign prev to the current Node
    prev = currNode;
    // while prev.next is not null
    while (prev.next) {
      // if the value of the curr Node is equal to prev.next's value
      if (currNode.value === prev.next.value) {
        // reassign prev.next to the node after the next node.
        prev.next = prev.next.next;
      } else {
        // else just reassign prev to the next Node
        prev = prev.next;
      }
    }
    // reassign currNode to its next node to move down list
    currNode = currNode.next;
  }
}

function Node(val) {
  this.value = val;
  this.next = null;
}

// let ll = new Node (1)
// ll.next = new Node (2)
// ll.next.next = new Node (2)
// ll.next.next.next = new Node (3)
// ll.next.next.next.next = new Node (2)
// ll.next.next.next.next.next = new Node (3)
// ll.next.next.next.next.next.next = new Node (1)
//
// console.log(ll);
// deleteDups(ll);
// console.log(ll);

module.exports = deleteDups;
