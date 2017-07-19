// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

iterative approach:
const countTwos = (n) => {
  //edge case: return error message if n < 1
  if (n < 1) return 'n must be greater than 1';
  //declare counter variable and initialize to 0
  let counter = 0;
  //loop from 1 to n
  for (let i = 1; i <= n; i += 1) {
    //convert i to string and store in variable called str
    const str = i.toString();
    //split str into array and store in a variable called arr
    const arr = str.split('');
    //loop through arr
    for (let j = 0; j < arr.length; j += 1) {
      //if current item === '2', increment counter
      if (arr[j] === '2') counter += 1;
    }
  }
 //return counter
  return counter;
}

//recursive approach:
const countTwos = (n) => {
  //edge case: return error message if n < 1
  if (n < 1) return 'n must be greater than 1';
  //base case: return 0 if n === 1
  else if (n === 1) return 0;
  //convert n to string and then split string into array
  const arr = n.toString().split('');
  //calculate the num of twos in arr using reduce()
  let currNumTwos = arr.reduce((a,c) => c === '2' ? a + 1 : a, 0);
  //add up recursive call to countTwos(n - 1) and currNumTwos
  return countTwos(n - 1) + currNumTwos;
}

console.log(countTwos(1));  //-> 0
console.log(countTwos(3));  //-> 1
console.log(countTwos(13));  //-> 2
console.log(countTwos(1000));  //-> 300
console.log(countTwos(11420));  //-> 4483

module.exports = countTwos;
