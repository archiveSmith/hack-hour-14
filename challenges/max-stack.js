/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack(){
  this.sortedArr = [];
  this.index = 0;
  this.arr = [];

  this.push = function (val) {
      this.arr[this.index++] = val;
      this.sortedArr = this.arr.slice().sort();
  }

  this.pop = function () {
      this.index--;
      let temp =this.arr[this.index];
      this.arr = this.arr.slice(0, this.index);
      this.sortedArr = this.arr.slice().sort();
      return temp;
  }
  
  this.getMax = function () {
    return this.sortedArr[this.sortedArr.length-1]
  }
}

module.exports = Stack;