/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.index = 0;
  this.storage = {};
  this.max;
  this.push = (value) => {
    if (!this.max) {
      this.max = [value];
    } else if (value > this.max[0]) {
      this.max.unshift(value);
    } else if (value === this.max[0]) {
      this.max.unshift(value);
    }
    this.storage[this.index] = value;
    return ++this.index;
  };
  this.pop = () => {
    const retVal = this.storage[--this.index];
    retVal === this.max[0] ? this.max.shift() : null;
    delete this.storage[this.index];
    return retVal;
  };
  this.getMax = () => this.max[0];
}

module.exports = Stack;
