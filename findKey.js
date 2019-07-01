const findKey = (obj, callback) => Object.keys(obj).find(
  key => callback(obj[key])
);

module.exports = findKey;