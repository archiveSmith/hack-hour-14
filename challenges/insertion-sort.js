// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function insertionSort(array) {
    array.forEach((curr, idx) => {
        for(let i = idx, j = idx-1; array[i]<array[j]; i--, j--){
            swap(array, i, j); 
        }
    })
    return array;
}

console.log(insertionSort([6,5,3,1,8,7,2,4]));

module.exports = insertionSort;