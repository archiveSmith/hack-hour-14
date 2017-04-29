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
}

module.exports = modemean;
