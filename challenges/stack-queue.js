/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage =[];
  this.index = 0;
}
Stack.prototype.push = function(value){
  this.storage[this.index] = value;
  this.index++
  return value;
}


Stack.prototype.pop = function(){
  if(this.index === 0 ) return undefined
  let pop = this.storage[this.index - 1];
  delete this.storage[this.index- 1]
  return pop;
}

let output = new Stack()
output.push(1);
console.log(output.storage);
console.log(output.pop())

/**
* Queue Class
*/


function Queue() {
this.inComing = new Stack();
this.outGoing = new Stack();
}
Queue.prototype.enqueue = function(value) {
    this.inComing.push(value)
    return value;
}
Queue.prototype.dequeue = function() {
    if(this.outGoing.index === 0) {
    if(this.inComing.index === 0) return undefined;
    while(this.inComing.index > 0) {
      this.outGoing.push(this.inComing.pop())
    }
    }
    return this.outGoing.pop();
}

module.exports = {Stack: Stack, Queue: Queue};
