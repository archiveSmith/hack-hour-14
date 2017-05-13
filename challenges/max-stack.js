/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.stack = {};
  this.index = 0; // height of stack
  this.max = null;
}

Stack.prototype.push = function(value) {
  this.stack[this.index] = value;
  this.index += 1;
  if (!this.max) { this.max = value; }
  else if (this.max < value) { this.max = value; }
};

Stack.prototype.pop = function(value) {
  const temp = this.stack[this.index - 1];
  delete this.stack[this.index - 1];
  this.index -= 1;
  return temp;
};

Stack.prototype.getMax = function() {
  return this.max;
};

// TO DO - WILL NOT ACCOUNT FOR POPPING THE MAX VALUE OFF THE STACK

module.exports = Stack;

// let pile = new Stack()
// pile.push(1);
// pile.push(2);
// pile.push(4);
// pile.push(5);
// pile.push(7);
// console.log(pile.pop());
// console.log(pile.stack);
// console.log(pile.getMax());
