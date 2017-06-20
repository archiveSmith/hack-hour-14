/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

//comeback to this one
function findInOrderedSet(arr, target) {
    let middleValue;
    let middleIndex
    let curr;
  
    
    
    middleIndex = Math.floor((arr.length / 2))
    middleValue = arr[middleIndex];  
    

    if(target === middleValue){
        return true; 
    }
    else if( target < middleValue){
        curr = arr.slice(0,middleIndex) 
       return findInOrderedSet(curr, target);
    }else if(target > middleValue){
        curr = arr.slice(middleIndex,arr.length-1) 
        return findInOrderedSet(curr, target);
    }
    return false; 
}

var nums = [1, 6, 7, 9, 17, 45, 4]
console.log(findInOrderedSet(nums, 4));  //-> true
console.log(findInOrderedSet(nums, 2));  //-> false


module.exports = findInOrderedSet;
