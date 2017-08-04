// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

const insertionSort = (arr) => {
  //loop through arr, starting at index 1
  for (let i = 1; i < arr.length; i += 1) {
    //store current item in temp variable
    let needToSort = arr[i];
    //set sortedEnd to i - 1
    let sortedEnd = i - 1;
    while (arr[sortedEnd] > needToSort) {
      //move arr[sortedEnd + 1] one spot ahead
      arr[sortedEnd + 1] = arr[sortedEnd];
      //decrement sortedEnd
      sortedEnd -= 1;
    }
    //set arr[sortedEnd + 1] to needToSort
    arr[sortedEnd + 1] = needToSort;
  }
  //return arr
  return arr;
}

//array destructuring assignment:
// const a = 1;
// const b = 2;
// [a, b] = [b, a]
// console.log(a); // 2
// console.log(b); // 1

// const insertionSort = (arr) => {
//   //loop through arr
//   for (let sorted = 0; sorted < arr.length; sorted += 1) {
//     //loop backwards from sorted + 1 to
//     for (let needToSort = sorted + 1; arr[needToSort] < arr[needToSort - 1]; needToSort -= 1) {
//       //swap arr[needToSort] with arr[needToSort - 1] using array destructuring assignment
//       [arr[needToSort], arr[needToSort - 1]] = [arr[needToSort - 1], arr[needToSort]];
//     }
//   }
//   //return arr
//   return arr;
// }

console.log(insertionSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8])); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]




















// const insertionSort = (arr) => {
//   for (let i = 0; i < arr.length; i += 1) {
//     let temp = arr[i];
//     let j;
//     for (j = i - 1; j >= 0 && arr[j] > temp; j -= 1) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = temp;
//   }
//   return arr;
// }

// const insertionSort = (array) => {
//   for (let i = 0; i < array.length; i += 1) {
//     let temp = array[i];
//     let j = i - 1;
//     while (j >= 0 && array[j] > temp) {
//       array[j + 1] = array[j];
//       j--;
//     }
//     array[j + 1] = temp;
//   }
//   return array;
// }


// const insertionSort = (array) => {
//   for (let sorted = 0; sorted < array.length; sorted += 1) {
//     for (let move = sorted + 1; array[move] < array[move - 1]; move -= 1) {
//       [array[move], array[move - 1]] = [array[move - 1], array[move]];
//     }
//   }
//   return array;
// }

// console.log(insertionSort([3,5,7,8,4,2]));

module.exports = insertionSort;
