/**
 * Given an array of integers, find the highest product you can
 get from three of the integers.
 */
function highestProduct(array) {

  if(!array.length) return false;

  let allNumbers = array.every((element)=>{
    return typeof element === 'number';
  });
  if(!allNumbers) return false;
  let negatives = [];
  let positives =[];

  for(let j = 0; j < array.length; j++){
    if(array[j] < 0){
      negatives.push(Math.abs(array[j]));
    }else{
      positives.push(array[j]);
    }
  }
  let maxNegs;

  if(negatives.length > 1){
    negatives.sort((a,b)=>{
      return b - a;
    });
  }



  return negatives;



//   return sortedArr.reduce((all, item)=>{
//     return all * item;
//   });


}


// console.log(highestProduct([1,1,1,1]));
// console.log(highestProduct([1,2,3,4]));
// console.log(highestProduct([]));
// console.log(highestProduct([0,2,0]));
// console.log(highestProduct([-1,1,-5,10,-4]));

//second attempt

// let arr = [1,9,3,5,2];

// function highestProduct(array) {
//   if(array.length === 0) return array.length; 

//   return array.sort(function(a,b){
//     return b - a; 
//   }).slice(0,3).reduce(function(all,item){
//     return all * item; 
//   }); 
// }


// array = array.sort((low, high)=>(low-high));

// if(array[array.length - 1] < 0){
//   return array.splice(-3).reduce((acc,curr)=> acc * curr);

//   const highestNum = array[array.length - a];

//   let lowSum = array[0] * array[1];

//   let highSum = array[array.length -3] * array[array.length-2];
//   return (lowSum > highSum) ? lowSum * highestNum : highSum * highestNum
// }


module.exports = highestProduct;
