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
let base = stock_prices_yesterday[0];
let price =  stock_prices_yesterday.reduce((a,b)=>{
    if(a<b)return b
    else return a
},0);

return price===base? 0: price-base;

}

console.log(bestProfit([4,3,1]))
console.log(bestProfit([4,6,2]))

=======

}

>>>>>>> 48a6b11faf664dc65722d79bed83b1aa520750bd
module.exports = bestProfit;
