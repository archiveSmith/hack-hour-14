// Write a function that takes a number as an argument and returns its english word representation as a string. 
// Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
  let outputArr = [];

  const map = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    20: 'Twenty',
    30: 'Thirty',
    40: 'Forty',
    50: 'Fifty',
    60: 'Sixty',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninety',
  }

  num = num.toString().split('');

  for (i = num.length - 1, j = 1; i >= 0; i-- , j++) {
    switch (j) {
      case 1:
        outputArr.push(map[num[i]]);
        break;
      case 2:
        outputArr.push(map[num[i] * 10]);
        break;
      case 3:
        outputArr.push(map[num[i]] + 'Hundred');
        break;
      case 4:
        outputArr.push(map[num[i]] + 'Thousand');
        break;
    }
  }

  console.log(outputArr);
  return outputArr.reverse().join('');
}

console.log(numToWords(1));
console.log(numToWords(21));
console.log(numToWords(121));
console.log(numToWords(2121));
module.exports = numToWords;