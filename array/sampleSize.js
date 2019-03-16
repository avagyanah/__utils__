const { sample } = require("./sample");

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
module.exports = { sampleSize };
