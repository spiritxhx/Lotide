const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`\u{1f600} \u{1f600}  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1f602} \u{1f602}  Assertion Failed: ${actual} !== ${expected}`);
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


const eqObjects = (object1, object2) => {
  for (key in object1) {
    if (!object2[key]) {
      return false;
    }
    if (!eqArrays(object1[key], object2[key])) {
      return false;
    }
  }
  for (key in object2) {
    if (!object1[key]) {
      return false;
    }
  }
  return true;
}

const assertObjectsEqual = (actual, expected) => {
  if (eqObjects(actual, expected)) {
    return(`\u{1f600} \u{1f600}  Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    return(`\u{1f602} \u{1f602}  Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
}

assertObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 2, c: 3});
assertObjectsEqual({ a: 1, b: 2 }, { a: 1, b: '2'});
assertObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 2})