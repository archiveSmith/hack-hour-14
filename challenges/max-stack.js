/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.length = 0;
  this.maxIndex;
  this.print = () => {
    for(let i=0; i<this.length; i++){
      console.log(this[i]);
    }
  }
  this.push = (val) => {
    if(this.length===0 || val > this[this.maxIndex]) this.maxIndex = this.length;
    this[this.length] = val;
    this.length++;
    return this.length;
  }
  this.pop = () => {
    this.length--;
    if(this.length===this.maxIndex) {
      for(let i=0; i<this.length; i++){
        if(i===0 || this[i] > this[this.maxIndex]) this.maxIndex = i;
      }
    }
    return this[this.length];
  }
  this.getMax = () => {
    return this[this.maxIndex];
  }
}

module.exports = Stack;
