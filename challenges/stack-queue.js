/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.s = [];

  this.push = function(value) {
      this.s.push(value);
      return this.s.length;
  }

  this.pop = function() {
      return this.s.pop();
  }

  this.top = function() {
      return this.s[this.s.length-1];
  }
}

/**
* Queue Class
*/

function Queue() {
  this.s1 = new Stack();
  this.s2 = new Stack();
  this.count = 0;
  
  this.enqueue = function(value) {
      this.s1.push(value);
      return ++this.count;
  }

  this.dequeue = function() {
      let top = this.s1.pop();
      while (top) {
        this.s2.push(top);
        top = this.s1.pop();
      }
      let value = this.s2.pop();
      
      top = this.s2.pop();
      while (top) {
        this.s1.push(top);
        top = this.s2.pop();
      }
      
      --this.count;
      return value;
  }
}

module.exports = {Stack: Stack, Queue: Queue};