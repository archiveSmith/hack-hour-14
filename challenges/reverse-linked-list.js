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
}

function reverseLinkedList(head) {
    let node = head;
    let next;
    let lastNode;
    while(node) {
        if (node === head){
            lastNode = node;
            next = node.next;
            node.next = null;
        }
        else{
            next = node.next;
            node.next = lastNode;
            lastNode = node;
        }
        node = next;
    }
    return lastNode;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
