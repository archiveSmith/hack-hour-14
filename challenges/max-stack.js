/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.contents = {};
  this.length = 0;
}

Stack.prototype.push = function (value) {
  this.contents[this.length] = value;
  this.length += 1;
  return this.length;
};

Stack.prototype.pop = function () {
  const temp = this.contents[this.length - 1];
  delete this.contents[this.length - 1];
  this.length -= 1;
  return temp;
};

Stack.prototype.getMax = function () {
  let max = -Infinity;
  for (const props in this.contents) {
    if (this.contents[props] > max) {
      max = this.contents[props];
    }
  }
  return max;
}

let stack = new Stack;
stack.push(107);
stack.push(81);
stack.push(1);
console.log(stack.getMax());

module.exports = Stack;
