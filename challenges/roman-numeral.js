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
  
  const table = {
    0:'', 1: 'I', 4:'IV', 5: 'V',
    9:'IX', 10:'X', 40:'XL',
    50:'L', 90:'XC', 100:'C',
    400: 'CD', 500:'D', 900:'CM',1000:'M'
  };
  let roman = '';
  
  for(let i = 0; i < String(n).length; i++){
    let num = String(n).substr(i,100);
    let firstNum = num[0];
    let digits = num.length - 1;
    console.log('num',num);
    console.log('firstnum',firstNum);
    console.log('digits',digits);
    
    if(firstNum != 0){
    roman = roman + table[firstNum + '0'.repeat(digits)];
    }
  }

  
  return roman;
    

}

module.exports = romanNumeral;
