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
  let currNode = head;
  let temp = [head.value];
  while(currNode.next) {
    if (temp.indexOf(currNode.next.value) === -1) { temp.push(currNode.next.value) }
    else { currNode.next = currNode.next.next}
    // console.log(temp);
    currNode = currNode.next
  }
}

function Node(val) {
  this.value = val;
  this.next = null;
}

// const ll = new Node (1)
// ll.next = new Node (2)
// ll.next.next = new Node (2)
// ll.next.next.next = new Node (2)
// ll.next.next.next = new Node (3)
//
// deleteDups(ll);
// console.log(ll);

module.exports = deleteDups;
