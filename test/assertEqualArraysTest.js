const assertArraysEqual = require('../assertArraysEqual');
// const eqArrays = require('../eqArrays');

// console.log(assertArraysEqual(([1,2,3],['1',2,3]), false));

describe('#assertEqualArrays', () => {
  it('return false when assertEqualArrays([1,2,3].["1",2,3])', () => {
    assertArraysEqual([1, 2, 3], ['1', 2, 3]);
  })
})