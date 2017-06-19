function binToDec(binary) {
    return binary.split('').reverse().reduce( (dec,num, i) => dec += Number(num)*Math.pow(2,i), 0 );
}

function decToBin(decimal) {
    return (decimal>1 ? decToBin(Math.floor(decimal/2)) : '') + (decimal%2).toString();
}

module.exports = binToDec;