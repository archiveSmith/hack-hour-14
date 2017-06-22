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
 	let newN = n.toString();
 	let one = 'I';
 	let five = 'V';
 	let ten = 'X';
 	let output;

 	if (n <= 0 || isNaN(n)) return false;

 	for (let i = 0; i < newN.length; i++) {
 		if (parseInt(newN[i]) === 1) {
 			output += one;
 		}
 		if (parseInt(newN[i]) === 5) {
 			output += five;
 		}
 		if (parseInt(newN[i]) === 10) {
 			output += ten;
 		}
 	}
 	return output;
 }

 module.exports = romanNumeral;
