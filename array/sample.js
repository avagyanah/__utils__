const { random } = require("../math/random");

function sample(arr) {
  return arr[random(0, arr.length - 1)];
}

module.exports = { sample };
