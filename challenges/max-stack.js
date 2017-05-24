/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

// function Stack() {
//   // body...
// }

class Stack {
  constructor() {
    this.stack = [];
  }
  
  spush(val) {
    
    if (this.stack.length === 0) {
      this.stack[0] = val;
    } else {
      this.stack[this.stack.length] = val;
    }
    return this.stack.length;
    
  }
  
  spop() {
    return this.stack.splice(this.stack[this.stack.length]);
  }
  
  getMax() {
    if (this.stack.length <= 1) {
      return this.stack[0];
    }
    return this.stack.sort((a,b) => a - b).slice(-1);
  }
  
}

module.exports = Stack;