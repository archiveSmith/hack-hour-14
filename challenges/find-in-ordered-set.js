/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

function findInOrderedSet(array, number) {
  // binary search
  // let minIndex = 0;
  // let maxIndex = arr.length - 1;
  // let currentIndex;
  // let currentElement;
  //
  // while (minIndex <= maxIndex) {
  //   currentIndex = Math.floor((minIndex + maxIndex) / 2);
  //   currentElement = arr[currentIndex];
  //
  //   if (currentElement < target) {
  //     minIndex = currentIndex + 1;
  //   } else if (currentElement > target) {
  //     maxIndex = currentIndex - 1;
  //   } else {
  //     return true;
  //   }
  // }
  // return false;

  if(!array.length) return false;
  let middle = Math.floor(array.length/2);
  if (array[middle] === number) {
    return true;
  }
  if (array[middle] > number) {
    return findInOrderedSet(array.slice(0, middle - 1), number)
  }
  if (array[middle] < number) {
    return findInOrderedSet(array.slice(middle+1, array.length -1))
  }
}

var nums = [1, 4, 6, 7, 9, 17, 45]
console.log(findInOrderedSet(nums, 4)); // -> true
console.log(findInOrderedSet(nums, 2)); // -> false

module.exports = findInOrderedSet;
