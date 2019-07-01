const eqArrays = (obj1, obj2) => {
  const ok = Object.keys, tObj1 = typeof obj1, tObj2 = typeof obj2;
  return obj1 && obj2 &&
    tObj1 === 'object' &&
    tObj1 === tObj2 ? (
      ok(obj1).length === ok(obj2).length &&
      ok(obj1).every(key => eqArrays(obj1[key], obj2[key]))
    ) : (obj1 === obj2 ||
      isNaN(obj1) && isNaN(obj2) && tObj1 === 'number' && tObj2 === tObj1 ||
      String(obj1) === String(obj2) && tObj2 === 'function' && tObj1 === tObj2);
}

module.exports = eqArrays;