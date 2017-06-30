/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  let storage = [];
  this.push = () => storage.push(...arguments);
  this.pop = () => storage.pop(...arguments);
  this.length = () => storage.length;
  this.store = () => storage;
}


/**
* Queue Class
*/


function Queue() {
  let stack1 = new Stack();
  let stack2 = new Stack();

  this.enqueue = () => stack1.push(...arguments);
  this.dequeue = () => {
    if (stack2.size() === 0) {
      while (stack1.size())
      stack2.push(stack1.pop())
    }
    return stack2.pop();
  }
  this.size = () => stack1.size() + stack2.size();
  this.store = () => stack2.store();
  
}

module.exports = {Stack: Stack, Queue: Queue};