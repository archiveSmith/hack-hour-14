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

 // time and space complexity of memoized countStairs is O(n) for first run.
 // time and space complexity vary on succeeding runs depending if n has been memoized or not


 // use fibonacci
 // memoize for speed
function memStairs() {
  const memo = {};
  return function f(n) {
    let value;
    if (n in memo) value = memo[n];
    else {
      if (n === 0) return 1;
      if (n < 0) return 0;
      value = f(n - 1) + (f(n - 2));
      memo[n] = value;
    }
    return value;
  };
}

const countStairs = memStairs();
// console.log(countStairs(5));
// console.log(countStairs(100));

module.exports = countStairs;

// Below doesn't work WHY?

// function memoize(func) {
//   const memo = {};
//   return (...params) => {
//     const args = params.map(el => JSON.stringify(el));
//     if (args in memo) return memo[args];
//     memo[args] = func(...params);
//     return memo[args];
//   };
// }

// function countStairs(n, memo) {
//   memo = memo || {};
//   if (memo[n]) return memo[n];
//   if (n === 0) return 1;
//   if (n < 0) return 0;
//   return countStairs(n - 1) + countStairs(n - 2);
// }
