/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

//start with target and selectively take away from it values in the array until the target reaches 0
function subsetSum(array, target, selectorSize) {
    if(target === 0) return true;
    if(!array.length) return false;     //
    //for each number in the array , either take the number away from target or  skip  ---> whiever route reaches true will retun up
    return subsetSum(array.slice(1), target - array[0]) || subSetSum(array.slice(1), target);

} 
/*  
    //get all possible permutations of adding the sub set sums together
    const uniqueNumbers = [];
   // let selectorSize = 0;

    //if selector Size is 0 then return number 
    //if(selector Size === 0 ) {
        //return number
    //}

    //for selector size from 0 to array length, with 0 just being the element itself
    //for each digit
    for(let d = 0; d < array.length; d++) {
        //current digit
        let digit = array[d];

        //get array without element
        let rest = array.splice(d,1);

        //add digit with each selectorSize chunk of the rest array 
        //get selectorSize by breaking array into sub array


        //and push to unique numnbers if unique




    }

    //check if target matches any numbers in the unique array
    // if(uniqueArray.indexOf(target) > 0) return true;
    // return false;
    
}
*/

module.exports = subsetSum;
