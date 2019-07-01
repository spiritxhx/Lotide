const eqObjects = require('./eqObjects');

const assertObjectsEqual = (actual, expected) => {
  if (eqObjects(actual, expected)) {
    return(`\u{1f600} \u{1f600}  Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    return(`\u{1f602} \u{1f602}  Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
}

module.exports = assertObjectsEqual;