// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    let newLength = array.length-1;
    let holder;
    for (i = 0; i <= newLength && newLength>0; i++) {
        if(array[i]>array[i+1]) {
            holder = array[i];
            array[i]= array[i+1];
            array[i+1]=holder;
        }
        if(i===newLength){
            i=-1;
            newLength--
        }
    }
    return array;
}

module.exports = bubbleSort;
