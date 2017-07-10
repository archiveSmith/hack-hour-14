/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

const l = console.log

function solveKnapsack(items, weightAvailable, sackVal = 0) {

  // let sack = [];
  let minItemWeight = Infinity;
  for (let i=0 ; i<items.length ; i++) if (items[i].weight < minItemWeight) minItemWeight = items[i].weight;
  // l('minItemWeight --> ', minItemWeight)
  
  // base case (weightAvilable < minItemWeight) --> return value
  if (weightAvailable < minItemWeight) return sackVal;

  let slicedItems;
  let remainingItemsArr = [];
  let slicedItemsArr = []
  for (let i=0 ; i<items.length ; i++) {
    slicedItemsArr.push(items[i])
    slicedItems = items.slice(0, i).concat(items.slice(i+1));
    // l('slicedItems --> ', slicedItems)
    remainingItemsArr.push(slicedItems)
  }

  // solveKnapsack (items)
  return slicedItemsArr.reduce((a, v, i)=>{
    return Math.max(a, solveKnapsack(slicedItemsArr, weightAvailable-slicedItemsArr[i].weight , sackVal+slicedItemsArr[i].value))
  }, 0)

};

items = [
  { weight: 1, value: 3 },
  { weight: 2, value: 4 },
  { weight: 3, value: 5 }
];

l(solveKnapsack(items, 3)); // returns 7 (from items[0] and items[1])
l(solveKnapsack(items, 5)); // returns 9 (from items[1] and items[2])

module.exports = solveKnapsack;
