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

module.exports = without;

// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"])

