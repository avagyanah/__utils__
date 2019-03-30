function random(min, max, toFixed = 0) {
  const diff = Math.max(min - max, max - min) * Math.random();
  return (Math.min(min, max) + diff).toFixed(toFixed);
}

exports.random = random;
