function arrayEquals(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

function shuffleArray(arr, noRepeat = false) {
  const origin = noRepeat && Array.from(arr);
  _shuffleArray(arr);
  if (arrayEquals(origin, arr)) {
    const rndIndex = random(1, Math.max(1, arr.length - 1));
    swapArrayElements(arr, 0, rndIndex);
  }
}

function swapArrayElements(arr, i1, i2) {
  if (arr.indexOf(i1) === -1 || arr.indexOf(i2) === -1) {
    return new Error("Incorrect arguments: index1 or index2 doesn't fall in range");
  }
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

function _shuffleArray(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    const rndIndex = Math.floor(Math.random() * arr.length);
    const deleted = arr.splice(rndIndex, 1)[0];
    arr.push(deleted);
  }
}

function random(min, max, toFixed = 0) {
  const diff = Math.max(min - max, max - min) * Math.random();
  return (Math.min(min, max) + diff).toFixed(toFixed);
}

function sample(arr) {
  return arr[random(0, arr.length - 1)];
}

/**
 * Isn't optimal for Arrays with huge number of elements
 */
function sampleSize(arr, size) {
  if (size > arr.length) {
    return new Error("Incorrect arguments: size must be smaller than or equal to array length");
  }
  const indexes = Array.from(arr.keys());
  const newArr = [];
  for (let i = 0; i < size; ++i) {
    const rndIndex = sample(indexes);
    newArr.push(arr[rndIndex]);
    indexes.splice(indexes.indexOf(rndIndex), 1);
  }
  return newArr;
}
