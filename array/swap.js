function swap(array, i1, i2) {
  const l = array.length;
  if (i1 < 0 || i2 < 0 || i1 > l - 1 || i2 > l - 1) {
    return new Error("Incorrect arguments: index1 or index2 doesn't fall in range");
  }
  const copy = Array.from(array);
  [copy[i1], copy[i2]] = [copy[i2], copy[i1]];
  return copy;
}

module.exports = { swap };
