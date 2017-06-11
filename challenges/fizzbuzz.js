// Write a function that returns an array containing the numbers 1 to NUM.
Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]



function fizzbuzz(num) {
    //output array to store values
    let output = [];
    //string if value is a fizz buzz
    let curr = '';
    //loop through the range
    for(let i = 1; i <= num; i++){
      //if 3 add fizz
      if(i % 3 === 0) curr += 'fizz';
      //if 5 add buzz
      if(i % 5 === 0) curr += 'buzz';
      if(curr) output.push(curr); 
      //else push value into ouput array
      else output.push(i);
      //reset curr to empty string
      curr = ''; 
    }
    //return output array
    return output; 
    
    
}

// function fizzbuzz(num) { 
//   let output = [];
//   for(let i = 1; i <= num; i++){
//     if(i %15 === 0){
//       output.push("fizzbuzz");
//     }
//     else if(i % 3 === 0){
//       output.push("fizz");
//     }else if(i % 5 === 0){
//       output.push("buzz");
//     }else{
//       output.push(i); 
//     }
//   }
//   return output; 
// }

module.exports = fizzbuzz;

// function fizzbuzz(num) {
//     let finalArr = [];
//     let currString = '';
//
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 === 0) currString += 'fizz';
//         if (i % 5 === 0) currString += 'buzz';
//         if (currString) finalArr.push(currString);
//         else finalArr.push(i);
//         currString = '';
//     }
//
//     return finalArr;
// }
