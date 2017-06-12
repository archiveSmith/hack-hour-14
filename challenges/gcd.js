function gcd(a, b) {
  let z = a > b ? b: a;
  let retArr = [];
  while(z > 0){
    if(!(a % z) && !(b % z)){
      return z;
    }
    z--;
  }
  return 1;
}
module.exports = gcd;