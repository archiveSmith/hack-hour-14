// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function swap(i1, i2, array) {
    let temp = array[i1];
    array[i1] = array[i2];
    array[i2] = temp;
}

function bubbleSort(array) {
 let swapped = true;
 if(array.length < 2) return array;

 while(swapped) {
     //set swapped to false for prev iteration --> will remain false until swap happens
   swapped = false;
     for(let i=0; i<array.length; i++) {
         if(array[i] > array[i+1]) {
            swap(i, i+1, array);
            swapped = true;
         } 
     }
  }
  return array;
}

// bubbleSort([5,4,8,2,3])

module.exports = bubbleSort;
