function pascalTriangle(numRows) {
  let arr = [];
  for(let i = 0; i < numRows; i++){
    let thisArr = [];
    for(let j = 0; j <= i ; j++){
      if(j == 0 || j == i){
        thisArr.push(1);
      }
      else{
        thisArr.push(arr[i-1][j-1] + arr[i-1][j])
      }
    }
    arr.push(thisArr)
  }
  return arr;
}

module.exports = pascalTriangle;
