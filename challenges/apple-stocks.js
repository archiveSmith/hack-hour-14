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
    let highestPrice = Math.max(...stock_prices_yesterday);
    let lowestPrice = Math.min(...stock_prices_yesterday);
    let highestPos = stock_prices_yesterday.indexOf(highestPrice);
    let lowestPos = stock_prices_yesterday.indexOf(lowestPrice);
    //checking for no profit or invalid input
    if (Array.isArray(stock_prices_yesterday)=== false || highestPos===0 && lowestPos=== stock_prices_yesterday.length-1){return 0}
    if (lowestPos<highestPos){
        let profit = highestPrice-lowestPrice;
        return profit;
    }
    else{
        let firstPart= bestProfit(stock_prices_yesterday.slice(0,highestPos+1))
        let secondPart= bestProfit(stock_prices_yesterday.slice(highestPos+1,stock_prices_yesterday.length))
        if(firstPart >= secondPart){ return firstPart}
        else{return secondPart}
        }
}

module.exports = bestProfit;
