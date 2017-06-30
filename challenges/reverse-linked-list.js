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
    let prev = null;
    let curr = head;
    let next;
    while(curr){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
// // TEST
// function print(l){
//     for(let curr = l; curr; curr=curr.next){
//         console.log(curr.value);
//     }
// }
// let node1 = new Node(1);
// let node2 = new Node(2);
// node1.next = node2;
// let node3 = new Node(3);
// node2.next = node3;
// let node4 = new Node(4);
// node3.next = node4;
// let node5 = new Node(5);
// node4.next = node5;
// let node6 = new Node(6);
// node5.next = node6;
// print(node1);
// console.log('.....');
// print(reverseLinkedList(node1));