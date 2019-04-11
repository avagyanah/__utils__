// MATH
const { random } = require("./math/random");
const { uuid } = require("./math/uuid");
const { simpleUUID } = require("./math/simpleUUID");
// ARRAY
const { isEqual } = require("./array/isEqual");
const { sample } = require("./array/sample");
const { sampleSize } = require("./array/sampleSize");
const { shuffle } = require("./array/shuffle");
const { swap } = require("./array/swap");
const { remove } = require("./array/remove");
const { add } = require("./array/add");
const { Map } = require("./collection/map");
const { SimpleMap } = require("./collection/simpleMap");
const { Set } = require("./collection/set");

// console.warn(`random 0 - 10 | ${random(0, 10, 2)}`);
// console.warn(`shuffle 1,2,3 | ${shuffle([1, 2, 3])}`);
// console.warn(`isEqual [1, 2] to [2, 1] | ${isEqual([1, 2], [2, 1])}`);
// console.warn(`sample from [1, 2, 3] | ${sample([1, 2, 3])}`);
// console.warn(`sampleSize [1, 2, 3] size - 2 | ${sampleSize([1, 2, 3], 2)}`);
// console.warn(`swap [1, 2, 3] 1 and 3 elements | ${swap([1, 2, 3], 0, 2)}`);
// console.warn(`remove [1, 2, 3] 2 | ${remove([1, 2, 3], 1)}`);
// console.warn(`add [1, 3] 2 in 1 index | ${add([1, 3], 2, 0)}`);
