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
const numerals = {1:'I', 4:'IV', 5:'V', 9:'IX', 10:'X', 40: 'XL', 50: 'L',90: 'XC', 100:'C', 400:'CD', 500: 'D', 900: 'CM', 1000: 'M'};
const arr = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
const M = 1000; const D = 500; const C = 100; const L = 50; const X = 10; const V = 5; const I = 1;

function romanNumeral(n) {
    if (n === 0)
        return '';
    for (let index = arr.length; index >= 0; index--){
        let currVal = arr[index];
        if (n >= currVal)
            return numerals[currVal] + romanNumeral(n-currVal);
    }
}





    // const numerals = {1:'I', 5:'V', 10:'X', 50: 'L', 100:'C', 500: 'D', 1000: 'M'};
    // const M = 1000; const D = 500; const C = 100; const L = 50; const X = 10; const V = 5; const I = 1;
    // const arr = [];
    // // break down the number

    // // n is greater than 1000
    // if (n > M){
    //     return romanNumeral(n - numerals[M]) + "M";
    // }
    // // n is less than 1000
    // else{
    //     // n is greater 500
    //     if (n > D) {
    //         // n is less than 1000-200=800
    //         if (n < M-2*C){

    //         }
    //         // n is greater than 100-200=800
    //         else{
                
    //         }
    //     }
    // }
// }

module.exports = romanNumeral;
