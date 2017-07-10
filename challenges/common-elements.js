// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4){
  let itemCount = {};
  
  let arrayList = [array1, array2, array2, array4];
  
  arrayList.forEach(function(array) {
    let temp = {};
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] in temp) {
        temp[array[i]] += 1;
      }
      else {
        temp[array[i]] = 1;
      }
    }
    let keys = Object.keys(temp);
    for (let j = 0; j < keys.length; j += 1) {
      if (keys[j] in itemCount) {
        itemCount[keys[j]] += 1;
      }
      else {
        itemCount[keys[j]] = 1;
      }
    }
  });
  
  let items = Object.keys(itemCount);
  let returnArray = [];
  
  for (let i = 0; i < items.length; i += 1) {
    if (itemCount[items[i]] === 4) {
      returnArray.push(items[i]);
    }
  }
  
  return returnArray.length > 0 ? returnArray : "Noting in Common!";
}

module.exports = commonElements;
