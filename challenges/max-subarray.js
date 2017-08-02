/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

//using 2 loops (brute force)
//calculate sum of every possible subarray
//if currMax > finalMax, assign currMax to finalMax
//
const maxSubarray = (arr) => {
  //declare finalMax variable and initialize to -Infinity
  //declare currMax variable
  let finalMax = -Infinity;
  let currMax;

  //loop through array
  for (let i = 0; i < arr.length; i += 1) {
    //set currMax = 0
    currMax = 0;
    //slice array from i to the end
    //for each item in subarray, add item to currMax
    //if currMax > finalMax, set finalMax = currMax
    arr.slice(i).forEach((item) => {
      currMax += item;
      if (currMax > finalMax) finalMax = currMax;
    })
  }
  //return finalMax
  return finalMax;
}

 //using 1 loop

 // const maxSubarray = (arr) => {
 //   //declare currMax and finalMax variables and initialize to -Infinity
 //   let finalMax = -Infinity;
 //   let currMax = -Infinity;
 //   //loop through arr using forEach()
 //   arr.forEach((item) => {
 //     //each iteration, compare current element vs. currMax + current element
 //     //set currMax to the larger num of the two
 //     currMax = Math.max(item, currMax + item);
 //     //compare finalMax vs. currMax
 //     //set finalMax to the larger num of the two
 //     finalMax = Math.max(finalMax, currMax);
 //   });
 //   //return finalMax
 //   return finalMax;
 // }

 console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])); //-> 18 from [3, 10, -4, 7, 2]
 console.log(maxSubarray([15,20,-5,10]));  //-> 40

module.exports = maxSubarray;
