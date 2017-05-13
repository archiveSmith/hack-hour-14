/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

// TO DO REMOVE WONT RECALCULATE MAX
  // have a sorted stack??

function Stack() {
  // body...
  this.elements = {};
  this.length = 0;
  this.max = null;

  this.push = function (element) {
    this.elements[this.length++] = element;
    this.max = element > this.max ? element : this.max;

    return this.length;
  }

  this.pop = function () {
    const output = this.elements[this.length - 1]
    delete this.elements[--this.length]
    return output;
  }

  this.getMax = function () {
    return this.max
  }
}

const stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(2);

console.log('{a}', stack.elements);
console.log('3', stack.length);
console.log('3', stack.max);

console.log('2', stack.pop());
console.log('2', stack.length);
console.log('3', stack.max);
console.log('{a}', stack.elements);

module.exports = Stack;