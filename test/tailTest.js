const tail = require('../tail');
const assertEqual = require('../assertEqual');

describe('#tail', () => {
  it('return [1, 2] for [1, 2, 3]', () => {
    assertEqual(tail([1, 2, 3]), [1, 2]);
  })
})