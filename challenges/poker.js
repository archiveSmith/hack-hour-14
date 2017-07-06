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
function findCount(hand){
    let obj = {four: [], three: [], two: [], straight: []}
    hand = hand.sort((a,b) => a-b);
    if(hand[4] - hand[0] === 5){
        obj.straight.push(hand[4]);
    }
    hand.reduce((obj, curr) => {
        curr in obj ? obj[curr]++ : obj[curr] = 1;
        if(obj[curr] === 4){
            delete obj[three][curr];
            obj[four][curr] = true;
        } 
        else if(obj[curr] === 3){
            delete obj[two][curr];
            obj[three][curr] = true;
        } 
        else if(obj[curr] === 2){
            obj[two][curr] = true;
        }
        return obj;
    },{four: {}, three: {}, two: {}});
}

function poker(hand1, hand2) {
    let count1 = findCount(hand1);
    let count2 = findCount(hand2);
    console.log(count1, count2);
}

poker([1,1,1,1,2],[2,2,2,3,4]);
module.exports = poker;
