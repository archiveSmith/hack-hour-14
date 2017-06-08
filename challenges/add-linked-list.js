/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let sum;

  let output = new Node ((l1.value + l2.value)%10);
  let carryOver;
  l1.value + l2.value >= 10 ? carryOver=1 : carryOver=0;

  let currNode1=l1;
  let currNode2=l2;
  let currOutputNode = output;

  // console.log('initially currNode1 -->', currNode1)
  // console.log('initially currNode2 -->', currNode2)
  // console.log('initially currOutputNode -->', currOutputNode)

  while (currNode1 || currNode2){
    

    sum = (currNode1.value + currNode2.value)%10 + carryOver;
    currNode1.value + currNode2.value >= 10 ? carryOver=1 : carryOver=0;
    currOutputNode.next = new Node (sum);

    currNode1 = currNode1.next;
    currNode2 = currNode2.next;
    currOutputNode = currOutputNode.next;
  }

  return output;
}

l1 = new Node (2);
l1.next = new Node (1);
l1.next.next = new Node (5);
// console.log('l1 --> ', l1);
l2 = new Node (5);
l2.next = new Node (9);
l2.next.next = new Node (2);

console.log('solution --> ', addLinkedList(l1,l2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
