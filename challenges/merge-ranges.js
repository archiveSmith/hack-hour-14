/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

/* idea 2
 flatten range array and fill in gaps
  remake range
*/

 //var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 
 //mergeRanges(times); //-> [[0, 1], [3, 8], [9, 12]]

function mergeRanges(array) {
   array.sort((a,b)=>{ 
        return a[0] - b[0]
    })
    console.log("array",array)
    
    
    const merged = [array[0].slice()]
    console.log(merged)
    
    
    //for rest of array: 
    array.forEach((el)=>{
      //overlap IF  
      // r1 = [0-5], r2 = [4-6]| [0-6]
      //r1[start] <= r2[start] <= r1[end]
      //replace r1[end] with r2[end]
    })

}
module.exports = mergeRanges;
// function mergeRanges(array) {
//     const range = []
//     array.forEach((el)=>{
//         for(let i=el[0]; i<= el[1]; i++) {
//             range.push(i);
//         }
//     })
//     console.log(range)
// }



/* idea 1
    Take an array of ranges as input and 
    check for overlaps within the ranges

    [start - end]
    a1 = [3,5], a2 = [4-8]

    a1 end = 5 > a2 start = 4 therefore 
    replace a1 end with a2 end

    combine the overlapping ranges
    and return new array
    function fillRanges(array) {
      const range = []
    array.forEach((el)=>{
        for(let i=el[0]; i<= el[1]; i++) {
            range.push(i);
        }
    })
    return range.sort((a,b) => a-b)
}

function mergeRanges(array) {
  let rangeArr = fillRanges(array)
  let start;
  let end;
  
  //while rangeArr has elements
   //start at last
   //initialize first to last
   //decrement first up until the difference between first and the next previous is not 1
   
   //when that's not the difference, push range
   //pop as you go
  
  
  
  
  
  return rangeArr
}

var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
console.log("result", mergeRanges(times))

*/