/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */


// Create Stack class constructor
// Create and set count to 0;
// Create storage object
function Stack() {
  this.count = 0;
  this.storage = {};
}


// Create push method on Stack prototype
// Add the given value into storage w/ a key of current count
// Increment count
Stack.prototype.push = (value) => {
  this.storage[this.count] = value;
  this.count ++;
}


// Create pop method on Stack prototype
// Check to see if stack is empty
// if so, return undefined
// Decrement count
// Save element at top of stack to a var (to later return)
// Delete that element from storage
// Return saved element
Stack.prototype.pop = () => {
  if (this.count === 0){
    return undefined;
  }
  this.count--
  let popped = this.storage[this.count]
  delete this.storage[this.count]
  return popped;
}

// Create getMax method on Stack prototype
// Return count
Stack.prototype.getMax = () => {
  var counter = 0;
  for (let prop in this.storage){
    if (this.storage[prop] > counter){
      counter = this.storage[prop];
    }
  }
  return counter;
}

module.exports = Stack;