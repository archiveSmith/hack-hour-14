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
  let holderArray = [];
  let starterArray = [1, 1];
  if (numRows >= 1) holderArray.push([1]);
  if (numRows >= 2) holderArray.push(starterArray);

  console.log(holderArray)
  let newArray = [];
  for (let i = 3; i <= numRows; i++) {
    newArray = [];
    for(let j = 0; j<starterArray.length-1;j++){
      newArray.push(starterArray[j]+starterArray[j+1])
    }
    starterArray = [1].concat(newArray).concat([1])
    holderArray.push(starterArray);
  }

  return holderArray
}

module.exports = pascalTriangle;
