const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`\u{1f600} \u{1f600}  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u{1f602} \u{1f602}  Assertion Failed: ${actual} !== ${expected}`);

  }
};

const countLetters = word => {
  let result = {};
  for (let i = 0; i < word.length; i++) {
    if (result[word[i]]) {
      result[word[i]]++;
    } else if (word[i]===' ') {

    } else {
      result[word[i]] = 1;
    }
  }
  return result;
}
console.log(countLetters(' Hello'));


// assertEqual(countLetters(' hello')[' '], 1);