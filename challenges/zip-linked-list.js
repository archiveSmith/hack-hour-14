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
          console.log("l1 => ", l1);
        console.log("l2 => ", l2);
        console.log("*****************************");
    if (!l1 && !l2) return null;
    if (!l1) return l2;
    if (!l2) return l1;
    let head = l1;
    // while either node is not null
    while (l1 || l2) {
        console.log("l1 => ", l1);
        console.log("l2 => ", l2);
        console.log("*****************************");
        let temp1;
        let temp2;
        // if both nodes have a next value
        if (l1.next && l2.next) {
            temp1 = l1.next;
            temp2 = l2.next;
            l1.next = l2;
            l2.next = temp1;
        }
        // elif l1 has a next, but l2 does not
        else if (l1.next && !l2.next){
            temp1 = l1.next;
            l1.next = l2;
            l2.next = temp1;
            break;
        }
        // elif l2 has a next, but l1 does not
        else if (l2.next && !l1.next) {
            temp2 = l2.next;
            l1.next = l2;
            break;
        }
        // elif neither l2 nor l1 have a next
        else if (!l1.next && !l2.next) {
            l1.next = l2;
            break;
        }
        // increment the nodes only if the node exists
        if (l1) {
            l1 = temp1;
        }
        if (l2) {
            l2 = temp2;
        }
    }
    return head;
};

module.exports = {Node: Node, zip: zip};
