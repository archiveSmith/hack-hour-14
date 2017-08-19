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

function zip(l1=null, l2=null) {
  let nodel1 = new Node(l1);
  let nodel2 = new Node(l2);
  if (nodel1.value === null) return nodel2;
  if (nodel2.value === null) return nodel1;
  let currNode;
  if (nodel1.value !== null) {
    currNode = nodel1;
  }
  if (nodel2.value !== null) {
    currNode.next = nodel2;
  }
  return currNode;
};

module.exports = {Node: Node, zip: zip};