// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    const sorted = [array[0]];
    console.log('array -->', array)
    console.log('************************************')
    let val;
    for (let i=1 ; i<array.length ; i++){
        console.log('i --> ', i)
        console.log('array[i] --> ', array[i])
        for (let j=sorted.length-1 ; j>=0 ; j--){
            console.log('sorted --> ', sorted)
            console.log('j --> ', j)
            console.log('sorted[j] --> ', sorted[j])
            console.log('*******')
            if (array[i]>sorted[j]) {
                sorted.splice(j+1, 0, array[i]);
                break;
            }
            if (array[i]>sorted[j] && array[i]<sorted[j-1] || j===0) {
                sorted.splice(j, 0, array[i]);
                console.log('inserting, sorted is now --> ', sorted)
                break;
            }
        }
        console.log('************************************')
    }
    return sorted;
}

const arr = [4, 5, 1, 3, 2];
console.log('output --> ', insertionSort(arr))

module.exports = insertionSort;