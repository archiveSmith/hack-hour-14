/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/




function solveKnapsack(items, weightLeft) {
  //base case: if there are no items or no weight
  if (items.length === 0 || weightLeft <= 0) return 0

  //if firts item is too heavey to fit, disregard it and consider other itmes
  if (items[0].weight > weightLeft) {
    return solveKnapsack(items.slice(1), weightLeft)
  }

  //if first item does fit
  const itemsLeft = items.slice(1);
  const includeItem = items[0].value + solveKnapsack(itemsLeft, weightLeft - items[0].weight)
  const leaveItem = solveKnapsack(itemsLeft, weightLeft)
  //return the higher value of leaving vs including the item
  return includeItem > leaveItem ? includeItem : leaveItem
}


module.exports = solveKnapsack;
