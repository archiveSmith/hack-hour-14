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
	//get position of tail
	let curr = head;
	let position = 1;

	while(curr.next) {
		curr = curr.next;
		position++;
	}

	//tail - k to get actual position
	const tail_pos = position;
	const tail = curr;
	const index = position - k;

	//edge cases
	if(index === 0) return head.value;

	//tail
	if (index === tail_pos) return tail.value;

	//index is outside the linked list
	if(index > tail_pos || index < 0) return `${index} is out of bounds dummy`;

	//else traverse to index and return value
	curr = head;
	position = 1;

	while(curr) {
		if(position === index) {
			return curr.value;
		}
		curr = curr.next;
		position++;
	}
	return 'node not found';
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
