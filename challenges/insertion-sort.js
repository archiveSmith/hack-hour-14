// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] < array[i]) {
      let move = array.splice(i + 1, 1)[0];
      for (let j = 0; j < array.length; j++) {
        if (move < array[j]) {
          array.splice(j, 0, move);
          break;
        }
      }
    }
  }

  return array;
 }

module.exports = insertionSort;