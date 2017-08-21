/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
  console.log('break');
  //base case:
  if (!items.length || weightAvailable < 1) return 0;

  const itemsLeft = items.slice(1);
  //if item doesn't fit, disregard it and recurse, passing in array with remaining items
  if (items[0].weight > weightAvailable) {
    return solveKnapsack(itemsLeft, weightAvailable);
  }
  console.log('itemsLeft -->', itemsLeft);
  //if item does fit, calculate values for including item and value for skipping item
  const includeItem = items[0].value + solveKnapsack(itemsLeft, weightAvailable - items[0].weight);
  const skipItem = solveKnapsack(itemsLeft, weightAvailable);
  console.log('includeItem -->', includeItem);
  console.log('skipItem -->', skipItem)
  //return higher value of including or skipping item
  return includeItem > skipItem ? includeItem : skipItem;
};

const items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
console.log(solveKnapsack(items, 3)); // returns 7 (from items[0] and items[1])
// console.log(solveKnapsack(items, 5)); // returns 9 (from items[1] and items[2])

module.exports = solveKnapsack;
