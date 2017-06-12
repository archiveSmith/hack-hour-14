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
  
  let temp = [];
  for(let i = head; i != null; i = i.next){
    let thisNode = i;
    // thisNode.next = null;
    temp.unshift(thisNode);
  }
  for(let i = 0; i < temp.length; i++){
    temp[i].next = temp[i + 1];
    if(!temp[i].next) temp[i].next = null;
  }
  return temp[0];
}


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
