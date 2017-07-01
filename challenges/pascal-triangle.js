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
  const retArr = [];
  for (let index = 0; index < numRows; index++) {
    if (index === 0) retArr.push([1]);
    else if (index === 1) retArr.push([1,1]);
    else {
      //loop through the last array to get the sums
      const tempArr = [1];
      const lastArr = retArr[retArr.length-1];
      let jndex = 0;
      while (jndex < lastArr.length-1){
        tempArr.push(lastArr[jndex] + lastArr[jndex+1]);
        jndex++;
      }
      tempArr.push(1)
      retArr.push(tempArr);
    }
  }
  return retArr;
}

module.exports = pascalTriangle;
