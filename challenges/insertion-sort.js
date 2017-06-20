// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  // loop through arr and store values using temp variable
  for (let i = 1; i < array.length; i += 1) {
    let temp = array[i];
    // store the index of the previous value
    let j = i - 1;
    // while the index of the previous value is >= 0 && the previous value is
    // greater than the current temp value
    while ( j >= 0 && array[j] > temp) {
      // insert the previous value in the current index
      array[j+1] = array[j];
      // decrement to move back one index
      j -= 1;
    }
    // set the value of the prevIdx = the saved temp Value
    array[j+1] = temp;
  }
}

module.exports = insertionSort;

// let arr = [3, 5, 3, 6]
// insertionSort(arr);
// console.log(arr);
