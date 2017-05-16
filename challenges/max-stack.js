/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Node(val, maxValue) {
  this.value = val;
  this.max = maxValue;
}

function Stack() {
  // body...
  this.stack = [];
  
  this.pop = function() {
    if (this.stack.length === 0) {
      return undefined;
    }
    let node = this.stack.pop();
    return node.value;
  };
  
  this.push = function(value) {
    let max;
    if (this.stack.length === 0) {
      max = Number.MIN_VALUE;
    }
    else {
      max = this.stack[this.stack.length-1].max;
    }
    this.stack.push(new Node(value, value > max ? value : max));
  }
  
  this.getMax = function() {
    if (this.stack.length === 0) {
      return undefined;
    }
    return this.stack[this.stack.length-1].max;
  }
}

module.exports = Stack;