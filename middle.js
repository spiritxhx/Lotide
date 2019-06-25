const assertEqual = (actual, expected) => {
  if (actual.length || expected.length) {
    if (eqArrays(actual, expected) === true) {
      // console.log(actual);
      
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
    // console.log(array1.length);
    // console.log(array2.length);
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i])
        return false;
    }
    return true;
  }
};

const middle = array => {
  let ans = [];
  // console.log(array.length);

  if (array.length < 3) {
    return ans;
  } else {
    if (array.length % 2 === 0) {
      ans = [array[array.length / 2 - 1], array[array.length / 2]];
    } else {
      ans = [array[(array.length - 1) / 2]];
    }
    // console.log(ans);
    return ans;
  }
}
console.log(assertEqual(middle([1, 2, 3, 4]), [2, 3]));
