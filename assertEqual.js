const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return(`\u{1f600} \u{1f600}  Assertion Passed: ${actual} === ${expected}`);
  } else {
    return(`\u{1f602} \u{1f602}  Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;