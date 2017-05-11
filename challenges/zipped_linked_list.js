/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  //check if one linked list empty return the other.
  if(!l1) return l2;
  if(!l2) return l1;

  //starting values
  let head = l1;
  let curr = l1;
  let newNext = l2;

  while(curr) {
    //save pointer to old next value
    let oldNext = curr.next;

    //overwrite current next pointer with new next valuw
    curr.next = newNext;

    //move to to new next node
    curr = curr.next;
    
    //update new next value to the saved pointer
    newNext = oldNext;
  }
  
  return head;
};

module.exports = {Node: Node, zip: zip};

/*
let a = new Node(1);
a.next = new Node(2);
a.next.next = new Node(3);

let b = new Node('a');
b.next = new Node('b');

zip(a,b);
*/

