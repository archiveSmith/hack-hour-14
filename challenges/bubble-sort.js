// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


function bubbleSort(array) {
  const slice = array.slice();
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < slice.length; i += 1) {
      const j = i + 1;
      if (slice[i] > slice[j]) {
        const temp = slice[i];
        slice[i] = slice[j];
        slice[j] = temp;
        sorted = false;
      }
    }
  }
  return slice;
}

// console.log(bubbleSort([5,4,1,3]));

module.exports = bubbleSort;
