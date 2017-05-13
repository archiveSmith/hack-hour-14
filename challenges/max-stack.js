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

   this.sortedStorage = [];
 }

 Stack.prototype.push = function(value){

   this.storage[this.index] = value;
   this.sortedStorage.push(value);
   this.sortedStorage.sort(function(a,b){
     return b - a;
   })

   this.index++;

 }

 Stack.prototype.pop = function(){
   if(this.index === 0) return undefined;

   let idx = this.index - 1

   let output = this.storage[idx];

   delete this.storage[idx];

   this.index--;

   let sortIndexSlice = this.sortedStorage.indexOf(output);
   this.sortedStorage.splice(sortIndexSlice,1)



   return output;

 }

 Stack.prototype.getMax = function(){
   return this.sortedStorage[0];
 }

module.exports = Stack;
