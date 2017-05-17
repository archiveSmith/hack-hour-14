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

function bestProfit(stock_prices_yesterday) {
  let buyPrice, sellPrice;
  let bestProfit = 0;
  for (let i=0 ; i<stock_prices_yesterday.length-1 ; i++){
    buyPrice = stock_prices_yesterday[i];
    // can't have negative stock price
    if (buyPrice < 0) return 0;
    // can't have non-number stock price
    if (typeof(buyPrice) !== 'number') return 0;
        remArr = stock_prices_yesterday.slice(i+1);
        sellPrice = Math.max(...remArr);
        currProfit = sellPrice - buyPrice;
        if (currProfit > bestProfit) bestProfit = currProfit;
    }
	return bestProfit;
}


module.exports = bestProfit;
