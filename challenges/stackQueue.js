/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.stack = [];
    this.push = (val) => this.stack.push(val);
    this.pop = () => this.stack.pop();
}


/**
* Queue Class
*/


function Queue() {

}

module.exports = {Stack: Stack, Queue: Queue};