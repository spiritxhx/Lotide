const eqArrays = require('./eqArrays');

const assertArraysEqual = (actual, expected) => {
  if (actual.length || expected.length) {
    if (eqArrays(actual, expected) === true) {
      return (`\u{1f600} \u{1f600}  Assertion Passed: ${actual} === ${expected}`);
    } else {
      return (`\u{1f602} \u{1f602}  Assertion Failed: ${actual} !== ${expected}`);
    }
  }

};

module.exports = assertArraysEqual;