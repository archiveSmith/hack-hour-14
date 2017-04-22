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
    let mode = [];
    var modeTrack = {};
    var sum = 0;
    var count = 0;
    var findingMeanAndMode = array.forEach(function(num){
        sum += num;
        count++;
        if (modeTrack[num]){
            modeTrack[num] += 1;
        } else {
            modeTrack[num] = 1;
        }
    });
    
    let highestVal = 1;
    let highestNum;
    for (var key in modeTrack){
        if(modeTrack[key] > highestVal){
          highestVal = modeTrack[key];
          highestNum = key;
        }
    }
    mode.push(highestNum);
    
    for (let i in modeTrack){
      if (modeTrack[i] === highestVal && i !== highestNum){
        mode.push(i);
      }
    }
    
    var largestMode = 0;
    for (var j = 0; j < mode.length; j++){
      if (largestMode < mode[j]){
        largestMode = mode[j];
      }
    }
    var mean = Math.floor(sum / count);
    
    console.log(largestMode);
    console.log(mean);
    
    if (parseInt(mean) === parseInt(largestMode)){
        return true;
    } 
    return false;
}


module.exports = modemean;
