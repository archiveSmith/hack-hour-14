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

const map = {
  'M': 1000,
  'CM': 900,
  'D': 500,
  'CD': 400,
  'C': 100,
  'XC': 90,
  'L': 50,
  'XL': 40,
  'X': 10,
  'IX': 9,
  'V': 5,
  'IV': 4,
  'I': 1
}

function romanNumeral(n) {
  if (n < 1) return;
  for (let key in map) {
    if (n > map[key]) {
      console.log(key)
      romanNumeral(n - map[key]);
    }
  }
}

console.log(romanNumeral(1001));

module.exports = romanNumeral;

// const roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
// const decimal = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];


// const map = {
//   'I': 1,
//   'IV': 4,
//   'V': 5,
//   'IX': 9,
//   'X': 10,
//   'XL': 40,
//   'L': 50,
//   'XC': 90,
//   'C': 100,
//   'CD': 400,
//   'D': 500,
//   'CM': 900,
//   'M': 1000
// }

// const map = {
//   1: 'I',
//   4: 'IV',
//   5: 'V',
//   9: 'IX',
//   10: 'X',
//   40: 'XL',
//   50: 'L',
//   90: 'XC',
//   100: 'C',
//   400: 'CD',
//   500: 'D',
//   900: 'CM',
//   1000: 'M'
// }
