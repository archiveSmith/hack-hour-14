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
    const intArr = [1,4,5,9,10,40,50,90,100,400,500,900,1000,Infinity];
    const romArr = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
    let outStr = '';
    if(!Number.isInteger(n) || n <= 0) return 'not convertable';
    while(n>0){
        for(let i=0; i<intArr.length-1; i++){
            if(intArr[i+1] > n){
                outStr +=romArr[i];
                n -= intArr[i];
                break;
            }
        }
    }
    return outStr;
}
// module.exports = romanNumeral;
console.log(romanNumeral(90));
