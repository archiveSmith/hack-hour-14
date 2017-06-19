/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  //O(n) solution:
  // for (let i = 0; i < arr.length; i += 1) {
  //   if (arr[i] === target) return true;
  // }
  // return false;

  //O(log n) solution:
  if (!arr.length) return false;
  else if (arr[Math.floor(arr.length / 2)] === target) return true;
  else if (arr[Math.floor(arr.length / 2)] > target) return findInOrderedSet(arr.slice(0, Math.floor(arr.length / 2)), target);
  else if (arr[Math.floor(arr.length / 2)] < target) return findInOrderedSet(arr.slice(Math.floor(arr.length / 2) + 1, arr.length), target)
}

var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 7));  //-> true
console.log(findInOrderedSet(nums, 2));  //-> false

module.exports = findInOrderedSet;
