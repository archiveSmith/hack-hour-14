// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let sorted = true;
  for (let j = array.length; j >= 0; j -= 1) {
    for (let i = 0; i < j; i += 1) {
      console.log(array);
      if (array[i] > array[i + 1]) {
        let temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
        sorted = false;
      }
    }
    if (sorted) return array;
  }
  return array;
}

console.log(bubbleSort([5, 1, 4, 2, 8]));
// console.log(bubbleSort([1,2,3,4,5]));

module.exports = bubbleSort;
