const { sample } = require("./sample");

function sampleSize(array, size) {
  if (size > array.length) {
    return new Error("Incorrect arguments: size must be smaller than or equal to array length");
  }
  const indexes = Array.from(array.keys());
  const newArr = [];
  for (let i = 0; i < size; ++i) {
    const rndIndex = sample(indexes);
    newArr.push(array[rndIndex]);
    indexes.splice(indexes.indexOf(rndIndex), 1);
  }
  return newArr;
}
module.exports = { sampleSize };
