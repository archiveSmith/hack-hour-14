/* You have two numbers represented by linked lists. 
 * Each node contains a single digit. 
 * The digits are stored in reverse order, 
 * such that the 1's digit is at the head of the list. 
 * Write a function that adds the two numbers and returns 
 * the sum as a linked list with the same
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

class Node {
  constructor (val) {
    this.value = val
    this.next = null
  }
}

const addLinkedList = (l1, l2) => {
  let sum = listToNumber(l1) + listToNumber(l2)
  return numberToList(sum)
}

const listToNumber = (list) => {
  let num = ''
  for (let i = list; i !== null; i = i.next) {
    num += i.value
  }
  return Number(num.split('').reverse().join(''))
}

const numberToList = (num) => {
  let temp = ('' + num).split('').reverse()
  let res
  let curNode
  temp.forEach((cur, idx) => {
    if (idx === 0) {
      res = new Node(cur)
      curNode = res
    }
    else {
      let newNode = new Node(cur)
      curNode.next = newNode
      curNode = newNode
    }
  })
  return res
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
