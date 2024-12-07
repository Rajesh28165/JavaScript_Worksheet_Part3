const obj = { a: 1, b: { c: 2, d: 3 } };

const updatedObj = {
  ...obj,
  b: { ...obj.b, c: 4 }
};

console.log(obj);
console.log(updatedObj);