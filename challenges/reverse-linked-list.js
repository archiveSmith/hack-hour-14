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
    let tail = head;
    let counter = 0;
    while (tail.next) { tail = tail.next; counter++ }
    let returnList = tail;
    for (let i = counter - 1; i >= 0; i--) {
        let j = i;
        let current = head
        while (j > 0) { current = current.next; j-- }
        tail.next = current;
        tail = current;
        if (i === 0) { tail.next = head; tail = tail.next; tail.next = null }
    }
    return returnList;
}

reverseLinkedList({ value: 1, next: { value: 3, next: { value: 5, next: { value: 7, next: { value: 9, next: null } } } } })

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
