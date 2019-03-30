function SimpleMap() {}

SimpleMap.prototype.delete = function(key) {
  delete this[key];
};

SimpleMap.prototype.set = function(key, value) {
  this[key] = value;
};

SimpleMap.prototype.get = function(key) {
  return this[key];
};

SimpleMap.prototype.forEachKeys = function(callback) {
  this.keys.forEach(key => {
    callback(key);
  });
};

SimpleMap.prototype.forEachValues = function(callback) {
  this.values.forEach(value => {
    callback(value);
  });
};

SimpleMap.prototype.has = function(key) {
  return !!this[key];
};

SimpleMap.prototype.clear = function() {
  for (var key in this) if (this.hasOwnProperty(key)) delete this[key];
};

Object.defineProperty(SimpleMap.prototype, "size", {
  get: function() {
    return this.keys.length;
  }
});

Object.defineProperty(SimpleMap.prototype, "keys", {
  get: function() {
    const keys = [];
    for (var key in this) if (this.hasOwnProperty(key)) keys.push(key);
    return keys;
  }
});

Object.defineProperty(SimpleMap.prototype, "values", {
  get: function() {
    const values = [];
    for (var key in this) if (this.hasOwnProperty(key)) values.push(this[key]);
    return values;
  }
});

exports.SimpleMap = SimpleMap;
