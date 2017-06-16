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
  let set = new Set();
  let curr = head;
  let prev = head;
  
  while (curr) {
    if (set.has(curr.value)) {
      while (curr.next && set.has(curr.next.value)) {
        curr = curr.next;
      }
      prev.next = curr.next;
    }
    else {
      set.add(curr.value);
    }
    prev = curr;
    curr = curr.next;
  }
  
  return head;
}

module.exports = deleteDups;
