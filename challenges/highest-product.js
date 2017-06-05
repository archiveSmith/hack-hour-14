/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
function highestProduct(array) {
  function process(arr){
    let max=0; let j = 0;
    for(let i = 0; i <= arr.length-3; i++){
      for(let j = i+1; i <= arr.length-2; i++){
        for(let z = j+1; z <= arr.length-1; z++){
          if(arr[i]*arr[j]*arr[z] > max){
            max = arr[i]*arr[j]*arr[z];
            }
          }
        }
      }
      return max;
    }
  
  return array.length < 3 ? undefined : array.length > 3 ? process(array) : array.reduce((a,b) => a*b);
}

let arr = [2,3,5,6];
console.log(highestProduct(arr));