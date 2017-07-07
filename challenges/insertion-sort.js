// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  
  for(let i = 0; i < array.length; i++){
    console.log(`i is ${array[i]}`)
    for(let j = 0; j < array.length; j++){
      // console.log(`j is ${array[j]}`)
      if(i != j){
        if(i < j) break;
        if(array[i] < array[j]){
          console.log(`${array[i]} is less than ${array[j]}`)
          let n = array.splice(i,1)[0];
          console.log(`removed ${n} from array ${array}`)
          array.splice(j , 0, n);
          console.log(`just inserted ${n} at spot ${j-1}, array is now ${array}`)
          break;
          
        }
      }
    }
  }
  return array;
}


module.exports = insertionSort;