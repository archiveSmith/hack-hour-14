/**
 *  I have an stock_prices_yesterdayay stock_prices_yesterday where:
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
// stock_prices_yesterday[60] = 500



function bestProfit(stock_prices_yesterday) {
  let sellIdx = 1;
  let buyIdx = 0;
  let currMin = 0;
  let maxProft = 0;

  for(let i = 1; i < stock_prices_yesterday.length; i++) {

      // new current min.
      if(stock_prices_yesterday[i] < stock_prices_yesterday[currMin]) {
        currMin = i;
      }

      // new best profit
      if(stock_prices_yesterday[sellIdx] - stock_prices_yesterday[buyIdx] < stock_prices_yesterday[i] - stock_prices_yesterday[currMin]) {
              sellIdx = i;
            buyIdx = currMin;
      }

  }

  maxProfit  = stock_prices_yesterday[sellIdx] - stock_prices_yesterday[buyIdx];
  return maxProfit;

}

console.log(bestProfit([11, 4, 6, 11, 9, 8, 1]));

// module.exports = bestProfit;
