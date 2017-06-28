// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let swapped = false;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      const temp = array[i - 1];

      array[i - 1] = array[i];
      array[i] = temp;

      swapped = true;
    }
  }

  return swapped ? bubbleSort(array) : array;
}

// const arr = [2, 1, 3, 4, 5];
const arr = [5,4,3,2,1];
console.log(bubbleSort(arr));

module.exports = bubbleSort;
