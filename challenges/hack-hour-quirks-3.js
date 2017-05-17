// var f = function g() { return 23;};
// typeof g();

// /*
// 1) What will be the output of the above code snippet? *
// [] "number"
// [] "undefined"
// [] "function"
// [x] Error
// */

// console.log((function f(f) {
//     return typeof f()
// })(function() {return 1;}))

// /*
// 2) What will be the output of the above code snippet? *
// [x] "number"
// [] "undefined"
// [] "function"
// [] Error
// */

// var foo = {
//     bar: function() { return this.bax;},
//     baz: 1
// }
// console.log(typeof(f = foo.bar)())

// /*
// 3) What will be the output of the above code snippet? *
// [x] "undefined"
// [] "object"
// [] "number"
// [] "function"
// */

// var f = (function f() {return "1"}, function g(){return 2;})();
// console.log(typeof f);

// /*
// 4) What will be the output of the above code snippet? *
// [] "string"
// [x] "number"
// [] "function"
// [] "undefined"
// */

// console.log((function(foo) {
//     return typeof foo.bar;
// })({foo:{bar:1}}));

// /*
// 5) What will be the output of the above code snippet? *
// [x] "undefined"
// [] "object"
// [] "number"
// [] Error
// */

function f() {return f;}
console.log(new f() instanceof f);

/*
6) What will be the output of the above code snippet? *
[] True
[x] False
*/

