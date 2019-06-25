const assertEqual = (actual, expected) => {
  if (actual.length || expected.length) {
    if (eqArrays(actual, expected) === true) {
      return (`\u{1f600} \u{1f600}  Assertion Passed: ${actual} === ${expected}`);
    } else {
      return (`\u{1f602} \u{1f602}  Assertion Failed: ${actual} !== ${expected}`);
    }
  } else {
    if (actual === expected) {
      return (`\u{1f600} \u{1f600}  Assertion Passed: ${actual} === ${expected}`);
    } else {
      return (`\u{1f602} \u{1f602}  Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};
const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i])
        return false;
    }
    return true;
  }
}
console.log(assertEqual(1, 2));
console.log(assertEqual(2, 2));
console.log(assertEqual([1, 2, 3], 2));
console.log(assertEqual([1, 2, 3], [1, 2, 3]));
console.log(assertEqual([1, 2, 3], [1, 2, '3']));