function highestProduct(array) {
  const sortArray = array.sort((a, b) => b - a);
  if (!sortArray[0] || !sortArray[1] || !sortArray[2]) {
    return 0;
  }
  let retNumber = 1;
  for (let i = 0; i <= 2; i += 1) {
    retNumber *= sortArray[i];
  }
  return retNumber;
}

module.exports = highestProduct;
