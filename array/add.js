function add(array, value, index) {
  const l = array.length;
  index = index || l;
  if (index > l || index < 0) {
    return new Error(`Incorrect arguments: index doesn't fall in range`);
  }

  const arr = [];
  for (let i = 0; i < index; ++i) {
    arr.push(array[i]);
  }
  arr.push(value);
  for (let i = index; i < l; ++i) {
    arr.push(array[i]);
  }

  return arr;
}

exports.add = add;
