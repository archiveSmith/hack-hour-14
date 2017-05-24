/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */
function twoSum(arr, n) {
  for(let i = 0; i < arr.length; i++){
    for(let j = 1; j < arr.length; j++){
      console.log(arr[i],arr[j])
      let check = arr[i] + arr[j];
      if(check === n){
        return true;
      }
    }

  }
  return false;
}

let arr = [1,2,1];
let n = 4;

console.log(twoSum(arr, n));

module.exports = twoSum;
