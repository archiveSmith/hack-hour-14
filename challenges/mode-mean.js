function modemean(array) {
    let mean = Math.floor(array.reduce((t,c) => t+c , 0)/array.length);
    let modeTracker = {}
    let mode = 0; let total = 0;
    
    array.forEach((c) => {
      if(!modeTracker[c]) modeTracker[c] = 1;
      else modeTracker[c]++;
      
      if(modeTracker[c] >= total && c >= mode ){ 
        mode = c;
        total = modeTracker[c];
      }
    });

    return mean === mode;
}


console.log(modemean([1,2,3,4,4,5,6,7]))