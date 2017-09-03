const _ = require('underscore');
const module1 = require('./Module1.js');

console.log('Main.js says \'Hello World!\'');
console.log('LoDash says ', _.range(5));
console.log(module1.function1());

