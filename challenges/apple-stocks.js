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

function bestProfit(stock) {
  if (Array.isArray(stock) === false) return 0; // input has to be an array.
  let sorted = stock.slice();
  sorted.sort((high, low) => { return high - low; });
  // console.log(stock);
  // console.log(sorted);
  if (sorted[0] < 0) return 0; // stocks cannot be negative
  const profit = sorted[sorted.length - 1] - sorted[0];
  return profit;
}
module.exports = bestProfit;

// TAKE INTO ACCOUNT YOU CANNOT SELL TO THE PAST

const test = [7, 2, 7, 4]; // 5
console.log(bestProfit(test));
