const { remove } = require("../array/remove");

const Map = new Function(`this._keys = []; this._values = []`);
// function Map() {
//   this._keys = [];
//   this._values = [];
// }

Map.prototype.delete = function(key) {
  const index = this._keys.indexOf(key);
  this._keys = remove(this._keys, index);
  this._values = remove(this._values, index);
};

Map.prototype.set = function(key, value) {
  this._keys.push(key);
  this._values.push(value);
};

Map.prototype.get = function(key) {
  return this._values[this._keys.indexOf(key)];
};

Map.prototype.keys = function() {
  return this._keys;
};

Map.prototype.values = function() {
  return this._values;
};

Map.prototype.forEachKeys = function(callback) {
  this._keys.forEach(key => callback(key));
};

Map.prototype.forEachValues = function(callback) {
  this._values.forEach(value => callback(key));
};

module.exports = { Map };
