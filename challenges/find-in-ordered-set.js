/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let mid = Math.floor(arr.length / 2);
  if (target > mid) {
    for (let i = mid; i < arr.length; i++) {
      if (arr[i] === target) return arr[i];
    }
  } else {
    for (let j = arr.length - mid; j >= 0; j--) {
      if (arr[j] === target) return arr[j];
    }
  }
}


module.exports = findInOrderedSet;
