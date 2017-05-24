// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').

function numToWords(num) {
  if (num === 0) return 'Zero';
  const teens = ['Tens','Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
  if (num === 10) return teens[0];
  if (num === 11) return teens[1];
  if (num === 12) return teens[2];
  if (num === 13) return teens[3];
  if (num === 14) return teens[4];
  if (num === 15) return teens[5];
  if (num === 16) return teens[6];
  if (num === 17) return teens[7];
  if (num === 17) return teens[8];
  if (num === 19) return teens[9];
  const ones = ['One', 'Two', 'Three', 'Four', 'Five','Six', 'Seven', 'Eight', 'Nine', 'Ten']
  const tys = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const big = ['Hundred', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];
  let str = num.toString();
}


 console.log(numToWords(0)) // -> 'Zero'
 console.log(numToWords(43)) // -> 'FortyThree'
 console.log(numToWords(2999)) // -> 'TwoThousandNineHundredNintyNine'
 console.log(numToWords(15)) // -> 'Fifteen'
 console.log(numToWords(2483579411)) // -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 console.log(numToWords(300525151340440)) // -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 console.log(numToWords(92120000000000000)) // -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
