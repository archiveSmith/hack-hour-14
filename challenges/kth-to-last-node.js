/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

 function Node(val) {
 	this.value = val;
 	this.next = null;
 }

 function kthToLastNode(k, head) {
 	let counter = 1
 	let currNode = head;

 	while(currNode.next!==null) {
 		currNode = currNode.next;
 		counter++
 	}
 	
 	let difference = counter - k;
 	currNode = head;

 	while(difference > 0) {
 		currNode = currNode.next;
 		difference--;
 	}

 	return currNode.value;
 }

 module.exports = {Node: Node, kthToLastNode: kthToLastNode};
