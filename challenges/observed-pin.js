/*
Alright, detective, one of our colleagues successfully observed our target person, Robby the robber.
We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to
this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the
PIN he saw, when Robby entered it.
The keypad has the following layout:
┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually
be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it
could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.
He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they
never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.
* possible in sense of: the observed PIN itself and all variations considering the adjacent digits
Can you help us to find all those variations? It would be nice to have a function, that returns an array
of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs.
But please note that all PINs, the observed one and also the results, must be strings, because of
potentially leading '0's. Don't worry about the order of the array.
Detective, we count on you!
expectations = {
  "8": ["5", "7", "8", "9", "0"],
  "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
  "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"],
}
*/

const adj = {
  1: ['1', '2', '4'],
  2: ['1', '2', '3', '5'],
  3: ['2', '3', '6'],
  4: ['1', '4', '5', '7'],
  5: ['2', '4', '5', '6', '8'],
  6: ['3', '5', '6', '9'],
  7: ['4', '7', '8'],
  8: ['5', '7', '8', '9', '0'],
  9: ['6', '8', '9'],
  0: ['0', '8']
};

const getPINs = (observed) => {
  //if observed.length === 1 return adjacent numbers
  if (observed.length === 1) return adj[observed[0]];
  //get the rest of adjacent numbers with recursive call to getPINs() by slicing first char off observed
  const rest = getPINs(observed.slice(1));
  //return
  const possiblePins = adj[observed[0]].reduce((a,c) => {
    const map = rest.map(pin => pin.concat(c));
    return [...a, ...map];
  }, []);
  return possiblePins;
}

// const getPINs = (observed) => {
//   if (observed.length === 1) return keypad[observed[0]];
//   const rest = getPINs(observed.slice(1));
//   return keypad[observed[0]].reduce((a,c) => [...a, ...rest.map((pin) => c.concat(pin))], []);
// }

// function getPINs(observed) {
//   if (observed.length === 1) return pad[observed];
//   const rest = getPINs(observed.slice(1));
//   return pad[observed[0]].reduce((a,c) => {
//     const result = [...a];
//     rest.forEach((pin) => {
//       result.push(c.concat(pin));
//     });
//     return result;
//   }, []);
// }

// function getPINs(observed) {
//   if (observed.length === 1) return keypad[observed];
//   const rest = getPINs(observed.slice(1));
//   return keypad[observed[0]].reduce((a,c) => [...a, ...rest.map(pin => c.concat(pin))], []);
// }

console.log(getPINs('369').sort());

// const getPINs = (observed) => {
//   const possibilities = [];
//   const getAdjacents = (observed, path) => {
//     if (!observed) return possibilities.push(path);
//     const adjacent = pad[observed[0]];
//     for (var i = 0; i < adjacent.length; i++) {
//       getAdjacents(observed.slice(1), path + adjacent[i]);
//     }
//   }
//   getAdjacents(observed, '');
//   return possibilities;
// }
//
// function getPINs(observed) {
//   let possibilities = [''];
//   while (observed) {
//     const adjacents = pad[observed[0]];
//     const newPossibles = [];
//     for (var i = 0; i < adjacents.length; i++) {
//       for (var j = 0; j < possibilities.length; j++) {
//         newPossibles.push(possibilities[j] + adjacents[i]);
//       }
//     }
//     possibilities = newPossibles;
//     observed = observed.slice(1);
//   }
//   return possibilities;
// }



module.exports = getPINs
