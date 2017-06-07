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
  let sum1 = '', sum2 = '';
  while(l1){
    sum1 += l1.value
    l1 = l1.next
  }
  while(l2){
    sum2 += l2.value
    l2 = l2.next
  }
  newSum = eval(sum1) + eval(sum2);
  newSum = newSum.toString().split('').reverse().join('')
  newLinkedList = new Node(newSum[0]);
  output = newLinkedList;
  for(let i =1; i<newSum.length;i++){
    newLinkedList.next = new Node(newSum[i])
    newLinkedList = newLinkedList.next
  }
  return output;
}

let a = new Node(2)
a.next = new Node(1)
a.next.next = new Node(5)

let b = new Node(5)
b.next = new Node(9)
b.next.next = new Node(2)

console.log(addLinkedList(a,b))

module.exports = {Node: Node, addLinkedList: addLinkedList};
