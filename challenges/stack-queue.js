// **
//  * Create a stack.Then create a queue using two stacks.
//  */


function Stack() {
    this.store = {}
    this.length = 0;
    this.push = (ele) => { this.store[this.length] = ele; this.length++; return this.length }
    this.pop = () => {
        if (this.length >= 0) {
            let output = this.store[this.lengh - 1];
            this.length--;
            delete this.store[this.length]
        }
    }
}


/**
* Queue Class
*/


function Queue() {
    let s1 = new Stack()
    let s2 = new Stack()
    this.enqueue=(ele)=>{

    }
    this.dequeue=()=>{

    }

}

module.exports = { Stack: Stack, Queue: Queue };