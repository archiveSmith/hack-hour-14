/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

 function Stack() {
   this.storage = {};
   this.index = 0;
 }

 Stack.prototype.push = function(value){
   this.storage[this.index] = value;
   this.index++;
 }

 Stack.prototype.pop = function(){
   if(this.index === 0) return undefined;

   let output = this.storage[this.index - 1];

   delete this.storage[this.index - 1];

   this.index--;

   return output;

 }

 Stack.prototype.getMax = function(){
   let max = this.storage[0];
   for(let prop in this.storage){
     if(this.storage[prop] > max){
       max = this.storage[prop]
     }
   }
   return max;
 }

module.exports = Stack;


// let checkIndex = (this.index-1);
// if (this.index === 0){
//   return undefined;
// }
// if (checkIndex > -1){
//   let output = this.storage[checkIndex]
//   delete this.storage[checkIndex];
//   this.index = checkIndex;
//   return output;
// }
