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
    currInputNode = head.next;
    currOutputNode = new Node (head.value);
    let newHead;
    while (true){
    	if (currInputNode===null) return newHead;
    	newHead = new Node (currInputNode.value);
    	newHead.next = currOutputNode;
    	currOutputNode = newHead;
    	currInputNode = currInputNode.next;
    }
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
