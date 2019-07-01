
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

module.exports = countLetters;