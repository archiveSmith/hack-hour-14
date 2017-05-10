
/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
function highestProduct(array) {
    let value = 1;
    let negativeCount = 0;
    let topThree = [];
    //populate the top 3 largest absolute values
    let returnArr = array.sort((a, b) => { return Math.abs(b) - Math.abs(a) });
    for (let i = 0; i < returnArr.length && i < 3; i++) {
        topThree.push(returnArr[i])
        if (returnArr[i] < 0) { negativeCount++ }
    }
    //if 0 or 2 of the top 3 absolute values are negative, we can use the current top 3 (as populated)
    if (negativeCount === 0 || negativeCount === 2) {
      console.log('in neg')
        topThree.forEach(function (ele) { value *= ele });
    }
    //otherwise we re-sort without absolute values and use the new top 3
    else {
        returnArr = array.sort((a,b)=> {return b-a});
        for (let i = 0; i < returnArr.length && i < 3; i++) {
          value *= returnArr[i];
        }
    }
    return value;
}
module.exports = highestProduct;