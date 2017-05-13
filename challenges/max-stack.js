/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  let obj = {
    length: 0,
    max: [],
    push: function (val) {
      if(val >= obj.max[obj.max.length-1]|| obj.max.length ===0){obj.max.push(val)}
      obj[obj.length] = val;
      obj.length++; return obj.length;
    },
    pop: function () {
      let output = obj[obj.length-1];
      obj.length--;
      if(output === obj.max[obj.max.length-1]){obj.max.pop()}
      return output;
    },
    getMax: function(){
      return obj.max[obj.max.length-1]
    }
  }
  return obj;
}

module.exports = Stack;