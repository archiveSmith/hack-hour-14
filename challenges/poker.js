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

function Player(hand) {
  let obj = {}
  obj.pairNum = 0
  obj.win ={}
  obj.highest = ""
  obj.highestPair = ""
  obj.cards = hand.reduce((acc, card) => {
    if(acc.hasOwnProperty(card)) {
      acc[card] +=1
      return acc
    }
    else {
      acc[card] = 1
      return acc
    }
  }, {})
  return obj;
}


function checkStraight(player) {
  let straight = '234567891011121314'
  let cards = []
  for (c in player.cards) {
    cards.push(c)
  }
  cards.join("")
  if(straight.indexOf(cards) < 0) {
    return false
  }
  else{
    return Math.max(...cards)
  }
}


function checkDoubles(player) {
  let cards = player.cards

    for(card in cards) {
      
      //4 of a kind
      if(cards[card] == 4) {
        player.win = {type:6, highest: card}      //4 of a kind            
      }
      
      //full house
      else if(cards[card] == 3 && Object.keys(cards).length > 2) {
          player.win = {type:5, highest: card}  //full house
      }
      
      //straight
      else if(checkStraight(player)) {
        player.win = {type:5, highest: checkStraight(player)}
      }
      
      //3 of a kind
      else if(cards[card] == 3 && Object.keys(cards).length == 2) {
        player.win = {type:3, highest: card}                //'3-of-a-kind'
      }
      
      
      //2 OR 1 pair + find largest card.
      else if(cards[card] == 2) {
        
          player.pairNum += 1
          player.highestPair = Math.max(player.highestPair, card)
          
          if(player.pairNum == 2) {
            player.win = {type:2, highest:player.highestPair}
          }
          else {
            player.win = {type:1, highest:player.highestPair}
          }
      }
      
      //HIGHEST CARD 
     else if(cards[card] == 1) {
       player.highest = player.highest || card
       player.win = {type: 0, highest: player.highest}
       player.highcard = card
    }
  }
}


function poker(hand1, hand2) {

  let player1 = new Player(hand1)
  let player2 = new Player(hand2)
  
  checkDoubles(player1)
  checkDoubles(player2)
  
  let winner;
  if(player1.win.type > player2.win.type) {
    winner = 'Player 1 wins'
  }
  else if (player2.win.type > player1.win.type){
    winner = 'Player 2 wins'
  }
  else {
      if(player1.win.highest > player2.win.highest) {
      winner = 'Player 1 wins'
    }
    else if (player2.win.highest > player1.win.highest){
      winner = 'Player 2 wins'
    }
  }
  return winner;
}

module.exports = poker;

// poker([3,5,5,5,2], [4,6,7,8,8]) // "Player 1 wins"