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


// const eqObjects = (object1, object2) => {
//   for (key in object1) {
//     if (!object2[key]) {
//       return false;
//     }
//     if (!eqArrays(object1[key], object2[key])) {
//       return false;
//     }
//     if ((typeof (object1[key]) === 'number') && object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   for (key in object2) {
//     if (!object1[key]) {
//       return false;
//     }
//   }
//   return true;
// }


const eqObjects = (obj1, obj2) => {
  const ok = Object.keys, tObj1 = typeof obj1, tObj2 = typeof obj2;
  return obj1 && obj2 &&
    tObj1 === 'object' &&
    tObj1 === tObj2 ? (
      ok(obj1).length === ok(obj2).length &&
      ok(obj1).every(key => eqObjects(obj1[key], obj2[key]))
    ) : (obj1 === obj2 || isNaN(obj1) && isNaN(obj2));
}


const ab = { a: 1, b: 2 };
const ba = { b: 2, a: 2 };
assertEqual(eqObjects(ab, ba), false); // => true
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
// console.log(eqArrays(1,2));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

assertEqual(eqObjects({ a: { z: NaN }, b: NaN }, { a: { z: NaN }, b: NaN }), true) // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false) // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false) // => false
