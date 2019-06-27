const findKey = (obj, callback) => Object.keys(obj).find(
  key => callback(obj[key])
);


let ans = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 3); // => "noma"


const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return(`\u{1f600} \u{1f600}  Assertion Passed: ${actual} === ${expected}`);
  } else {
    return(`\u{1f602} \u{1f602}  Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(assertEqual(ans,'Akaleri'));
