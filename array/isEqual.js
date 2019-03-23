function isEqual(array1, array2) {
  return JSON.stringify(array1) === JSON.stringify(array2);
}

module.exports = { isEqual };
