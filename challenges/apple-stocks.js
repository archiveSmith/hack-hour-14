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

//find min and max
//subtract
//get number of index

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

//find min and max
//subtract
//get number of index


//cannot sell to past! 

function bestProfit(stock_prices_yesterday) {
    let a = stock_prices_yesterday;
    
    //if not array or empty return 0
    if(!Array.isArray(a) || !a) return 0;
    
    //cut anything past midnight yesterday
    if(a.length> 870) a = a.slice(0, 869);


    const max = a.reduce((acc, el)=> {
        if(el > acc) return el;
        return acc;
    }, 0);

    const min = a.reduce((acc, el)=> {
        if(el < acc) return el;
        return acc;
    }, Infinity);

    if(a.indexOf(max)> a.indexOf(min)) {
      return max-min;
    }
}

//------------0, 1, 2, 3, 4, 5,  6, 7, 8  , 9, 10, 11  12

//module.exports = bestProfit;

/*
let b = [-1000,-1000,-1000]
let apple = [100,-50, 0,, 0, 0, 0,  0, 0 , 0,   0, 0, -1000]
bestProfit(b)
//------------0, 1, 2, 3, 4, 5,  6, 7, 8  , 9, 10, 11  12
*/

module.exports = bestProfit;