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


//Change pointers instead of making new list
var Node = function(data) {
  this.data = data;
  this.next = null;
}


function deleteDups(head) {
  const nodes = {};
  let currentNode = head
  while (currentNode.next) {
    if (nodes[currentNode.data]) {
      nodes[currentNode.data]++
    } else {
      nodes[currentNode.data] = 1
    }
    currentNode = currentNode.next
  }

  for (key in nodes) {
    if (nodes[key] === 1) {
      currentNode.data = key
    }
    currentNode = currentNode.next
  }
  return head
}

// function deleteDups(head) {
//   let current = head
//   let previous
//
//   while (current.next) {
//     previous = current
//
//     while (previous.next) {
//       if (current.value === previous.next.value) {
//         previous.next = previous.next.next
//       } else {
//         previous = previous.next
//       }
//     }
//     current = current.next
//   }
//
// }

module.exports = deleteDups;
