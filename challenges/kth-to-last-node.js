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
//   let measure = 0;
//   let testNode = head;
//   while(testNode.next) {
//     testNode= testNode.next
//     measure +=1;
//   }
//   let distFromTop = measure - k + 1
//   let counter = 0;
//   console.log(distFromTop);
//   if (distFromTop<0) return undefined;
//   while(counter !== distFromTop) {
//     head = head.next
//     counter +=1;
//   }
//   return head.value;
// }

function kthToLastNode(k, head) {
  let valueArray = [];
  let currNode = head;
  while (currNode.next) {
    valueArray.push(currNode.value);
    currNode = currNode.next
  }
  valueArray.push(currNode.value);
  valueArray.reverse();
  return valueArray[k - 1];
}

module.exports = {
  Node: Node,
  kthToLastNode: kthToLastNode
};
