/*
 * Given an array of numbers, determine if the mode and mean of the array are
 * equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */
 function modemean(array) {


   let mean = array.reduce(function(all,item,index,array){
     all = all + item;
     if(index === array.length -1){
       all = Math.floor(all / array.length);
     }
    return all;
   });

   let modeObj ={}
   for(let i = 0; i < array.length; i++){
     if(modeObj[array[i]]){
       modeObj[array[i]]++;
     }else{
       modeObj[array[i]] = 1;
     }
   }

   let mode = 0;
   let count = 0;
   for(let prop in modeObj){
     if(modeObj[prop] > count){
       mode = Number(prop);
       count = modeObj[prop]
     }
     else if(modeObj[prop] === count && prop > mode){
       mode = Number(prop)
       count = modeObj[prop]
     }
   }


   return mode === mean;
 }

module.exports = modemean;
