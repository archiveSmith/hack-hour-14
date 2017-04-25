/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
<<<<<<< HEAD
let counters = {};
let total=0
let n=array.length
let i=0;
while (array[i]){
    total+=array[i]
    if(counters.hasOwnProperty(array[i])){
        counters[array[i]]+=1
    }
    else{counters[array[i]]=1}
    i++
}
let highestFrequency=[0];
for (let num in counters){
  var freq =counters[num]; 
    if(counters[num]>highestFrequency[0])
    {highestFrequency=[counters[num]]
    }
    if (counters[num]== highestFrequency[0]){
      highestFrequency.push(num)}
    }
highestFrequency.shift();
let mean = Math.floor(total/n)
let mode = Math.max.apply(null,highestFrequency)
return mean === mode;
=======

>>>>>>> 3e9cf2ee6443d40c100aa021ce49621a41b9e417
}

module.exports = modemean;
