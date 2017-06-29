/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */



function countStairs(n) {
    //store permutations result
    const permutations = []
    
    //swap flag
    let swapped = true;

    //divide n into array of 1s to produe input array
    let input = [];
    for(let i=0; i<n; i++) {
         input.push(1)
    }

    //while (swaps - or more than 1 one in array)
    while(swapped) {
        //set swapped to false
        swapped = false;

        //use latest permutations array as input
        //loop through array
            //for each element 
                //keep track of current and next.
                //if both ones
                    //slice out from array
                    //and replace original index with a 2
                    //save permutation
                    //set swapped to true
        //update input array to permutations
    }
}

//sum permutations of 1 and 2 
//subtract 1 or 2 from n until you hit 0.
//do this for all permutations of 1s and 2s


module.exports = countStairs;
