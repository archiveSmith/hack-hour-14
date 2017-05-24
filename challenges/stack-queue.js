/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.storage = {};
  this.index = 0; // length
}

Stack.prototype.push = function (value) {
  this.storage[this.index] = value;
  this.index += 1;
};

Stack.prototype.pop = function () {
  const length = this.index;
  const output = this.storage[length - 1];
  delete this.storage[length - 1];
  this.index -= 1;
  return output;
};

/**
* Queue Class
*/


function Queue() {
  this.inbox = new Stack();
  this.outbox = new Stack();
}

Queue.prototype.enqueue = function (value) {
  this.inbox.push(value);
  return value;
};

Queue.prototype.dequeue = function () {
  if (this.outbox.index === 0) {
    if (this.inbox.index === 0) return undefined;
    while (this.inbox.index > 0)
      this.outbox.push(this.inbox.pop());
  }
  return this.outbox.pop();
};


module.exports = { Stack: Stack, Queue: Queue };

const line = new Queue();
line.enqueue(1);
line.enqueue(2);
line.dequeue();
line.enqueue(3);
line.enqueue(4);

console.log(line.dequeue());
