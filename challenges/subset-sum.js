/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
<<<<<<< HEAD
 *
=======
 *
>>>>>>> 3300049fcfbcdc457c1bbadb16cef893654056f1
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */



  function subsetSum(array, target){

    //brute force
  const subsets = [[]]
  for(let i =0; i<array.length; i+= 1){
    for(let j=0; len = subsets.length;j<len; j+=1){
      const subset = subset[j].concat(array[i]);
      if(subset.reduce((a,c)=> a + c) === target) return true;
      subsets.push(subset)
    }
  }
  return false;
  }

  //better way
  //recursion, tree

  function subsetSum(array, target){
  if(!target) return true;
  if(!array.length) return false;
  return subsetSum(array.slice(1), target - array[0] || array.slice(1) target)
  }
}

module.exports = subsetSum;
