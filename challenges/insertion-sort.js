// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let index = 1; index < array.length; index++) {
    for (let prevIndex = index - 1, curIndex = index; prevIndex >= 0; prevIndex--, curIndex--) {
      if (array[curIndex] < array[prevIndex]) {
        let temp = array[curIndex];
        array[curIndex] = array[prevIndex];
        array[prevIndex] = temp;
      }
      else {
        break;
      }
    }
  }
  return array;
}

module.exports = insertionSort;