/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 *  - permPalin('abab') => true
 *  - permPalin('cbaba') => true
 *  - permPalin('cbac') => false
 *  - permPalin('a') => true
 *
 */
function permPalin(str) {
    return str.replace(/\s/,'').split('').reduce( (obj,char) => {
        obj[char] = (char in obj) ? ++obj[char] : 1;
        obj.odd += obj[char]%2===0 ? -1 : 1;
        return obj;
    },{odd:0}).odd <= 1;
}

module.exports = PermPalin;