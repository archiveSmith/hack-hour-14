/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

//iterative
// const pascalTriangle = (n) => {
//   //edge case: if n < 1 return an empty array
//   if (n < 1) return [];
//   //initialize triangle as array with first row [1] in it
//   const triangle = [[1]];
//   //loop from 0 to n - 1
//   for (let i = 0; i < n - 1; i += 1) {
//     //initialize curRow as array with first value 1 in it
//     const curRow = [1];
//     //initialize prevRow as last item in triangle
//     const prevRow = triangle[triangle.length - 1];
//     //loop through prevRow, starting at index 1
//     for (let j = 1; j < prevRow.length; j += 1) {
//       //push prevRow[j] + prevRow[j - 1] into curRow
//       curRow.push(prevRow[j] + prevRow[j - 1]);
//     }
//     //push 1 into curRow
//     curRow.push(1);
//     //push curRow into triangle
//     triangle.push(curRow);
//   }
//   //return triangle
// return triangle;
// }

//recursive + reduce()
const pascalTriangle = (n, triangle = [[1]]) => {
  //base case: if n is 1 return triangle
  if (n === 1) return triangle;
  //initialize prevRow as last item in triangle
  const prevRow = triangle[triangle.length - 1];
  //reduce prevRow with [1] as initial value
  //if i is last index in prevRow, return all elements in acc and 1
  //else, return all elements in acc and sum of curr and next item in prevRow
  const curRow = prevRow.reduce((a, c, i) => {
    return i === prevRow.length - 1 ? [...a, 1] : [...a, c + prevRow[i + 1]];
  }, [1]);
  //push curRow into triangle
  triangle.push(curRow);
  //return recursive call
  return pascalTriangle(n - 1, triangle);
}

console.log(pascalTriangle(6));








//recursive:
// function pascalTriangle(numRows, triangle) {
//   if (numRows < 2) return triangle; //base case
//
//   let prevRow = triangle[triangle.length - 1];
//   let curRow = [1];
//
//   for (let i = 1; i < prevRow.length; i += 1) {
//     curRow[i] = prevRow[i] + prevRow[i - 1];
//   }
//
//   curRow.push(1);
//   triangle.push(curRow);
//   return pascalTriangle(numRows - 1, triangle);
// }
//
// console.log(pascalTriangle(5, [[1]]));

// iterative:
// function pascalTriangle(numRows) {
//
//   if (numRows < 1) return []; //edge case
//
//   const triangle = [[1]];
//   let prevRow;
//   let curRow;
//
//   for (let i = 0; i < numRows - 1; i += 1) {
//     prevRow = triangle[i];
//     curRow = [1];
//     //loop through previous row
//     //first time outer loop runs, j === 1 and prevRow.length === 1 so inner loop doesn't run
//     for (let j = 1; j < prevRow.length; j += 1) {
//       curRow[j] = prevRow[j] + prevRow[j - 1];
//     }
//     curRow.push(1);
//     //push curRow that was just created at the end of the triangle
//     triangle.push(curRow);
//   }
//   return triangle;
// }


module.exports = pascalTriangle;
