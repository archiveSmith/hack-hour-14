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
    // purchase must occur before sale
    // puchase at min / sell at max

    // get extremes
    // go through extremes crete profit arrays
    // return max

    let mins = [stock_prices_yesterday[0]];
    let maxs = [stock_prices_yesterday[0]];
    let extremes = [stock_prices_yesterday[0]];
    let goingUp = true;

    for (let i = 1; i < stock_prices_yesterday.length; i++) {
        const currPrice = stock_prices_yesterday[i];
        const lastPrice = stock_prices_yesterday[i - 1];

        if (currPrice > lastPrice) {
            if (!goingUp) {
                extremes.push(currPrice);
            }
            goingUp = true;
        } else if (currPrice < lastPrice) {
            if (goingUp) {
                extremes.push(currPrice);
            }
            goingUp = false;
        }
    }

    // extremes.push(stock_prices_yesterday[stock_prices_yesterday.length - 1]);

    return (extremes);

}


const stock_prices_up = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const stock_prices_vary = [5, 4, 6, 3, 7, 2, 8, 1, 9];
const stock_prices_down = stock_prices_up.slice().reverse();

console.log(bestProfit(stock_prices_up));
console.log(bestProfit(stock_prices_down));
console.log(bestProfit(stock_prices_vary));
module.exports = bestProfit;
