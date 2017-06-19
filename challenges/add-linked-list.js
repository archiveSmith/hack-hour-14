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
  // let output = new Node(0);
  let carry = 0;
  for(let i = l1, j = l2; i && j; i = i.next, j = j.next){
    let sum = i.value + j.value + carry;
    i.value = sum%10;
    carry = Math.floor(sum/10);
    if(i.next && !j.next){
      i.next.value += carry;
    }
    else if(!i.next && j.next){
      j.next.value += carry;
      i.next = j.next;
    }
    else if(!i.next && !j.next && carry !== 0){
      i.next = new Node(carry);
    }
  }
  return l1;
}

// TEST
function print(l){
    for(let curr = l; curr; curr=curr.next){
        console.log(curr.value);
    }
}
let node1_1 = new Node(2);
let node1_2 = new Node(1);
node1_1.next = node1_2;
let node1_3 = new Node(5);
node1_2.next = node1_3;
let node1_4 = new Node(1);
node1_3.next = node1_4;
// let node1_5 = new Node(5);
// node1_4.next = node1_5;
// let node1_6 = new Node(6);
// node1_5.next = node1_6;

let node2_1 = new Node(5);
let node2_2 = new Node(9);
node2_1.next = node2_2;
let node2_3 = new Node(9);
node2_2.next = node2_3;
// let node2_4 = new Node(1);
// node2_3.next = node2_4;
// let node2_5 = new Node(2);
// node2_4.next = node2_5;

console.log('l1: ');
print(node1_1);
console.log('l2: ');
print(node2_1);
console.log('add: ');
print(addLinkedList( node2_1, node1_1));

module.exports = {Node: Node, addLinkedList: addLinkedList};
