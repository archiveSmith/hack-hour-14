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




function poker(hand1, hand2) {
    let faceCards = {
        "Jack": 11,
        "Queen": 12,
        "King": 13,
        "Ace": 14  
    }
    //ways to win
    // 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card.

    //find high card
    function highCardPlayer(hand) {
        return Math.max(...hand)
    }
    let handOneHigh = highCardPlayer(hand1);
    let handTwoHigh = highCardPlayer(hand2);

    //find duplicates in the array
    //if the number is repeated, then add it to the duplicates array
    //
    function findDuplicateCards (hand){
        let cards = {}
        let onlyPairs = []
        let output = []; 
        for(let i = 0; i < hand.length; i = i + 1){
            if(cards[hand[i]] === undefined){
                cards[hand[i]] = 1;
            }else {
                cards[hand[i]]++
            }
        }
        for(let prop in cards){
            if(cards[prop] > 1){
                let pair = []
                for(let j = 0; j < cards[prop]; j = j + 1){
                    pair.push(prop); 
                }
                onlyPairs.push(pair); 
            }
        }
        for(let k = 0; k < onlyPairs.length; k++){
            if(onlyPairs[k].length === 3){
               output.push('3-of-a-kind') 
            }
            if(onlyPairs[k].length === 2){
               output.push('1-pair') 
            }
            if(onlyPairs[k].length === 4){
               output.push('4-of-a-kind') 
            }
        }

        return output; 
    }


    function findStraight (hand){
        let sortedHand = hand.sort((a,b)=>{
            return a - b; 
        })
        for(let i = 0; i < sortedHand.length - 1; i = i + 1){
            if(sortedHand[i] !== sortedHand[i + 1] - 1){
                return false; 
            }   
        }
        return true; 
    }
    
    return findDuplicateCards(hand2);
    
}
console.log(poker([1,2,3,4,5], [4,6,6,6,6])); 
// console.log(poker([3,5,5,5,2], [4,6,7,8,8])); 

module.exports = poker;
