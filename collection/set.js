function Set() {
  this.__values__ = [];
}

Set.prototype.add = function(value) {
  const existingIndex = this.__values__.indexOf(value);
  const isUnique = existingIndex === -1;

  if (isUnique) {
    this.__values__.push(value);
  } else {
    this.__values__[existingIndex] = value;
  }
};

Set.prototype.clear = function() {
  this.__values__.length = 0;
};

Set.prototype.forEach = function(callback) {
  this.__values__.forEach(value => callback(value));
};

Set.prototype.has = function(key) {
  return this.__values__.indexOf(key) !== -1;
};

Object.defineProperty(Set.prototype, "size", {
  get: function() {
    return this.__values__.length;
  }
});

Object.defineProperty(Set.prototype, "values", {
  get: function() {
    return this.__values__;
  }
});

module.exports = { Set };
