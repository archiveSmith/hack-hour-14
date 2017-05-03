/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
    let arr = []
    let nString = n.toString()

    switch (nString[nString.length - 1]) {
        case '1': arr.unshift('I'); break;
        case '2': arr.unshift('II'); break;
        case '3': arr.unshift('III'); break;
        case '4': arr.unshift('IV'); break;
        case '5': arr.unshift('V'); break;
        case '6': arr.unshift('VI'); break;
        case '7': arr.unshift('VII'); break;
        case '8': arr.unshift('VIII'); break;
        case '9': arr.unshift('IX'); break;
        default: break;
    }

    switch (nString[nString.length - 2]) {
        case '1': arr.unshift('X'); break;
        case '2': arr.unshift('XX'); break;
        case '3': arr.unshift('XXX'); break;
        case '4': arr.unshift('XL'); break;
        case '5': arr.unshift('L'); break;
        case '6': arr.unshift('LX'); break;
        case '7': arr.unshift('LXX'); break;
        case '8': arr.unshift('LXXX'); break;
        case '9': arr.unshift('XC'); break;
        default: break;
    }

    switch (nString[nString.length - 3]) {
        case '1': arr.unshift('C'); break;
        case '2': arr.unshift('CC'); break;
        case '3': arr.unshift('CCC'); break;
        case '4': arr.unshift('CD'); break;
        case '5': arr.unshift('D'); break;
        case '6': arr.unshift('DC'); break;
        case '7': arr.unshift('DCC'); break;
        case '8': arr.unshift('DCCC'); break;
        case '9': arr.unshift('CM'); break;
        default: break;
    }
    switch (nString[nString.length - 4]) {
        case '1': arr.unshift('M'); break;
        case '2': arr.unshift('MM'); break;
        case '3': arr.unshift('MMM'); break;
        case '4': arr.unshift('MMMM'); break;
        default: break;
    }

    return arr.join('')
}

module.exports = romanNumeral;
