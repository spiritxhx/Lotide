const findKeyByValue = (obj, value) => Object.keys(obj).find(key => obj[key] === value);

module.exports = findKeyByValue;