// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function swap(i1, i2, array) {
    let temp = array[i1];
    array[i1] = array[i2];
    array[i2] = temp;
}

function insertionSort(array) {
    //parse array
    for(let i=0; i<array.length; i++) {
        //take each number
        let current = array[i]
            //move to the left until the number before it is smaller
        for(let j=i; j>=0; j--){
            let prev = array[j]
            if(current === prev) {
                continue;
            }
            if(prev < current) {
                console.log("prev:", prev, "current :", current)
                swap(current, prev, array)
                break;
            }
        }
        
    }
    return array;
}

// let a = [6,5,3,4,2,1]
// insertionSort(a)

module.exports = insertionSort;