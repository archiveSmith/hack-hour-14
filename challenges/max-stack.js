/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.max;
  this.length = 0;
  this.storage = {};

  this.push = function (value) {
    this.storage[this.length] = value;
    this.length += 1;

    //everytime a value is added, keep track of max
    if (!this.max) this.max = value;
    if (value > this.max) this.max = value;

    return this.length;
  }

  this.pop = function () {
    let temp = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length -= 1;
    return temp;
  }

  this.getMax = function () {
    return this.max;
  }
}
module.exports = Stack;


//testing

/*let test = new Stack();
test.push(5);
test.push(68);
test.push(-17);
test.push(394995);
test.pop()
console.log("this is the max", test.getMax())
console.log(test)
*/