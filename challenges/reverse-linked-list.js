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
    let prevNode = head;
    let currNode = head.next;
    let tempNode = currNode.next;
    let tailNode = head;

    while (currNode !== null) {
        tempNode = currNode.next;
        currNode.next = prevNode;


        prevNode = currNode;
        currNode = tempNode;
    }
    head.next = null;
    
    return prevNode;
}

const first = new Node(0);
let currNode = first;

for (let i = 1; i < 5; i++) {
    currNode.next = new Node(i);
    currNode = currNode.next;
}

let test = reverseLinkedList(first);

while (test) {
    console.log(test.value);
    test = test.next;
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };