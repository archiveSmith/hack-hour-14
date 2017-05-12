/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack(array = []) {
  this.length = array.length;
  this.elements = array;
  this.max = array.reduce((a,b)=>Math.max(a,b));

  this.push = (e)=>{
    this.elements[this.elements.length] = e;
    this.max = this.max < e ? e : this.max;
    this.length++;
    return this.length;
  }

  this.pop = ()=>{
    this.length--;
    let popResult =  this.elements.splice(this.elements.length - 1,1);
    this.max = this.elements.reduce((a,b)=> Math.max(a,b));
    return popResult;
  }

  this.getMax = ()=>{
    return this.max
  }

}

// stack = new Stack([1,2,36,8,9]);
// console.log(stack.elements)
// console.log(stack.max)
// console.log(stack.push(50));
// console.log(stack.elements)
// console.log(stack.pop());
// console.log(stack.elements)
// console.log(stack.max)

module.exports = Stack;