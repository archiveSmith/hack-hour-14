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
let current = head;
let list = [];
let result;
while(current){
  list.push(current);
  current=current.next;
}
result = list.pop()||[];
current = result;
while(current){
  current.next = list.pop();
  current = current.next
}
console.log(current)
return result;
}
//test

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
