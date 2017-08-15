/**
 * Given an array of integers, find the highest product you can
 get from three of the integers.
 */


 //input: array of integers
 //output: highest product you can get from three of them

 //if less than three return null
 //if not array return null
 //if equal to three multiple all three numbers

 //define an output to store the product
 //

function highestProduct(array) {

  // Edge cases.
  if (!Array.isArray(array) || array.length < 3) return 0;

  // Possible factors to be used.
  const low = { one: Infinity, two: Infinity };
  const high = { one: -Infinity, two: -Infinity, three: -Infinity };

  // Iterate through array.
  for (let i = 0; i < array.length; i++) {

    // Collect low values.
    switch (true) {
      case array[i] < low.one:    [low.one, low.two] = [array[i], low.one]; break;
      case array[i] < low.two:    low.two = array[i]; break;
    }

    // Collect high values.
    switch (true) {
      case array[i] > high.one:   [high.one, high.two, high.three] = [array[i], high.one, high.two]; break;
      case array[i] > high.two:   [high.two, high.three] = [array[i], high.two]; break;
      case array[i] > high.three: high.three = array[i]; break;
    }

  }

  // Return maximum product of either 1) all high values or 2) high.one and both low values.
  return Math.max(
    high.one * high.two * high.three,
    high.one * low.one * low.two
  );
}


console.log(highestProduct([1,1,1,1])); 
console.log(highestProduct([1,2,3,4]));
console.log(highestProduct([]));
console.log(highestProduct([0,2,0]));
console.log(highestProduct([-1,1,-5,10,-4]));

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


  // if(!array.length) return false;

  // let allNumbers = array.every((element)=>{
  //   return typeof element === 'number';
  // });
  // if(!allNumbers) return false;
  // let negatives = [];
  // let positives =[];

  // for(let j = 0; j < array.length; j++){
  //   if(array[j] < 0){
  //     negatives.push(Math.abs(array[j]));
  //   }else{
  //     positives.push(array[j]);
  //   }
  // }
  // let maxNegs;

  // if(negatives.length > 1){
  //   negatives.sort((a,b)=>{
  //     return b - a;
  //   });
  // }



  // return negatives;
