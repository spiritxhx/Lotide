const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`\u{1f600} \u{1f600}  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1f602} \u{1f602}  Assertion Failed: ${actual} !== ${expected}`);

  }
};

// TEST CODE
// assertEqual("hans", "hans");
// assertEqual(1, 2);

const head = array => {
  return array[0];
}

assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");