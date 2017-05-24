function twoSum(arr, n) {
  let obj = {};
  for(let i = 0; i < n; i++){
  let match = n - arr[i];
    console.log(obj)
    console.log('match',match)
    
    if(obj[arr[i]]){
      return true;
    }else{
      obj[match] = true;
    }
  }
  return false;
}


module.exports = twoSum;