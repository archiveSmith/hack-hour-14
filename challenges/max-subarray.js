/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */
//find the maximum sum of consequent elements in the array 
//start from a positive number
//  if the next number is negative and takes away more than the +ive number adds, look for a new start point
//  else add the number and keep going
//avoid negative numbers unless the elements after it can add more than 
function maxSubarray(arr) {
    let curr;
    let start;
    let next;
    let sum = 0;

    //parse array
    for(let i=0; i<arr.length; i++) {
        curr = arr[i]
        next = arr[i+1]

        //start from positive num
        if(!start && curr >= 0 ) {
            start = curr;
            
        }

        if(curr > Math.abs(next)) {
            sum += curr;
        } else {
            sum = 0;
            start = undefined;
        }
    }

}

// function maxSubarray(arr) {
//     let curr;
//     let start;
//     let next;
//     let sum = 0;

//     //parse array
//     for(let i=0; i<arr.length; i++) {
//         curr = arr[i]
//         next = arr[i+1]
        
//         console.log("current: ", curr, "next: ", next)
        
//         //start from positive num
//         if(!start && curr >= 0 ) {
//             start = curr;
            
//         }

//         if(next > 0) {
//             sum += curr;
//         } else {
//           if(curr > Math.abs(next)) {
//             sum += curr;
//           } else {
//             sum = 0;
//             start = undefined;
//           }
//         }
        
//         console.log("\nstart", start, "sum: ", sum)
//     }

// }
// module.exports = maxSubarray;
maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])

module.exports = maxSubarray;
