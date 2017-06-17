'use strict';

const chalk = require('chalk');
const log = console.log;

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
    this.functionStore = {};
}

EventEmitter.prototype.on = function (funcName, func) {
    if (!this.functionStore[funcName]) this.functionStore[funcName] = [func]
    else this.functionStore[funcName].push(func)
};

EventEmitter.prototype.trigger = function (funcName, ...args) {
    this.functionStore[funcName].forEach((e)=> e(...args))
};

var instance = new EventEmitter();
var counter = 0;

log('instance 1 --> ', instance)
instance.on('increment', () => counter++);
instance.on('increment', () => console.log('second event'));
log('instance 2 --> ', instance)

console.log('counter 0 -->', counter)
instance.trigger('increment'); // counter should be 1
console.log('counter 1 -->', counter)
instance.trigger('increment'); // counter should be 2
console.log('counter 2 -->', counter)
instance.on('sayGreeting', (name, weatherStatus) => console.log (`Well hello there, ${name}! Isn't the weather ${weatherStatus}?!`))
instance.trigger('sayGreeting', 'friendo', 'super sunny')

module.exports = EventEmitter;
