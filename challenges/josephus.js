/*
  A josephus survivor game is a little bit like Eeny, Meeny, Miny, Moe. The
  original story behind the josephus survivor game is a bit grim, but the goal of
  the game is quite simple. A group of n people are sitting in a circle, and they
  need to elect one person for some task. We will represent the circle of people
  as an array [1, 2, ..., n]. Given a second parameter, k, we will eliminate every
  kth person in the circle (without resetting to the first person). For example,
  Here's how the game josephus(7,3) would work:
  Initial circle: [1,2,3,4,5,6,7]  // next delete 3
  After round 1 : [1,2,4,5,6,7]    // next delete 6
  After round 2 : [1,2,4,5,7]      // next delete 2 (because we wrap around the circle!)
  After round 3 : [1,4,5,7]        // next delete 7
  After round 4 : [1,4,5]          // next delete 5
  After round 5 : [1,4]            // next delete 1
  After round 6 : [4]              // 4 is the winner!
  Write a function named josephus that takes two parameters, n and k, and returns
  a number that represents the winner of josphus(n, k) (ex: josephus(7,3) === 4).
  *super bonus: write this function without using arrays or objects*
*/

//2%6 === 2

function josephus(n, k) {
  //create the circle with values from 1 to n
  let circle = Array(n).fill(0).map((val, i) => i+1);
  return josFromArr(circle, k);

  /* josFromArr computes the josephus survivor given an array, k, and a current index */
  function josFromArr(circ, k, ind = 0) {
    //base case: if there's only one person in the circle, return that person as the winner
    if (circ.length === 1) return circ[0];

    //-1 compensates for 0 indexing
    //modulo ensures we keep wrapping around the circle
    const delInd = (ind + k - 1) % circ.length;
    //splice that value out of the array
    circ.splice(delInd, 1);
    return josFromArr(circ, k, delInd);
  }
}

/*---------------------------------------------------------------------------*/

/*
  Consider a game of josephus(7,3). After making our first elimination, we are
  essentially playing a game of josephus(6,3), only instead of the circle looking
  like [1,2,3,4,5,6], it looks like [4,5,6,7,1,2]. If we compute josephus(6,3),
  we will get a number in the array [1,2,3,4,5,6]. If we can map this to the corresponding
  number in [4,5,6,7,1,2], we will have our winner! So lets come up with a map:
                         [1,2,3,4,5,6] -> [4,5,6,7,1,2]
it seems like we are adding 3 to each number at first. But if we add 3 to 5, we
get 8, which surely isn't a valid winner in josephus(7,3). So first, let's Consider
the map: i -> (i + 3) % 7. This is pretty close. This map will look like:
                        [1,2,3,4,5,6] -> [4,5,6,0,1,2]
We shifted down to small numbers one space too soon. To compensate for this, we
can push this shift one space to the right by using the map i -> (i + 3 - 1) % 7:
                        [1,2,3,4,5,6] -> [3,4,5,6,0,1].
Now each number in the left array is mapped to a number that is one less than the
result we want! So our final map is: i -> ((i + 3 - 1) % 7) + 1.
Therefore, to compute josephus(7,3), we compute i = josephus(6,3). Then we map i
using the rule we derived above. The algorithm below is a generalization of this
approach.
*/

function josephus(n, k) {
  if (n === 1) return 1;
  return (josephus(n - 1, k) + k - 1) % n + 1;
}

console.log(josephus(7,3));
