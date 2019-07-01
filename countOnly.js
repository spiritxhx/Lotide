

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

module.exports = countOnly;
