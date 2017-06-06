// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let counter = 0;
  let temp = [];
  for (let i = 0; i <= num; i += 1) {
    temp.push(i);
  }
  const str = temp.join('').split('')
  for (let j = 0; j <= str.length; j += 1) {
    if (str[j] === '2') counter += 1;
  }
  return counter;
}

console.log(countTwos(1));  // -> 0
console.log(countTwos(3));  // -> 1
console.log(countTwos(13));  // -> 2
console.log(countTwos(1000));  // -> 300
console.log(countTwos(11420));  // -> 4483

module.exports = countTwos;
