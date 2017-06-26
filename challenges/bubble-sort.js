// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


const l = console.log

function bubbleSort(array) {

    let stopPoint = array.length;

    // while stopPoint !== 0
    while (stopPoint) {
        // for loop through the array
        for (let i = 0; i < stopPoint; i++) {
            // compare each value to the next value
            if (array[i] > array[i + 1]) {
                // swap if next < curr
                let temp = array[i + 1];
                array[i + 1] = array[i];
                array[i] = temp;
            }
        }
        // decrease stopPoint by 1
        stopPoint -= 1;
    }
    return array;
}

arr1 = [5, 4, 7, 8, 1, 2, 0];
arr2 = [3, 2, 1];

console.log(bubbleSort(arr2))

module.exports = bubbleSort;
