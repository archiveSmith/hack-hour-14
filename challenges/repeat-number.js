/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

/*
~$~$~$~NATURE'S_SECRET~$~$~$~
 the consecutive sum formula
    Sum: 1 + 2 + ... + 6
    --------------------
   |  |  |  |  |  |  |//|
   |  |  |  |  |  |//|//|
   |  |  |  |  |//|//|//|
   |  |  |  |//|//|//|//|
   |  |  |//|//|//|//|//|
   |  |//|//|//|//|//|//|
   Area of box: 7 * 6 = 42
   Area of shaded region: half the area of the box = 42 / 2 = 21
   Generalization: 1 + 2 + ... + n = (n + 1) * n / 2
 */
function repeatNumbers(array) {
  // store array length
  const n = array.length;
  // Use triangle sum formula to calculate expected sum
  const expected = n * (n - 1) / 2;
  // Use reduce to calculate actual sum
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  // return the difference between actual sum and expected sum
  return sum - expected;
}

module.exports = repeatNumbers;
