/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */
function twoSum(arr, n) {
    while (arr.length >= 1) {
        let curr = arr.pop();
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum = curr + arr[i]
            if (sum === n) return true;
        }
    }
    if(arr.length ===1 && arr[0] === n) return true;
    return false;
}

module.exports = twoSum;


/* [2,4,6], 8 -> true 
        [2,4] 6
        i = 0 sum =6+4 = 10
        i=1 sum  = 6+2 = 8
        true

   [1,5,3] 6 --> true
   [1,5]   3
      i=0  sum = 3+5 = 8
      i=1  sum = 3+1 = 4
   [1]    5
            i=0  sum = 1+5 = 6 = true

[1,2,3,5]   12 ---> false
    [1,2,3]  5
                i=0 sum = 5+3 = 8
                i=1 sum = 5+2 = 7
                i=2 sum = 1+5 = 6

    [1,2]  3   i=0 sum = 3+2 = 5
                i=1 sum = 3+1 =4
    
    [1] 2    i=0 sum = 2+1 = 3

    BREAK for loop

    arr len ==1? arr[0]=== n ? true :null

    FALSE

*/