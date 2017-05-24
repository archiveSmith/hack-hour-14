/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(string) {
    //see if any combination of the string characters outputs a an even set of characters
    //with every character having 2 occurences in the string and no more than one
    //cgaracter having only one occurence. Order doesn't mastter.

    const input = string.split("")
    .filter(el => /\w/.test(el));
    
 //get pairs
    const count ={};
    
    input.forEach(el=>{
      if(!count.hasOwnProperty(el)) {
        count[el] = 1;
        return;
      }
      else{
        count[el] += 1;
      }
    })

    //after count
    //count number of unpaired characters.
    let singles = 0;
    for(k in count) {
      if(count[k]% 2 !==0) singles +=1;
    }
    if(singles> 1) return false;
    else{
     return true;
    }
}