/* Merge two linked lists so that their nodes alternate. 
 * Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. 
 * No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  if (l1 === undefined) return l2;
  let curNode = l1;
  let nextNode = l2;
  
  while (curNode !== null) {
   let temp = curNode.next;
   curNode.next = nextNode;
   curNode = curNode.next;
   nextNode = temp;
  }

  for (let node = l1; node != null; node = node.next) {
    if (node.next === null) {
      node.next = nextNode;
      break;
    }
  }

  return l1;
}

module.exports = {Node: Node, zip: zip};
