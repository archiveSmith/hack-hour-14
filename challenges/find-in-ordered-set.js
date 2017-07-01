/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
<<<<<<< HEAD
    if (arr.length < 3) return false;
    if (arr[arr.length/2] === target) return true;
    if (arr[arr.length/2] < target) return findInOrderedSet(arr.slice(arr.length/2, arr.length))
=======

>>>>>>> e05a5bdca0729f38b0df42019f7d1f5ceee58fbe
}


module.exports = findInOrderedSet;
