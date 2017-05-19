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
	const digits = (num).toString(10).split("").map(t => parseInt(t)).reverse();
	outputString = '';
	
	numToText0 = {
		0: 'Zero',
		1: 'One',
		2: 'Two',
		3: 'Three',
		4: 'Four',
		5: 'Five',
		6: 'Six',
		7: 'Seven',
		8: 'Eight',
		9: 'Nine',
	}
	
	numToText10Exp = {
		2: 'Hundred',
		3: 'Thousand',
		6: 'Million',
		9: 'Billion',
		12: 'Trillion',
	}
	
	for (let i=0 ; i<digits.length ; i++){
		console.log('i-->', i);
		console.log('digits[i]-->', digits[i]);
		console.log('numToText[digits[i]]-->', numToText[digits[i]]);
		outputString = numToText[digits[i]] + outputString;
	}
	
	return outputString;
}


// const numA = 0;
// const numB = 43;

// console.log(numToWords(numB));


module.exports = numToWords;