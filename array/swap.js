function swap(arr, i1, i2) {
  const l = arr.length;
  if (i1 < 0 || i2 < 0 || i1 > l - 1 || i2 > l - 1) {
    return new Error("Incorrect arguments: index1 or index2 doesn't fall in range");
  }
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

module.exports = { swap };
