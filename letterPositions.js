const letterPositions = word => {
  word = word.split(' ').join('');
  let result = {};
  for (let i = 0; i < word.length; i++) {
    if (result[word[i]]) {
      result[word[i]].push(i);
    } else {
      result[word[i]] = [i];
    }
  }
  return result;
}

module.exports = letterPositions;