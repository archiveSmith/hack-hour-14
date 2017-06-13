/**
 * applies the invoked array to the function's parameter list
 * Example:

 *
 * Another Example:
 *   var jasmine = function(name, age) {
 *     if(!age){
 *       return "We don't know how old " + name + " is!";
 *     }
 *
 *     else{
 *       return name + " is " + age + " years old!";
 *     }
 *   };
 *
 *   var jmoney = applyIt(jasmine, ["Jasmine"]);
 *   jmoney(); //Returns "We don't know how old Jasmine is!"
 *
 *  DO NOT USE THE BUILT IN APPLY METHOD OR THE SPREAD OPERATOR
 */

function applyIt(func, args) {
    let funcStr = (func+'').replace(/\s/g, '');
    funcArgs = funcStr.slice(funcStr.indexOf('(')+1, funcStr.indexOf(')')).split(',');
    funcArgs
    return () => funcArgs;
    return () => func.length;
    return () => func(["Jae", 19, "South Carolina"]);
}

// module.exports = applyIt;
var jae = function(name, age, location) {
  return name + " is " + age + " and he lives in " + location;
};

var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
console.log(jaero()); //Returns "Jae is 19 and he lives in South Carolina"