/**
 * applies the invoked array to the function's parameter list
 * Example:
 *   var jae = function(name, age, location) {
 *     return name + " is " + age + " and he lives in " + location;
 *   };
 *
 *   var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
 *   jaero(); //Returns "Jae is 19 and he lives in South Carolina"
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


const jae = (name, age, location) => {
  return `${name} is ${age} and he lives in ${location}`;
};

const jasmine = (name, age) => {
 if (!age) return "We don't know how old " + name + " is!";
 else return name + " is " + age + " years old!";
};

// const applyIt = (func, args) => {
//   //initialize variable str = 'func('
//   let str = 'func(';
//   //for each arg in args array, concatenate arg to str
//   //make sure to wrap arg in quotes (using either string concatenation or template strings)
//   //if current index isn't last index in args array, concatenate ',' to str
//   args.forEach((arg, i) => {
//     str += "'" + arg + "'";
//     if (i !== args.length - 1) str += ',';
//   });
//   //concatenate closing parens ')' to str
//   str += ')'
//   //return anonymous function that passes str into eval() method
//   return () => eval(str);
// }

//one-liner:
//same approach as above
//but use join() instead of forEach() to join args array into a string, separating each item by ","
const applyIt = (func, args) => () => eval(`func("${args.join('","')}")`);

//slightly more readable alternative using string concatenation
// const applyIt = (func, args) => {
//   return () => eval('func(' + '"' + args.join('","') + '"' + ')');
// }

const jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
const jmoney = applyIt(jasmine, ["Jasmine"]);

console.log(jaero()); //--> "Jae is 19 and he lives in South Carolina"
console.log(jmoney()); //--> "We don't know how old Jasmine is!"

module.exports = applyIt;
