const assertArraysEqual = (actual, expected) => {
  if (actual.length || expected.length) {
    if (eqArrays(actual, expected) === true) {
      console.log(`\u{1f600} \u{1f600}  Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`\u{1f602} \u{1f602}  Assertion Failed: ${actual} !== ${expected}`);
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




const takeUntil = (array, callback) => {
  let result = [];
  for (item of array) {

    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
}



///test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood'])