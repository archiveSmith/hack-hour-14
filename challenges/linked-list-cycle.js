/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if the linked list has a cyclical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function(value) {
  this.value = value;
  this.next = null;
}


function hasCycle(head) {
  let p1 = head;
  let p2 = head;

  while(p2.next) {
    //move p2, 2 forward if exists and move p1 one forward
    if(p2 === null) return false;
    p2 = p2.next;
    if(p2 === null) return false;
    p2 = p2.next;
    p1 = p1.next;

    //if pointers meet, then there is a loop
    if(p1 === p2) {
      return true;
    }
  }
  //if reached end then there is no loop
  return false;
}


module.exports = {Node: Node, hasCycle: hasCycle}
