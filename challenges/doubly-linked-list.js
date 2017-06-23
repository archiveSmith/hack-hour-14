/*
Create a doubly linked list with an add and remove method
 */

class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }
  
  add (val) {
    let newNode = new Node(val)
    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
  }
  
  remove (val) {
    if (this.head !== null) {
      if (this.head.val === val) {
        this.head = this.head.next
        this.head.prev = null
        return
      }
      for (let i = this.head; i !== null; i = i.next) {
        if (i.next.val === val) {
          if (i.next.next === null) {
            i.next = null
            this.tail = i
          } else {
            i.next = i.next.next
            i.next.prev = i
          }
          break
        }
      }
      return
    }
  }
  
  log () {
    if (this.head !== null) {
      for (let i = this.head; i !== null; i = i.next) {
        console.log(i.val)
      }
    }
  }
}

class Node {
  constructor (val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

module.exports = LinkedList;
