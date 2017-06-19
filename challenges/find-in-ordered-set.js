/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
    let halfLen = Math.floor(arr.length/2);
    console.log('arr: ', arr);
    console.log('arr['+halfLen+']: ',arr[halfLen]);
    if(arr[halfLen] === target) return true;
    else if(!arr[0]) return false;
    else if(arr[halfLen] > target) return findInOrderedSet(arr.slice(0,halfLen), target);
    else return findInOrderedSet(arr.slice(halfLen+1),target);
}

module.exports = findInOrderedSet;
