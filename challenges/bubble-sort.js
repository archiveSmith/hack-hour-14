// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    let repeat = true;
    while(repeat){
        repeat = false;
        for (let i = 0; i< array.length; i++){
            if(array[i]>array[i+1]){
                let holder = array[i];
                array[i] = array[i+1];
                array[i+1] = holder;
                repeat = true
            }
        }
    }
    return array
}

console.log(bubbleSort([4,7,12,8,2]))

module.exports = bubbleSort;
