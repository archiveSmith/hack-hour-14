// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let block = array.length - 1;
  
  while (block) {
    for (let i = 0; i < block; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
    block--;
  }

  return array;
}

module.exports = bubbleSort;
