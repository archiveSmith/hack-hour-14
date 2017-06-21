// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
for(let i =1;i < array.length; i++){
    let currVal = array[i]
    let j;
        for(let j = i-1; j>=0 && array[j] > currVal; j--){
            array[j+1] = array[j];
            array[j]= currVal;
        }
}
return array
}

console.log(insertionSort([1,4,3,7,6,8]))
module.exports = insertionSort;