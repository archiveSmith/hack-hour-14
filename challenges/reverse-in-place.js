'use strict';

function reverseInPlace(array) {
  let arr = array;
  let times = Math.floor(arr.length / 2);
  
  for(let i = 0; i < times; i++){
    let first = arr.splice(i,1)[0];
    let last = arr.splice(arr.length - 1 - i,1)[0];
    
    arr.splice(i,0,last);
    arr.splice(arr.length  - i,0, first);
  }
  return arr;

}
module.exports = reverseInPlace;
