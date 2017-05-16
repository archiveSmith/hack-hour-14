/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
<<<<<<< HEAD
      let arr = array;
  let tar = target;
  let storage = [];
  var sum =  array.reduce(function(accu, curr){
    return accu + curr
  })
  
  if (sum === target){
    return true;
  }
  else{
    for (let i=0; i<arr.length; i++){
    let mod = arr.slice[i];
    let shifted = array.shift();
    storage.push(shifted)
    while (arr.length !== 0){
    return subsetSum(arr, tar)
    }
    }
  }
=======

>>>>>>> 3f2fba3175b1fbccfcb669a83fed31c293426626
}

module.exports = subsetSum;
