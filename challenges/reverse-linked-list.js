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
    //create new linkedlist
    let linkNew;
    //create a tracking node value
    let prevNode = null;
    //while the current node value is not null
    while(head){
        linkNew = new Node(head.value)
        linkNew.next = prevNode;
        prevNode = linkNew;
        head = head.next;
    }
    return linkNew
}

// let testHead = new Node(0)
// let test1= new Node(1)
// let test2= new Node(2)
// let test3= new Node(3)

// testHead.next = test1;
// test1.next = test2;
// test2.next = test3;

// // console.log(testHead)
// reverseLinkedList(testHead)

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
