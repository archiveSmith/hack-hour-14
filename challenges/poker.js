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

const checkForStraight = (array) => {
  array.sort();
  let counter = 0;
  for (let i = 0; i < array.length; i += 1) {
    let next = array[i + 1];
    if (array[i] === next - 1) counter += 1;
  }
  return counter === array.length - 1;
}

const checkHighCard = (hand1, hand2) => {
  if (!hand1.length && !hand2.length) return 'Draw';
  else if (Math.max(...hand1) > Math.max(...hand2)) return 'Player 1 wins';
  else if (Math.max(...hand1) < Math.max(...hand2)) return 'Player 2 wins';
  else if (Math.max(...hand1) === Math.max(...hand2)) {
    hand1.splice(hand1.indexOf(Math.max(...hand1)), 1);
    hand2.splice(hand2.indexOf(Math.max(...hand2)), 1);
    return checkHighCard(hand1, hand2);
  }
}

const mapHand = (array) => {
  const map = {};
  for (let i = 0; i < array.length; i += 1) {
    if (map[array[i]]) map[array[i]] += 1;
    else map[array[i]] = 1;
  }
  return map;
}



function poker(hand1, hand2) {
  console.log(hand1);
  console.log(hand2);
  const map1 = mapHand(hand1);
  const map2 = mapHand(hand2);

  if (Object.keys(map1).length < Object.keys(map2).length) return 'Player 1 wins';
  else if (Object.keys(map1).length === Object.keys(map2).length) {

    let fourOfAKind1;
    let fourOfAKind2;
    let threeOfAKind1;
    let threeOfAKind2;
    let twoOfAKind1 = { counter: 0, pairs: [], map: null };
    let twoOfAKind2 = { counter: 0, pairs: [], map: null };

    const checkPair = (pair1, pair2) => {
      if (pair1 > pair2) return 'Player 1 wins';
      else if (pair1 < pair2) return 'Player 2 wins';
      else if (pair1 === pair2) {
        const other1 = [];
        const other2 = [];
        for (let key in twoOfAKind1.map) {
          if (twoOfAKind1.map[key] === 1) other1.push(+key);
        }
        for (let key in twoOfAKind2.map) {
          if (twoOfAKind2.map[key] === 1) other2.push(+key);
        }
        return checkHighCard(other1, other2);
      }
    }

    for (let key in map1) {
      if (map1[key] === 4) fourOfAKind1 = +key;
      else if (map1[key] === 3) threeOfAKind1 = +key;
      else if (map1[key] === 2) {
        twoOfAKind1.counter += 1;
        twoOfAKind1.pairs.push(+key);
        twoOfAKind1.map = map1;
      }
    }

    for (let key in map2) {
      if (map2[key] === 4) fourOfAKind2 = +key;
      else if (map2[key] === 3) threeOfAKind2 = +key;
      else if (map2[key] === 2) {
        twoOfAKind2.counter += 1;
        twoOfAKind2.pairs.push(+key);
        twoOfAKind2.map = map2;
      }
    }

    //Check for four of a kind:
    if (fourOfAKind1 && !fourOfAKind2) return 'Player 1 wins';
    else if (!fourOfAKind1 && fourOfAKind2) return 'Player 2 wins';
    else if (fourOfAKind1 && fourOfAKind2) {
      if (fourOfAKind1 > fourOfAKind2) return 'Player 1 wins';
      else return 'Player 2 wins';
    }

    //Check for three of a kind:
    if (threeOfAKind1 && !threeOfAKind2) return 'Player 1 wins';
    else if (!threeOfAKind1 && threeOfAKind2) return 'Player 2 wins';
    else if (threeOfAKind1 && threeOfAKind2) {
      //Check for full house:
      if (twoOfAKind1 && !twoOfAKind2) return 'Player 1 wins';
      else if (!twoOfAKind1 && twoOfAKind2) return 'Player 2 wins';
      else if (twoOfAKind1 && twoOfAKind2) {
        if (threeOfAKind1 > threeOfAKind2) return 'Player 1 wins';
        else if (threeOfAKind1 < threeOfAKind2) return 'Player 2 wins';
      }
    }

    //Check for straights
    if (checkForStraight(hand1) && !checkForStraight(hand2)) return 'Player 1 wins';
    else if (!checkForStraight(hand1) && checkForStraight(hand2)) return 'Player 2 wins';
    else if (checkForStraight(hand1) && checkForStraight(hand2)) {
      if (hand1[0] > hand2[0]) return 'Player 1 wins';
      else if (hand1[0] === hand2[0]) return 'Draw';
      else return 'Player 2 wins';
    }
    //Check for pairs:
    if (twoOfAKind1.counter && !twoOfAKind2.counter) return 'Player 1 wins';
    else if (!twoOfAKind1.counter && twoOfAKind2.counter) return 'Player 2 wins';
    else if (twoOfAKind1.counter && twoOfAKind2.counter) {
      if (twoOfAKind1.counter > twoOfAKind2.counter) return 'Player 1 wins';
      else if (twoOfAKind1.counter < twoOfAKind2.counter) return 'Player 2 wins';
      //Check for 1 pair:
      else if (twoOfAKind1.counter === twoOfAKind2.counter && twoOfAKind1.counter === 1) {
        return checkPair(twoOfAKind1.pairs[0], twoOfAKind2.pairs[0]);
      }
      //Check for 2 pair:
      else if (twoOfAKind1.counter === twoOfAKind2.counter && twoOfAKind1.counter === 2) {
        twoOfAKind1.pairs.sort();
        twoOfAKind2.pairs.sort();
        if (twoOfAKind1.pairs[1] > twoOfAKind2.pairs[1]) return 'Player 1 wins';
        else if (twoOfAKind1.pairs[1] < twoOfAKind2.pairs[1]) return 'Player 2 wins';
        else if (twoOfAKind1.pairs[1] === twoOfAKind2.pairs[1]) {
          return checkPair(twoOfAKind1.pairs[0], twoOfAKind2.pairs[0]);
        }
      }
    }

    //Check for high card:
    return checkHighCard(hand1, hand2);

  } //end else if statement
  else return 'Player 2 wins';
}

const hand1 = [7,1,2,4,5];
const hand2 = [1,2,3,5,4];

console.log(poker(hand1, hand2));

module.exports = poker;
