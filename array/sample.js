const { random } = require("../math/random");

function sample(array) {
  return array[random(0, array.length - 1)];
}

exports.sample = sample;
