// Write a function that takes a number as an argument and returns its english 
// word representation as a string. Answers should be in upper camel case 
// (a.k.a. Pascal case). Don't worry about spaces.
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

const illion = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];
const ones = {  '1': 'One',
                '2': 'Two',
                '3': 'Three',
                '4': 'Four',
                '5': 'Five',
                '6': 'Six',
                '7': 'Seven',
                '8': 'Eight',
                '9': 'Nine'
            }
const doubles = {
                '10': 'Ten', 
                '11': 'Eleven', 
                '12': 'Twelve', 
                '13': 'Thirteen', 
                '14': 'Fourteen', 
                '15': 'Fifteen', 
                '16': 'Sixteen', 
                '17': 'Seventeen', 
                '18': 'Eighteen', 
                '19': 'Ninteen', 
                }
const tens = {
                '2': 'Twenty',
                '3': 'Thirty',
                '4': 'Fourty',
                '5': 'Fifty',
                '6': 'Sixty',
                '7': 'Seventy',
                '8': 'Eighty',
                '9': 'Ninty', 
            }

function numToWords(num) {
    if(num===0) return 'Zero';
    let str = '';
    if(num<0){
        str += 'Negative';
        num = -1*num;
    }
    for(let i=0; i<illion.length; i++){
        let curr = num%1000;
        let trip = ''
        if(curr >= 100)//3 digits
            trip = ones[(Math.floor(curr/100)).toString()]+'Hundred';
        if(curr >= 10){//tens and ones
            if((curr%100).toString() in doubles)//teens
                trip += doubles[(curr%100).toString()];
            else{
                if(Math.floor((curr%100)/10).toString() in tens)//tens place
                    trip += tens[Math.floor((curr%100)/10).toString()];
                if(Math.floor((curr%10)).toString() in ones)//ones place
                    trip += ones[Math.floor((curr%10)).toString()]
            }
        }
        if(curr > 0 && curr < 10)
            trip += ones[Math.floor((curr%10)).toString()];

        if(curr !== 0) trip += illion[i];

        str = trip + str;
        num = (num-curr)/1000;
        if(num <= 0) break;
    }
    return str;

}
module.exports = numToWords;