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

function pascalTriangle(numRows) {
  //initiate my array with two starters ele
  var array = [[1], [1,1]];
  for (var row = 2; row < numRows; row++){
    array[row] = [1];
    for (var col = 1; col <= row-1; col++){
        array[row][col] = array[row-1][col] + array[row-1][col-1];
        array[row].push(1);
    }
  }
  return array;
}

module.exports = pascalTriangle;
