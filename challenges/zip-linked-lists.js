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
  let temp1;
  let temp2;
  let firstNode = l1? l1: l2;
  currNode1 = l1;
  currNode2 = l2;
  while(l1 && l2){
    temp1 = currNode1.next;
    temp2 = currNode2.next
    currNode1.next = l2;
    currNode2.next = temp1;
    currNode1 = temp1;
    currNode2 = temp2;
    if(temp1.next){
      temp1 = temp1.next
    }
    if(temp2.next){
      temp2 = temp2.next
    }
  }
};

module.exports = {Node: Node, zip: zip};
