/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack(arr) {
	this.values = arr;
  this.push = (...newVals)=>{
  	// console.log('this inside of push1', this)	
  	// console.log('newVals -->',newVals)
		this.values = this.values.concat(newVals)
		// console.log('new this.values -->', this.values)
  	return this.values.length;
  }

  this.pop = ()=>{
  	let vals = this.values;
  	const popped = vals.slice(vals.length-1, vals.length);
  	// console.log('popped -->', popped)
		this.values = vals.slice(0,vals.length-1);
		// console.log('new vals-->', vals)
		return popped;
  }
  
  this.getMax = ()=>{
  	return Math.max(...this.values)
  }
  
}

module.exports = Stack;