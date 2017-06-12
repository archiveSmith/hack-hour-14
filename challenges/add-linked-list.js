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

// Clarify inputs and desired output
// Check edge cases
// Loop through two input LLs and push values to seperate arrays
// Turn arrays into numbers (remember to reverse)
// Add nums together and convert back into an array (reverse again)
// Loop through new array and create Nodes for each value, push nodes to new array
// Loop and reassign next values 
// Return head node


function addLinkedList(l1, l2) {
  let firstNum = [];
  let secondNum = [];
  let firstFullNum;
  let secondFullNum;
  let addedArr;
  let nodes = [];

  if (!l2) return l1;
  if (!l1 && !l2) return null;

  while (l1) {
    firstNum.push(l1.value);
    l1 = l1.next;
  }
  while (l2) {
    secondNum.push(l2.value);
    l2 = l2.next;
  }

  firstFullNum = parseInt(firstNum.reverse().join(''));
  secondFullNum = parseInt(secondNum.reverse().join(''));

  addedArr = (firstFullNum + secondFullNum).toString().split('').reverse();

  for (let i = 0; i < addedArr.length; i +=1) {
    nodes.push(new Node(addedArr[i]));
  }

  for (let j = 0; j < nodes.length - 1; j += 1) {
    nodes[j].next = nodes[j + 1];
  }

  return nodes[0];
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
