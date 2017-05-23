/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
 this.storage = {}
 this.length = 0
 
this.push = function (val) {
    this.storage[this.length++] = val;
}
this.pop = function () {
    const item = this.storage[--this.length];
    delete this.storage[this.length];
    return item;
}
}


/**
* Queue Class
*/

function Queue() {
 this.inStack = new Stack;
 //test
 this.outStack = new Stack;
 
 this.enqueue = function (val) {
   this.inStack.push(val);
   return this.inStack.length;
 }
 
 this.dequeue = function () {
   if(this.outStack.length === 0) {
     while(this.inStack.length){
       const item = this.inStack.pop()
       this.outStack.push(item)
      // return item
     }
   }
 }
}

// let x = new Queue;
// x.enqueue('C');
// x.enqueue('D');
// console.log(x);
// x.dequeue()
// console.log(x);
module.exports = {Stack: Stack, Queue: Queue};