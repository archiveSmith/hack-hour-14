// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function bubbleSort(array) {
    for(let i=0; i<array.length-1; i++){
        for(let j=0; j<array.length-1-i; j++){
            if(array[j] > array[j+1]) swap(array, j, j+1);
        }
    }
    return array;
}

module.exports = bubbleSort;
