// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input


  var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  var array4 = ['ferret',12,12,45,9,66,77,78,2000];

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];


// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"
//convert each array to an object
//check each key to see if it is present in the other 3 arrays




// function commonElements(array1, array2, array3, array4){

function commonElements(array1, array2, array3, array4){
  
  let output = [];
  array1.forEach( element => {
    let total = array2.includes(element) + array3.includes(element) + array4.includes(element);
    if(total == 3){
      !output.includes(element) ? output.push(element):null;
    }
  })
  return output.length > 0 ? output:"Nothing in Common!";
}


console.log(commonElements(array1, array2, array3, array4))


module.exports = commonElements;
// let arrayToObj = (array) => {
//   return array.reduce((all, item)=>{
//     if(!all[item]){
//       all[item] = true; 
//     }
//     return all; 
//   },{})
// }

// function commonElements(array1, array2, array3, array4){
  
//   let store = {};
//   let output = {};
//   let args = [...arguments]
//   let uniques = args.map(arrayToObj).map((item)=>{return Object.keys(item)}).reduce((all,item)=>{return all.concat(item)}, [])
  
// console.log(uniques);
  
  
// }