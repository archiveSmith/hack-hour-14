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
* fH 222,33
* st 23456
* 3oak 333,21
* 2pair 22,44,1
* 1p 22,
* highc
*
* Start by hard-coding the array/hand inputs, but if there is time also
* create a deck of cards function that creates the two arrays for you,
* keeping in mind that there are only 4 of each card in a deck (52 total).
*
* BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
*
* Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
*/

const poker = (hand1, hand2) => {
  const res1 = calculateOne(hand1)
  const res2 = calculateOne(hand2)
  if (res1.type > res2.type) return 'Player 1 wins'
  if (res1.type === res2.type) {
    if (res1.l > res2.l) return 'Player 1 wins'
  }
  return 'Player 2 wins'
}

const calculateOne = (hand) => {
  let result = null
  hand = hand.sort((a, b) => a - b)
  let counter = hand.reduce((acc, cur) => {
    if (acc[cur]) acc[cur] += 1
    else acc[cur] = 1
    return acc
  }, {})
  
  let len = Object.keys(counter).length
  let pairs = 0
  let pairL = 0
  let ifStr = checkStraight(hand)
  if (ifStr) {
    result = {type: 4, l: ifStr} // straight
  }
  for (let key in counter) {
    if (counter[key] >= 4) {
      result = {type: 6, l: key} //4oak
      continue
    }
    if (counter[key] >= 3 && len === 2) {
      result = {type: 5, l: key} // FH
      continue
    }
    if (counter[key] >= 3 && len === 3) {
      result = {type: 3, l: key} // 3oak
      continue
    }
    if (counter[key] >= 2) {
      pairs += 1
      if (key > pairL) pairL = key
      continue
    }
  }
  if (result === null) {
    if (pairs > 0) {
      result = {type: pairs, l: pairL} // 2p or 3p
    } else {
      result = {type: 0, l: Math.max(...hand)} // high card
    }
  }
  return result
}

const checkStraight = (hand) => {
  const everything = '234567891011121314'
  hand = hand.reduce((acc, cur) => acc + cur, '')
  if (everything.indexOf(hand) < 0) return false
  return Math.max(...hand)
}

module.exports = poker;
