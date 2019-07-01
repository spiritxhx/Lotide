const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');
// const eqArrays = require('../eqArrays');

// console.log(assertArraysEqual(([1,2,3],['1',2,3]), false));

describe('#assertEqualArrays', () => {
  it('return false when assertEqualArrays([1,2,3].["1",2,3])', () => {
    assertEqual(assertArraysEqual([1, 2, 3], ['1', 2, 3]),
      `\u{1f602} \u{1f602}  Assertion Failed: 1, 2, 3 !== 1, 2, 3`);
  })
})