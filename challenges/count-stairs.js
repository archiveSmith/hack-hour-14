/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 2 + 1 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

function countStairs(n) {
    //check how many 1's can be subtracted
    //using only n-1 digits, find the combinations
    //n - 1 (2s * 1)
    //n - 2 (2s * 2)

    //set count to 1
    //check if n - 1 digits with n - 2 1s and one 2 equals n
        //if this works add n - 1 to count
    //n is now n n - 2 - 1 1s and add another 2

    let count = 0;
    let spaces
    for(let i = 0; 0 < n; i++){
        if((n*1)+(2*i) === n){
             
        }
        n = n - 2
    }
  return count
}

console.log(countStairs(5))

module.exports = countStairs;
