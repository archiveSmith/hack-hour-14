// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
<<<<<<< HEAD
    let counter = 0;
    let checker = "";
    for (let i = 1; i <= num; i++) {
        checker = i.toString().split("");
        checker.forEach((element) => { if (element === '2') counter++ });
    }
    return counter;
=======

>>>>>>> abdb6b31102ef6e05a6e205a15d6c183fc72577d
}

module.exports = countTwos;