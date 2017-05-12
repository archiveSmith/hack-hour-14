/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

class Stack {
  constructor() {
    this.store = {}
    this.index = 0
    this.max
  }

  push(item) {
    this.store[this.index++] = item
    if (!this.max) this.max = item
    else this.max = (item > this.max) ? item : this.max
    return this.index
  }

  pop() {
    let result = this.store[--this.index]
    if (result !== this.max) return result
    else {
      let curMax
      for (let i = 0; i < this.index; i++) {
        if (i === 0) curMax = this.store[i]
        if (this.store[i] > curMax) curMax = this.store[i]
      }
      this.max = curMax
      return result
    }
  }

  getMax() {
    return this.max
  }
}

module.exports = Stack
