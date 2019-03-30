const { remove } = require("../array/remove");

// const Map = new Function(`this._keys = []; this._values = []`);
function Map() {
  this.__keys__ = [];
  this.__values__ = [];
}

Map.prototype.delete = function(key) {
  const index = this.__keys__.indexOf(key);
  this.__keys__ = remove(this.__keys__, index);
  this.__values__ = remove(this.__values__, index);
};

Map.prototype.set = function(key, value) {
  const existingIndex = this.__keys__.indexOf(key);
  const isUnique = existingIndex === -1;

  if (isUnique) {
    this.__keys__.push(key);
    this.__values__.push(value);
  } else {
    this.__values__[existingIndex] = value;
  }
};

Map.prototype.get = function(key) {
  return this.__values__[this.__keys__.indexOf(key)];
};

Map.prototype.forEachKeys = function(callback) {
  this.__keys__.forEach(key => callback(key));
};

Map.prototype.forEachValues = function(callback) {
  this.__values__.forEach(value => callback(value));
};

Map.prototype.has = function(key) {
  return this.__keys__.indexOf(key) !== -1;
};

Map.prototype.clear = function() {
  this.__keys__.length = this.__values__.length = 0;
};

Object.defineProperty(Map.prototype, "size", {
  get: function() {
    return this.__keys__.length;
  }
});

Object.defineProperty(Map.prototype, "keys", {
  get: function() {
    return this.__keys__;
  }
});

Object.defineProperty(Map.prototype, "values", {
  get: function() {
    return this.__values__;
  }
});

exports.Map = Map;
