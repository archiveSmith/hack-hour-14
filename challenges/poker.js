/*Build a function that takes in two arrays of five elements, with each
* array representing a player's hand and each element
* representing a card from a standard deck of cards:
* 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
*
* The function should return either the string "Player 1 wins", "Player 2 wins", or "Draw"
*  based on the two player's hands:
*
* 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card.
* (keeping in mind how cards out-rank eachother and possible draws)
*
* Start by hard-coding the array/hand inputs, but if there is time also
* create a deck of cards function that creates the two arrays for you,
* keeping in mind that there are only 4 of each card in a deck (52 total).
*
* BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
*
* Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
*/

/*
hand:
    high card       = 1
    1-pair          = 2
    2-pair          = 3
    3-of-a-kind     = 4
    straight        = 5
    full house      = 6
    4-of-a-kind     = 7

rank:
    2     = 2
    ...
    10    = 10
    Jack  = 11
    Queen = 12
    King  = 13
    Ace   = 14

ex:
    [hand, rank]
    highestHand1: [3, 11] = pair of jacks
    highestHand2: [6, 7]  = full house, 7s high

*/

const l = console.log;

function poker(hand1, hand2) {

    let highestHand1 = { hand: null, rank: null };
    let highestHand2 = { hand: null, rank: null };

    // l('makeHandObject(hand1) --> ', makeHandObject(hand1))
    // l('makeHandObject(hand2) --> ', makeHandObject(hand2))
    handObj1 = makeHandObject(hand1);
    handObj2 = makeHandObject(hand2);

    // 4 of a kind
    if (checkQtyOfAKind(handObj1, 4)) {
        highestHand1.hand = 7;
        highestHand1.rank = checkQtyOfAKind(handObj1, 4);
    }
    if (checkQtyOfAKind(handObj2, 4)) {
        highestHand1.hand = 7;
        highestHand1.rank = checkQtyOfAKind(handObj2, 4);
    }
    if (checkWinner(highestHand1, highestHand2)) return checkWinner(highestHand1, highestHand2);

    // full house


}

function checkWinner(highestHand1, highestHand2) {
    if (highestHand1.hand > highestHand2.hand) return "Player 1 wins"
    if (highestHand1.hand < highestHand2.hand) return "Player 2 wins"
    if (highestHand1.hand === highestHand2.hand) {
        if (highestHand1.rank > highestHand2.rank) return "Player 1 wins"
        if (highestHand1.rank < highestHand2.rank) return "Player 2 wins"
        if (highestHand1.rank === highestHand2.rank) return "Draw"
    }
    return null;
}

function makeHandObject(hand) {
    const handObj = {};
    for (let i = 0; i < hand.length; i++) {
        let num = hand[i]
        handObj[num] = handObj[num] ? handObj[num] + 1 : 1;
    }
    return handObj;
}

function checkQtyOfAKind(handObj, qty) {
    let rank = null;
    for (num in handObj) {
        if (handObj[num] >= qty && num > rank) rank = num;
    }
    return rank;
}

function checkStraight(hand){
    const sortedHand = hand.sort()
    l('sortedHand --> ', sortedHand)
    const longestRun = [sortedHand[0]];
    for (let i=1 ; i<sortedHand.length ; i++){
        if (sortedHand[i]-sortedHand[i-1]) longestRun.push(sortedHand[i]);
        else longestRun = [sortedHand[i]];
    }
    return longestRun.length === 5 ? longestRun[longestRun.length-1] : null;
}

hand1 = [3, 5, 5, 5, 5];
hand2 = [4, 6, 7, 8, 2];

checkStraight(hand2)

l(poker(hand1, hand2)) // --> "Player 1 wins"

module.exports = poker;
