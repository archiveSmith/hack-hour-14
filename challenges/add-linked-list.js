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
  let head = new Node();
  let curr = head;
  let carry = 0;
  
  //traverse l1 and l2 until there are no next nodes in both lists
  while(l1 && l2) {
      let sum  = l1.value + l2.value;
      carry? sum++ : sum;

      if( sum > 9 ) {
        carry = 1;
        sum -= 10;
      } else {
        carry = 0
      }
      curr.value = sum;

      //go to next node
      l1 = l1.next;
      l2 = l2.next;
      
      curr.next = new Node();
      curr = curr.next;
  }
  return head;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
