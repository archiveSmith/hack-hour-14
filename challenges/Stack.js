/**
 * Create a stack.Then create a queue using two stacks.
 */

let stack1 = [];
let stack2 = [];
function Stack(array, num) {
    array.push(num);
    
}

Stack(stack1, 3);
Stack(stack1, 4)
console.log(stack1)
/**
* Queue Class
*/


function Queue(arr1, arr2) {
if(!arr1 && !arr2){
    return null;
}
while(arr1){
    console.log('I be here')
    arr2.push(arr1.pop())
}
}
console.log(Queue(stack1, stack2))
console.log(stack1)
// module.exports = {Stack: Stack, Queue: Queue};