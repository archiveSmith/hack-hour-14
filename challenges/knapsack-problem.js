/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable, currentWeight = 0, currentSack = []) {
  if(!items.length)return currentSack;
  
  if((items[0].weight + currentWeight) < weightAvailable){
    currentWeight += items[0];
    currentSack.push(items[0]);
    solveKnapsack(items.slice(1,items.length), weightAvailable, currentWeight, currentSack);
  }
  solveKnapsack(items.slice(1,items.length))
}

module.exports = solveKnapsack;
