// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


function bubbleSort(array) {
    if(!Array.isArray(array)) return null; 
    if(array.length < 2) return array; 
    
    let cont;
    
    do {
        cont = false;
        for (let i=0; i < array.length-1; i=i+1) {
            let temp = array[i];
            if (array[i] >array[i+1]) { 
                array[i] = array[i+1];
                array[i+1] = temp;
                cont = true;
            }
        }
    } while (cont);

    return array
}

module.exports = bubbleSort;


// Worst case : O(n^2)
// Best case: already sorted O(n)

// function bubbleSort(array) {
//   //starting from 0, keep swapping larger to right until you reach end
//   //then reduce tail by 1 because we've found largest number up to here
//   for (var tail = array.length; tail > 0; tail--){
//     for (var i = 0; i < tail; i++){
//       if(array[i] > array[i+1]){
//         var temp = array[i+1];
//         array[i+1] = array[i];
//         array[i] = temp;
//       }
//     }
//   }
//   return array;
// }


