/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
    // this.previous = null;
}

// function reverseLinkedList(head) {
//     while(head.next !== null) {
//         let temp = head;
//         head = head.next;
//         head.next.previous = temp;
//     }
//     return head;
// }


function reverseLinkedList(head) {
    let next;
    let last = null;
    while(head.next !== null) {
        next = head.next;
        head.next = last;
        last = head;
        head = next;
    }
    head.next = last;
    return head;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};