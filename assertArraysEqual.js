const eqArrays = require('./eqArrays');

const assertArraysEqual = (actual, expected) => {

  if (eqArrays(actual, expected) === true) {
    console.log (`\u{1f600} \u{1f600}  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log (`\u{1f602} \u{1f602}  Assertion Failed: ${actual} !== ${expected}`);
  }

};

module.exports = assertArraysEqual;