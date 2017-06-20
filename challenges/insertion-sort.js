// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
      for(let i = 1; i < array.length; i++){
    let curr = array[i];
    for(let j = i - 1; j >=0  && (array[j] > curr); j--){
        
        array[j + 1] = array[j]; 
        array[j] = curr; 
      
    }
     
  }
  
  return array;
}

module.exports = insertionSort;