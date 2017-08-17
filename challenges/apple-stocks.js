/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */


// stocks cannot be negative in value
// TAKE INTO ACCOUNT YOU CANNOT SELL TO THE PAST
// function assumes array does not contain any negative numbers
// time complexity is o N (double for loops)
function bestProfit(stock) {
  // input has to be an array.
  if (!Array.isArray(stock)) return 0;
  // set a variable for best
  let best = 0;
  // loop through stock array
  for (let i = 0; i < stock.length; i += 1) {
    // loop through all remaining values after i
    for (let j = i + 1; j < stock.length; j += 1) {
      // compute each value
      const value = stock[j] - stock[i];
      // if value is greater than best set best = value
      if (value > best) { best = value; }
    }
  }
  // if the max is 0 or negative return 0
  return best > 0 ? best : 0;
}
module.exports = bestProfit;

// const test = [3, 2, 1];
// console.log(bestProfit(test));
