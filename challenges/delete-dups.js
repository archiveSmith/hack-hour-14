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

class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

const deleteDups = (head) => {
  let prev = head
  for (let i = head; i !== null; i = i.next) {
    console.log(i.value, prev)
    if (contains(i.value, i.next)) {
      if (i === head) head = i.next
      prev.next = i.next
    }
    prev = i
  }
  return head
}

const contains = (needle, haystack) => {
  for (let i = haystack; i !== null; i = i.next) {
    if (i.value === needle) return true
  }
  return false
}

module.exports = deleteDups;
