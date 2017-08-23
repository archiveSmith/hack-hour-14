/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

// O(logN) time complexity (for loop is halved over and over using recursion)
// O(1) space complexity constant number of variables (middle)

// Binary search
function findInOrderedSet(array, number) {
  // if array length is falsy return false
  if (!array.length) return false;
  // assign a const middle = to half of the length of the array
  const middle = Math.floor(array.length / 2);
  // if the val at the middle index of arr is equal to num return true
  if (array[middle] === number) { return true; }
  // if its greater recurse with a slice of the array starting from 0 to the middle - 1 index
  if (array[middle] > number) {
    return findInOrderedSet(array.slice(0, middle - 1), number);
  }
  // if its less recurse with a slice of the arr starting from the middle + 1 index up to its length
  if (array[middle] < number) {
    return findInOrderedSet(array.slice(middle + 1, array.length - 1));
  }
}

// var nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(findInOrderedSet(nums, 4)); // -> true
// console.log(findInOrderedSet(nums, 2)); // -> false

module.exports = findInOrderedSet;
