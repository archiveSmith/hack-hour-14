
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
  let str = '';
  function recurse(num, str){
    if(num <= 0) return str;
    let r; //remainder
    let obj = {'1' : 'I', '4':'IV', '5':'V', '9':'IX', '10':'X','40':'XL', '50':'L','90':'XC', '100':'C','400':'CD', '500':'D','900':'CM', '1000':'M'};

    
    num >= 500 ? r=num-500 : num >400 ? r=num-400 : num >= 100 ? r=num-100 : num >=90 ? r=num-90 : num >= 50 ? r=num-50 : num >= 40 ? r=num-40 : num >= 10 ? r=num-10 : num >= 9 ? r=num-9 : num >= 5 ? r=num-5 : num >= 4 ? r=num-4 : num >= 1 ?r=num-1 : r = 0;

    str += obj[num - r];
    
      return recurse(r, str);
  }
  return recurse(n, '');
}
    

module.exports = romanNumeral;