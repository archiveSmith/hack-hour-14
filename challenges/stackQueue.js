/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = [];
  this.index = 0;
}

Stack.prototype.push = function (value) {
  this.index += 1;
  return this.stack.push(value);
}

Stack.prototype.pop = function () {
  this.index -= 1;
  return this.stack.pop();
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
//console.log(stack);

/**
* Queue Class
*/

function Queue() {
  this.inbox = new Stack();
  this.outbox = new Stack();
}

Queue.prototype.enqueue = function (value) {
  return this.inbox.push(value);
}

Queue.prototype.dequeue = function () {
  while (this.inbox.index) {
    this.outbox.push(this.inbox.pop());
  }
  return this.outbox.pop();
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue);

module.exports = {Stack: Stack, Queue: Queue};
