'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */


function EventEmitter() {
    this.registered = {}
}

//register event listener and define function to run ----> can register multiple functions to run
EventEmitter.prototype.on = function(funcName, func) {
  if(this.registered.hasOwnProperty(funcName)) {
   this.registered[funcName].push(func)
   return true; 
  }
    this.registered[funcName] = [func];
};

//run registered function ---- if extra arguments, pass onto the listener
EventEmitter.prototype.trigger = function(funcName, ...args) {
    if(this.registered.hasOwnProperty(funcName)) {
        //execute all registered functions
        for(let i = 0; i < this.registered[funcName].length ; i++) {
            let func = this.registered[funcName][i]
            func(...args)
        }
    } else {
        console.log("no event registered")
    }
};

module.exports = EventEmitter;


//TEST
// var instance = new EventEmitter();
//  var counter = 0;
// instance.on('increment', function() {
//    counter++;
//  }); // counter should be 0
 
 
//  instance.trigger('increment'); // counter should be 1
//  console.log("after trigger call 1:", counter)
//  instance.trigger('increment'); // counter should be 2
//   console.log("after trigger call 2:", counter)
  
//  instance.on('increment', (num) => counter *= num)
//   instance.trigger('increment', 3)  //counter should be 9
//     console.log("after trigger call 3:", counter)