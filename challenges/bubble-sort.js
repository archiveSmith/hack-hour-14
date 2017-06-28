// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let flag = true;
  while(flag){
    flag = false;
    for(let i = 0; i < array.length; i++){
      if(array[i] > array[i + 1]){
        let holder = array[i];
        array[i] = array[i + 1];
        array[i + 1] = holder;
        flag = true;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
