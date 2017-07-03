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

//NOT FINISHED
function poker(hand1, hand2) {
  let handOne = [];
  let handTwo = [];
  
  handOne.push(fourOfAKind(hand1), fullHouse(hand1), straight(hand1), threeOfAKind(hand1), twoPair(hand1), onePair(hand1))
  handTwo.push(fourOfAKind(hand2), fullHouse(hand2), straight(hand2), threeOfAKind(hand2), twoPair(hand2), onePair(hand2))
  
  console.log('HANDONE',handOne)
  console.log('HANDTWO', handTwo)
  
  if (!handOne.includes(true) && !handTwo.includes(true)) {
    console.log('hi')
    let h1Sort = hand1.sort();
    let h2Sort = hand2.sort();
    return h1Sort[4] > h2Sort[4] ? 'Player One Wins' : 'Player Two Wins'
  } 
  
  console.log('HFEKJW', handOne.indexOf('true'))
  return handOne.indexOf('true') < handTwo.indexOf('true') ? 'Player One Wins' : 'Player Two Wins'

}

function fourOfAKind(hand) {
  let sorted = hand.sort();
  if (sorted[1] === sorted[2] && sorted[1] === sorted[3]) {
    if (sorted[1] === sorted[0] || sorted[1] === sorted[4]) {
      return true;
    } 
  }
  return false;
}

function fullHouse(hand) {
  let cache = {};
  for (let i = 0; i < hand.length; i++) {
    !cache[hand[i]] ? cache[hand[i]] = 1 : cache[hand[i]]++
  }

  for (x in cache) {
    if (cache[x] === 3) {
      for (y in cache) {
        if (cache[y] === 2) {
          return true;
        }
      }
    }
  }
  return false;
}

function straight(hand) {
  let sorted = hand.sort();
  if (sorted[4] === sorted[3]+1 && sorted[3] === sorted[2]+1 && sorted[2] === sorted[1]+1 && sorted[1] === sorted[0]+1) {
    return true;
  } else {
    return false;
  }
}

function threeOfAKind(hand) {
  let cache = {};
  for (let i = 0; i < hand.length; i++) {
    !cache[hand[i]] ? cache[hand[i]] = 1 : cache[hand[i]]++
  }
  
  for (x in cache) {
    if (cache[x] === 3) {
      return true;
    }
  }
  return false;
}

function twoPair(hand) {
  let cache = {};
  for (let i = 0; i < hand.length; i++) {
    !cache[hand[i]] ? cache[hand[i]] = 1 : cache[hand[i]]++
  }
  
  for (x in cache) {
    if (cache[x] === 2) {
      delete cache[x]
      for (y in cache) {
        if (cache[y] === 2) {
          return true;
        }
      }
    }
  }
  return false;
}

function onePair(hand) {
  for (let i = 0; i < hand.length; i++) {
    let a = hand[i];
    for (let j = i+1; j < hand.length; j++) {
      if (a === hand[j]) {
        return true;
      }
    }
  }
  return false;
}

module.exports = poker;
