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

<<<<<<< HEAD
function bestProfit(arr) {
    if(arr.length < 2) return 0;
    high
    function testCombos(l, h){
        if(h>l || lowStack.length === 0 || highStack.length === 0) return arr[h]-arr[l];
        let nextHigh = testCombos(l, highStack.pop());
        let nextLow = testCombos(lowStack.pop(), h);
        return nextHigh > nextLow ? nextHigh : nextLow;
    }
    let h = arr.pop();
    let l = arr.pop();
    return testCombos(l, h);
}

console.log(bestProfit([5,8,12,1,6,10]));

module.exports = bestProfit;
