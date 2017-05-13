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

//basecase = k

function romanNumeral(n,string = '') {
    let numerals = {1: "I",4:"IV",5:"V",9:"IX",10:"X",40:"XL",50:"L",90:"XC",100:"C",400:"CD",500:"D",900:"CM",1000:"M"}
    let numbers = Object.keys(numerals).reverse()

    if(n === 1) {
        string += "I"
        return string;
    }

    for(let num in numbers){
        if(n - numbers[num]>=0){
            string += numerals[numbers[num]];
            string = romanNumeral(n-numbers[num],string);
            break;
        }
    }

    return string;
}

console.log(romanNumeral(899))
console.log(romanNumeral(901))


module.exports = romanNumeral;
