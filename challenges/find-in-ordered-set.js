/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


// function findInOrderedSet(arr, target) {
//     let mid = Math.floor(arr.length / 2);
//     if (arr[mid] === target) return true;
    
//     if (arr[mid] > target) findInOrderedSet()
// }


function findInOrderedSet(arr, target) {
    function binSearch(start, end) {
        const mid = Math.floor((start + end) / 2)
        if (arr[mid] === target) return true;
        if (start === end) return false;
        if(arr[mid] > target){
            return binSearch(start, mid - 1);
        }else {
            return binSearch(mid+1, end)
        }
    }
    return binSearch(0, arr.length - 1)
}

module.exports = findInOrderedSet;
