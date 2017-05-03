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
  let number = n;
  let output = '';
  while (number > 0) {
    if (number >= 1000) {
        let numberOfTimes = Math.floor(number/1000);
        output = output.concat('M'.repeat(numberOfTimes));
        number -= numberOfTimes * 1000;
    }
    if (number >= 500) {
        let numberOfTimes = Math.floor(number/500);
        output = output.concat('D'.repeat(numberOfTimes));
        number -= numberOfTimes * 500;
    }
    if (number >= 100) {
        let numberOfTimes = Math.floor(number/100);
        output = output.concat('C'.repeat(numberOfTimes));
        number -= numberOfTimes * 100;
    }
    if (number >= 50) {
        let numberOfTimes = Math.floor(number/50);
        output = output.concat('L'.repeat(numberOfTimes));
        number -= numberOfTimes * 50;
    }
    if (number >= 10) {
        let numberOfTimes = Math.floor(number/10);
        output = output.concat('X'.repeat(numberOfTimes));
        number -= numberOfTimes * 10;
    }
    if (number >= 5) {
        let numberOfTimes = Math.floor(number/5);
        output = output.concat('V'.repeat(numberOfTimes));
        number -= numberOfTimes * 5;
    }
    if (number >= 1) {
        let numberOfTimes = Math.floor(number/1);
        output = output.concat('I'.repeat(numberOfTimes));
        number -= numberOfTimes * 1;
    }
  }

  if (output.indexOf('LXXXX') !== -1) {
      output = output.replace('LXXXX', 'XC');
  }

  if (output.indexOf('DCCCC') !== -1) {
      output = output.replace('DCCCC', 'CM');
  }

  if (output.indexOf('CCCC') !== -1) {
      output = output.replace('CCCC', 'CD');
  }

  if (output.indexOf('XXXX') !== -1) {
      output = output.replace('XXXX', 'XL');
  }

  if (output.indexOf('VIIII') !== -1) {
      output = output.replace('VIIII', 'IX');
  }

  if (output.indexOf('IIII') !== -1) {
      output = output.replace('IIII', 'IV');
  }

  return output;
}

module.exports = romanNumeral;
