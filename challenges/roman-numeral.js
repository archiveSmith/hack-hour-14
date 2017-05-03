/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
    if(n<0) return -1;

    let dictionary = {I :1, IV : 4,  V :5 , IX: 9,  X : 10,  XL : 40, L : 50, XC: 90, C : 100, CD: 400, D: 500,  CM: 900, M : 1000}  
    
    return findBiggestChunk(n)

}

function findBiggestChunk(n, dictionary) {
    //get biggest composition
    let maxNumber  = infinity;
    let maxNumeral = ""

    //loop thru dictionary
    for(d in dictionary) {
        //base case
        if(n-dictionary[d] === 0) return d;     
        
        //whichever value takes the input closest to 0 will be returned as the biggest chunk
        if(n-dictionary[d] > 0 && n-dictonary[d] < maxNumber) {
             maxNumber = dictionary[d];
             maxNumeral = d;  
        } 
                
    }
    //current biggest numeral then add the next biggest numeral
    return maxNumeral + findBiggestChunk(n-maxNumber);
}
       

module.exports = romanNumeral;
