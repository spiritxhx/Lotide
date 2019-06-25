const assertArraysEqual = (actual, expected) => {
  if (actual.length || expected.length) {
    if (eqArrays(actual, expected) === true) {
      console.log(`\u{1f600} \u{1f600}  Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`\u{1f602} \u{1f602}  Assertion Failed: ${actual} !== ${expected}`);
    }
  } else {
    if (actual === expected) {
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

const without = (source, itemToRemove) => {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    // console.log(itemToRemove.includes(source[i]));

    if (!itemToRemove.includes(source[i])) {

      output.push(source[i]);
    }
    // console.log(i);

  }
  console.log(output);

  return output;
}

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"])

