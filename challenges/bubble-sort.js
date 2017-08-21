// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

const bubbleSort = (arr) => {
  //loop through the array backwards
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    //loop again, starting at beginning until position in first loop
    for (let j = 0; j < i; j += 1) {
      //if current item is bigger than item in front, swap the two items
      if (arr[j] > arr[j + 1]) {
        // let temp = arr[j + 1];
        // arr[j + 1] = arr[j];
        // arr[j] = temp;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 1, 4, 2, 8]));











//how to swap values in an array using array destructuring assignment:
let a = 1;
let b = 2;
[a, b] = [b, a]
console.log('a -->', a); // 2
console.log('b -->', b); // 1












// function bubbleSort(array) {
//   let sorted = true;
//   for (let j = array.length; j >= 0; j -= 1) {
//     for (let i = 0; i < j; i += 1) {
//       console.log(array);
//       if (array[i] > array[i + 1]) {
//         let temp = array[i + 1];
//         array[i + 1] = array[i];
//         array[i] = temp;
//         sorted = false;
//       }
//     }
//     if (sorted) return array;
//   }
//   return array;
// }

// console.log(bubbleSort([1,2,3,4,5]));

module.exports = bubbleSort;
