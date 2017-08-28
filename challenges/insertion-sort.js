// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

//input: array
//output: array sorted

function insertionSort(array) {
    
    //start at 1
    //compare each element with previous elements
    //if the element is less than the previous element
        //keep going until it is less than an element
        //curr element is then added to the lowest place it can go
    
for(let i = 1; i < array.length; i++){
    let curr = array[i];
    for(let j = i - 1; j >=0  && (array[j] > curr); j--){
        array[j + 1] = array[j]; 
        array[j] = curr;    
    }    
  }
  return array;
  

}
console.log(insertionSort([1,3,0]))

module.exports = insertionSort;



// for(let i = 1; i < array.length; i++){
//     let curr = array[i];
//     for(let j = i - 1; j >=0  && (array[j] > curr); j--){
//         array[j + 1] = array[j]; 
//         array[j] = curr;    
//     }    
//   }
//   return array;