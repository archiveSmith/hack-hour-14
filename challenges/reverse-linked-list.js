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
<<<<<<< HEAD
    let currNode = head;
    let prevNode = null;
    let nextNode = null;
    
    while (currNode){
        nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }
head = prevNode;
return head;
=======

>>>>>>> d354a6962e9e9e1f1587f35b318ac1bf160e469d
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
