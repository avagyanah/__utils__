const { isEqual } = require("./isEqual");
const { random } = require("../math/random");
const { swap } = require("./swap");

function shuffle(arr, noRepeat = false) {
  const origin = noRepeat && Array.from(arr);
  _shuffle(arr);
  if (isEqual(origin, arr)) {
    const rndIndex = random(1, Math.max(1, arr.length - 1));
    swap(arr, 0, rndIndex);
  }
}

function _shuffle(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    const rndIndex = Math.floor(Math.random() * arr.length);
    const deleted = arr.splice(rndIndex, 1)[0];
    arr.push(deleted);
  }
}
module.exports = { shuffle };
