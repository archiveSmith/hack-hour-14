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

function kthToLastNode(k, head) {
  var current = head;
  var counter = 0;
  var newCurrent = head;
  
  // check the first node
  
  
  while (current){
   current = current.next ;
   counter ++;
  
  }
  while (counter > 0){
    if (counter === k){
      return newCurrent.value;
    } 
    counter--
    newCurrent = newCurrent.next;
  }
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
