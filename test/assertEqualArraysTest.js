const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

console.log(assertArraysEqual(eqArrays([1,2,3],['1',2,3]), false));