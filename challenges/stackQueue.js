/**
 * Create a stack.Then create a queue using two stacks.
 */
function Stack() {
    this.stack = [];
    this.index = 0;

    this.push = function (val) {
        this.stack[this.index++] = val;
    }

    this.pop = function () {
        const retVal = this.stack[--this.index];
        this.stack = this.stack.slice(0, this.index);
        return retVal;
    }
}

/**
* Queue Class
*/
function Queue() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
    this.index = this.stackOne.index;

    this.enqueue = function(val) {
        this.stackOne.push(val);
    }

    this.dequeue = function(){
        while(this.stackOne.index > 0) this.stackTwo.push(this.stackOne.pop());
        const retVal = this.stackTwo.pop();
        while(this.stackTwo.index > 0) this.stackOne.push(this.stackTwo.pop());
        return retVal;
    }
}

module.exports = { Stack: Stack, Queue: Queue };
