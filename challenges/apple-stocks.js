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

// function bestProfit(stock_prices_yesterday) {
//   if (!stock_prices_yesterday)  return 0;
  
//   let len = stock_prices_yesterday.length;
//   let price = stock_prices_yesterday;
//   let max = price[0];
//   let min = price[0];
  
//   for (let i = 1; i < len; i++) {
//     if (price[i] < min && price.indexOf(price[i]) < price.indexOf(max)) {
//       console.log(min)
//       min = price[i]
//     }else 
//     if (price[i] > max && price.indexOf(price[i]) > price.indexOf(min)) {
//       max = price[i]
//       console.log(max)
//     }
//   }
  
//   return max - min
  
// }

bestProfit([500,501,490,400,480])


function bestProfit(stock_prices_yesterday) {
  let arr = stock_prices_yesterday
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  
  while(arr.indexOf(max) < arr.indexOf(min)) {
    arr.splice(arr.indexOf(max,1));
    max = Math.max(...arr)
  }
  
  return max - min;
}

// function bestProfit(stock_prices_yesterday) {
//   let profit = 0;
//   let arr = stock_prices_yesterday;
// 	arr.reduce((a, c) => {
// 		let max = Math.max(c - a, 0);
		
// 		max > profit ? profit = max : null;
		
// 		if (max === 0) {
// 			return c;
// 		} else {
// 			return a;
// 		}
// 	});
	
// 	if (profit <= 0) {
// 		return 0;
// 	}
// 	return profit;
// }

// bestProfit([500,501,490,480,520,400])


module.exports = bestProfit;
