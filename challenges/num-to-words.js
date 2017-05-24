// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
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
    numString = num.toString();
    let output = [];
    let pushstr = "";
    for (var i = numString.length; i >= 0; i -= 1) {
        pushstr += numString.charAt(i);
        if (pushstr.length == 3 || i == 0) { output.push(pushstr.split('').reverse().join('')); pushstr = "" }
    };
    output = output.reverse();
    pushstr = ""
    for (i=0; i<output.length;i++){
        
    }
}

module.exports = numToWords;