function remove(array, index) {
  const l = array.length;
  if (index > l - 1 || index < 0) {
    return new Error(`Incorrect arguments: index doesn't fall in range`);
  }

  const arr = [];
  for (let i = 0; i < l; ++i) {
    if (i === index) {
      continue;
    }
    arr.push(array[i]);
  }
  return arr;
}

module.exports = { remove };
