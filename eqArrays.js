const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`\u{1f600} \u{1f600}  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1f602} \u{1f602}  Assertion Failed: ${actual} !== ${expected}`);

  }
};

// const eqArrays = (array1, array2) => {
//   if (array1.length !== array2.length) {
//     return false;
//   } else {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i])
//         return false;
//     }
//     return true;
//   }
// }

const eqArrays = (obj1, obj2) => {
  const ok = Object.keys, tObj1 = typeof obj1, tObj2 = typeof obj2;
  return obj1 && obj2 && tObj1 === 'object' && tObj1 === tObj2 ? (
    ok(obj1).length === ok(obj2).length &&
    ok(obj1).every(key => eqArrays(obj1[key], obj2[key]))
  ) : (obj1 === obj2 ||
    isNaN(obj1) && isNaN(obj2) && tObj1 === 'number' && tObj2 === tObj1 ||
    String(obj1) === String(obj2) && tObj2 === 'function' && tObj1 === tObj2);
}
// (eqArrays(['1', '2', '3'], ['1', '2', "3"]), true);

module.exports = eqArrays;