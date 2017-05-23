/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack(array) {
    this.size = 0;
    this.storage = array;
    this.pop = ()=>{
        let output = this.storage[this.storage.length - 1];
        this.storage = this.storage.slice(0,this.storage.length)
        return output;
    }
    this.push = (value)=>{
        this.storage = this.storage.concat([value])
        return this.storage;
    }
}


/**
* Queue Class
*/
stack1 = new Stack([1,4,5]);
stack2 = new Stack([8,0,11]);


function Queue(stack1,stack2) {
    this.size = stack1.length + stack2.length;
    this.storage = stack1.concat(stack2);
    this.pop = ()=>{
        let output = this.storage[this.storage.length - 1];
        this.storage = this.storage.slice(0,this.storage.length);
        return output;
    }
    this.push = (value)=>{
        this.storage =  [value].concat(this.storage);
        return this.storage;
    }
}

module.exports = {Stack: Stack, Queue: Queue};