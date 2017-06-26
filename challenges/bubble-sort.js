// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


function bubbleSort(array) {
    if(!Array.isArray(array)) return null; 
    if(array.length < 2) return array; 
    
    let cont;
    
    do {
        cont = false;
        for (let i=0; i < array.length-1; i=i+1) {
            let temp = array[i];
            if (array[i] >array[i+1]) { 
                array[i] = array[i+1];
                array[i+1] = temp;
                cont = true;
            }
        }
    } while (cont);

    return array
}

module.exports = bubbleSort;
	


