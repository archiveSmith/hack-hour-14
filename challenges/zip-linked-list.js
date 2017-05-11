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
    let curr1 = temp1 = l1;
    let curr2 = temp2 = l2;

    while(curr1 && curr2){
      if(temp1) temp1 = temp1.next;
      if(temp2) temp2 = temp2.next;

      curr1.next = curr2;
      if(temp1) curr2.next = temp1;

      [curr1, curr2] = [temp1, temp2];
    }
    return l1 ? l1 : l2;
};

let l1 = new Node(11);
let l2 = new Node(12);

module.exports = {Node: Node, zip: zip};
