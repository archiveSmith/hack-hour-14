/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.contents = [];

  this.push = (ele) => {
    this.contents.push(ele);
  }

  this.pop = () => {
    return this.contents.pop();
  }
}


/**
* Queue Class
*/


function Queue() {

  // RE-FACTOR
    // Regular and reversed array
    // Action based on which array is not empty
  this.stack1 = new Stack();
  this.stack2 = new Stack();

  this.push = (ele) => {
    this.stack1.push(ele);
  }

  this.shift = () => {
    let temp = this.stack1.pop();
    let output;

    while(temp) {
      this.stack2.push(temp);
      temp = this.stack1.pop();
    }

    output = this.stack2.pop();
    temp = this.stack2.pop();

    while(temp) {
      this.stack1.push(temp);
      temp = this.stack2.pop();
    }

    return output;
  }
}

const queue = new Queue();
queue.push(1);
console.log(queue.stack1.contents);
queue.push(2);
console.log(queue.stack1.contents);
queue.push(3);
console.log(queue.stack1.contents);
queue.push(4);
console.log(queue.stack1.contents);

console.log(queue.shift());
queue.push(5);
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
// const stack = new Stack();
// stack.push(1);
// console.log(stack.contents);
// stack.push(2);
// console.log(stack.contents);
// stack.push(3);
// console.log(stack.contents);
// stack.push(4);
// console.log(stack.contents);
// stack.pop(1);
// console.log(stack.contents);
// stack.pop(2);
// console.log(stack.contents);

module.exports = { Stack: Stack, Queue: Queue };