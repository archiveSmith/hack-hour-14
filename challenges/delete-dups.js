/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

var Node = function (value) {
    this.value = value;
    this.next = null;
}

function deleteDups(head) {
    // set up variables
    let currNode = head;
    let compNodeTail = head;
    let compNode = head.next;

    // console.log('currNode --> ', currNode)
    // console.log('compNodeTail --> ', compNodeTail)
    // console.log('compNode --> ', compNode)

    // loop over linked list
    while (currNode) {
        // console.log('currNode.value --> ', currNode.value)
        // console.log('****')
        // for each node, loop over remaning of linked list
        while (compNode) {
            // console.log('currNode.value --> ', currNode.value)
            // console.log('compNode.value --> ', compNode.value)
            // console.log('****')
            // check if there's a duplicate (value of currNode === value of comparisonNode)
            if (currNode.value === compNode.value) {
                compNodeTail.next = compNode.next;
            }
            compNodeTail = compNode;
            compNode = compNode.next;
        }
        compNodeTail = currNode.next;
        if (currNode.next) compNode = currNode.next.next;
        currNode = currNode.next;
    }
    return head;
}

// let ll = new Node(1);
// ll.next = new Node(1);
// ll.next.next = new Node(1);
// console.log('ll --> ', ll);         // --> 1->2->3->3

// console.log('deleteDups(ll) --> ', deleteDups(ll));        // --> 1->2->3

module.exports = deleteDups;
