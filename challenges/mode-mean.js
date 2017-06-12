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
     
     let mean = 0;
     
     let mode;
     let count = 0; 
     let obj = {};
     
     //sort the original array to ind the highest mode easier
     let sorted = array.sort((a,b)=>b-a); 
     
     for(let i = 0; i < sorted.length; i++){
       //mean
       //find the average
       mean += sorted[i]; 
       if(i === sorted.length - 1){
         mean = Math.floor(mean / sorted.length); 
       }
       
       //mode
       //count instances of values
       if(obj[sorted[i]]) obj[sorted[i]]++;
       else obj[sorted[i]] = 1; 
       //find the value with the most instances
       if(obj[sorted[i]] > count){
         mode = sorted[i];
         count = obj[sorted[i]]; 
       }
     }
   
   console.log(mode);
   console.log(mean); 
    
   return mode === mean; 
 }


//  function modemean(array) {


//    let mean = array.reduce(function(all,item,index,array){
//      all = all + item;
//      if(index === array.length -1){
//        all = Math.floor(all / array.length);
//      }
//     return all;
//    });

//    let modeObj ={}
//    for(let i = 0; i < array.length; i++){
//      if(modeObj[array[i]]){
//        modeObj[array[i]]++;
//      }else{
//        modeObj[array[i]] = 1;
//      }
//    }

//    let mode = 0;
//    let count = 0;
//    for(let prop in modeObj){
//      if(modeObj[prop] > count){
//        mode = Number(prop);
//        count = modeObj[prop]
//      }
//      else if(modeObj[prop] === count && prop > mode){
//        mode = Number(prop)
//        count = modeObj[prop]
//      }
//    }


//    return mode === mean;
//  }

module.exports = modemean;
