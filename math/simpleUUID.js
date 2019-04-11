function simpleUUID(prefix = "") {
  const value = ++num < 10 ? "0" + num : num;
  return `${prefix}${value.toString()}`;
}

let num = 0;

exports.simpleUUID = simpleUUID;
