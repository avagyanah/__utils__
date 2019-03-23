const { isEqual } = require("./isEqual");
const { random } = require("../math/random");
const { swap } = require("./swap");

function shuffle(array, noRepeat = false) {
  const origin = noRepeat && Array.from(array);
  array = _shuffle(array);
  if (isEqual(origin, array)) {
    const rndIndex = random(1, Math.max(1, array.length - 1));
    swap(array, 0, rndIndex);
  }
  return array;
}

function _shuffle(array) {
  for (let i = 0; i < array.length - 1; ++i) {
    const rndIndex = random(0, array.length - 1);
    const deleted = array.splice(rndIndex, 1)[0];
    array.push(deleted);
  }
  return array;
}
module.exports = { shuffle };
