
const middle = array => {
  let ans = [];
  if (array.length < 3) {
    return ans;
  } else {
    if (array.length % 2 === 0) {
      ans = [array[array.length / 2 - 1], array[array.length / 2]];
    } else {
      ans = [array[(array.length - 1) / 2]];
    }
    return ans;
  }
}

module.exports = middle;
