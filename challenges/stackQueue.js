/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.length = 0;
    this.storage = {};
}
Stack.prototype.push = function(val){
    this.storage[this.length] = val;
    this.length++;
}
Stack.prototype.pop= function() {
    if(this.length === 0) return undefined;
    let outVal = this.storage[--this.length];
    delete this.storage[this.length];
    return outVal;
}
Stack.prototype.print = function() {
    for(let i=0; i<this.length; i++){
        console.log(this.storage[i]);
    }
}

function Queue() {
    this.length = 0;
    this.enq = new Stack();
    this.deq = new Stack();
}
Queue.prototype.transfer = function() {
    let len = this.enq.length
    for(let i=0; i<len; i++){
        this.deq.push(this.enq.pop());
    }
}
Queue.prototype.enqueue = function(val) {
    this.enq.push(val);
}
Queue.prototype.dequeue = function() {
    if(!this.deq.length) this.transfer();
    return this.deq.pop();
}
Queue.prototype.print = function() {
    let outStr = '';
    for(let i=0; i<this.enq.length; i++){
        outStr += this.enq.storage[i].toString();
    }
    outStr += '..';
    for(let i=this.deq.length-1; i>=0; i--){
        outStr += this.deq.storage[i].toString();
    }
    console.log(outStr)
}

module.exports = {Stack: Stack, Queue: Queue};