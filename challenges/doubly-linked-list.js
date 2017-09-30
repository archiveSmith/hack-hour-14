/*
Create a doubly linked list with an add and remove method
 */

class Node {
 constructor(value) {
   this.value = value;
   this.next = null;
   this.prev = null;
 }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    //declare const node and initialize to new node
    const node = new Node(value);
    //if no head, assign head and tail to node
    if (!this.head) this.head = this.tail = node;
    else {
      //set tail.next = node
      this.tail.next = node;
      //set node.prev = this.tail
      node.prev = this.tail;
      //set tail to node
      this.tail = node;
    }
  }

  remove(value) {
    //edge case:
    if (!this.head) throw new Error('cannot remove value from empty linked list');
    //check head:
    else if (this.head.value === value) {
      //if value = this.head.value, reassign this.head to this.head.next
      this.head = this.head.next;
      //reassign this.head.prev = null
      this.head.prev = null;
      return;
    }
    //check tail:
    else if (this.tail.value === value) {
      const temp = this.tail;
      this.tail.prev.next = null;
      this.tail = temp.prev;
      return;
    }
    else {
      let current = this.head;
      //loop through linked list
      while(current) {
        //if current.val === val, set current.next.prev to current.prev
        //set current.prev to current.next
        if (current.value === value) {
          current.next.prev = current.prev;
          current.prev = current.next;
          return;
        }
        current = current.next;
      }
    }
  }
}

// function LinkedList() {
//   this.head = null;
//   this.tail = null;
// }
//
// function Node(val) {
//   this.val = val;
//   this.next = null;
//   this.prev = null;
// }
//
// /*
// Adds a node to the end of the list
//  */
// LinkedList.prototype.add = function(val) {
//   let node = new Node(val);
//   if (!this.head) {
//     this.head = node;
//     this.tail = node;
//   }
//   else {
//     this.tail.next = node;
//     let temp = this.tail;
//     node.prev = temp;
//     this.tail = node;
//   }
// };
//
// /*
// Removes the first node with the inputted value
//  */
// LinkedList.prototype.remove = function(val) {
//   if (!this.head) return 'headless linked list';
//   else if (this.head.val === val) {
//     this.head = this.head.next;
//     this.head.prev = null;
//     return 'removed';
//   }
//   else {
//     let current = this.head.next;
//     while (current) {
//       if (current.val === val) {
//         current.prev.next = current.next;
//         if (current.next) current.next.prev = current.prev;
//         if (!current.next) this.tail = current.prev;
//         return 'removed';
//       }
//       current = current.next;
//     }
//   }
//   return 'value not found in linked list';
// };

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.remove(4);
list.remove(3);
console.log(list.tail);
console.log(list.head.value)
console.log(list.head.next.value)
// console.log(list.head.next.next.value)
// console.log(list.head.next.next.next.value)

module.exports = LinkedList;
