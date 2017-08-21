/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

// function kthToLastNode(k, head) {
//   let values = [];
//   let currentNode = head;
//   // traverse linked list and push value in each node into values array
//   while (currentNode !== null) {
//     values.push(currentNode.value);
//     currentNode = currentNode.next;
//   }
//   // edge case: if input = 0
//   if (k === 0) return 'invalid input';
//   // return kth to last value in values array
//   return values[values.length - k];
// }

// function kthToLastNode(k, head) {
//   const array = [];
//
//   for (let i = head; i; i = i.next) {
//     array.push(i.val);
//   }
//   return array[array.length - k];
// }

function kthToLastNode(k, head) {
  let lead = head;
  let follow = head;

  for (let i = 0; i < k; i += 1) {
    lead = lead.next;
  }

  //using for loop:
  for (let current = lead; current; current = current.next) {
    follow = follow.next;
    if (!current.next) return follow.value;
  }

  //using while loop:
  // let current = lead;
  // while (current) {
  //   follow = follow.next;
  //   if (!current.next) return follow.value;
  //   current = current.next;
  // }
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(kthToLastNode(2, a));
//console.log(JSON.stringify(a));
