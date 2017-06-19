/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  if(!arr.length)return false;
  let selection = arr[Math.floor(arr.length/2)];
  if(arr.length == 1 && selection != target) return false;
  if(selection === target) return true;
  if( selection > target ) return findInOrderedSet(arr.slice(0,Math.floor(arr.length/2)),target);
  if( selection < target ) return findInOrderedSet(arr.slice(Math.floor(arr.length/2)),target);
  return false;

}


module.exports = findInOrderedSet;
