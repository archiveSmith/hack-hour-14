// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i+1] < array[i]) {
        let temp = array[i+1];
        array[i+1] = array[i];
        array[i] = temp;
        swapped = true;
      }
    }
  }while(swapped)
}

module.exports = bubbleSort;
