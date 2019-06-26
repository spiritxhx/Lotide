const assertArraysEqual = (actual, expected) => {
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

const flatten = array => {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        output.push(array[i][j])
      }
    } else {
      output.push(array[i]);
      // flatten(array[i])
    }
  }
  console.log(output);
  return output;
}

const flattenRecurse = array =>{
  let output=[];
  array.forEach(ele=>{
    if (Array.isArray(ele)){
      output.push(...flatten(ele));
    } else {
      output.push(ele);
    }
  });
  return output;
}

console.log(flattenRecurse([1, 2, [3, [4]], 5, [6]]));