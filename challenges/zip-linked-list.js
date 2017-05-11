/* Merge two linked lists so that their nodes alternate.
 Let the first node of the zipped list be
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
    // RECURSION
    // base case: l1 = null || l2 = null
    // console.log('FIRST', l1,l2);
    if(l1 === null  || l2 === null) {
        return null;
    }
    const l1Next = l1.next;
    const l2Next = l2.next;
    const head = l1;
    head.next = l2;
    head.next.next = zip(l1Next, l2Next);

    return head;
};

const ll1 = new Node('a0');
const ll2 = new Node('b0');
let currNode1 = ll1;
let currNodeb = ll2;
for (let i = 1; i < 2; i++) {
    currNode1.next = new Node('a' + i);
    currNode1 = currNode1.next;
    currNodeb.next = new Node('b' + i);
    currNodeb = currNodeb.next;
}
// console.log(ll1, ll2);
console.log(zip(ll1, ll2));
module.exports = {Node: Node, zip: zip}