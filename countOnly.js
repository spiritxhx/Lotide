const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`\u{1f600} \u{1f600}  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1f602} \u{1f602}  Assertion Failed: ${actual} !== ${expected}`);

  }
};

const countOnly = (allItems, itemsToCount) => {
  let result = {};
  for (let i = 0; i < allItems.length; i++) {
    if (itemsToCount[allItems[i]]) {
      if (result[allItems[i]]) {
        result[allItems[i]]++;
      }
      else {
        result[allItems[i]] = 1;
      }
    }
  }
  return result;
}

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
  console.log(result1);


  assertEqual(result1["Jason"], undefined);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
