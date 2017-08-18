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


const pascalTriangle = (n) => {
  const triangle = [[1]];
  for (let i = 0; i < n - 1; i += 1) {
    const row = [1];
    const prev = triangle[triangle.length - 1];
    for (let j = 1; j < prev.length; j += 1) {
      row.push(prev[j] + prev[j - 1]);
    }
    row.push(1);
    triangle.push(row);
  }
  return triangle;
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

//iterative:
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
