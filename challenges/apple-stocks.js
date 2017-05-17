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
<<<<<<< HEAD
    let low = 0;
    let high = 0;
    let lowTime = 0;
    let highTime = 0;
    let profit = 0;
    const arr = [];
    if (stock_prices_yesterday instanceof Array){
        for (let index = 0; index < stock_prices_yesterday.length; index++) {
            const spy = stock_prices_yesterday[index];
            if (index === 0) {
                low = spy;
                lowTime = index;
                continue;
            }
            if (spy < low) {
                low = spy;
                lowTime = index;
            } else if (spy >= high) {
                high = spy;
                highTime = index;
            }
            if (lowTime < highTime)
                arr.push(high-low);
        }
        
        while (arr.length != 0) {
        const item = arr.pop();
        if (profit < item)
            profit = item;
        }
    }
    return profit;
}

=======

}
>>>>>>> d354a6962e9e9e1f1587f35b318ac1bf160e469d

module.exports = bestProfit;
