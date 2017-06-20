/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
    const midI = Math.floor(arr.length/2)
    const mid = arr[midI]
    // console.log('arr --> ', arr)
    // console.log('mid --> ', mid)

    // base case
    if (mid === target) return true;

    // recursive case 1
    if (target < mid && arr.length > 1) return findInOrderedSet(arr.slice(0,midI), target)

    console.log('arr.slice(midI,arr.length+1) --> ', arr.slice(midI,arr.length+1))
    // recursive case 2
    if (target > mid && arr.length > 1) return findInOrderedSet(arr.slice(midI,arr.length+1), target)

    // base case
    else return false;
}

var nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(findInOrderedSet(nums, 4));  // --> true
console.log(findInOrderedSet(nums, -3));  // --> false


module.exports = findInOrderedSet;
