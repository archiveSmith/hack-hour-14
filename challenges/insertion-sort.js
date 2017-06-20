// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
    for (var i = 1; i < array.length; i++) {
        let ele = array[i];
        if(ele< array[i-1]){
          var j=i
	        while( ele<array[j-1]) {
	            array[j] = array[j - 1];
	            j--
	      	}
	      	array[j]=ele;
    		}
    }
    return array;
}
// insertionSort([4,12,16,5,3,8,7])

module.exports = insertionSort;