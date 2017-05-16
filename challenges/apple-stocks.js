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
    let priceMax = 0;
    let priceMin = 0;

    let openingPrice = stock_prices_yesterday[0];

    priceMax = stock_prices_yesterday.reduce((max, curr) => {
        return priceMax < openingPrice ? openingPrice : priceMax;
    }, priceMax)

    priceMin = stock_prices_yesterday.reduce((max, curr) => {
        return priceMin > openingPrice ? openingPrice : priceMin;
    }, priceMin)

    let profit = priceMax - priceMin
    if (profit < 0 || typeof profit !== 'number' || profit === undefined) { return 0 }
    else return profit
}

module.exports = bestProfit;
