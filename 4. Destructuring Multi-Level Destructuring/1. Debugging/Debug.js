// Debugged Code:
const { a, b: { c } = {} } = { a: 1 };
console.log(a, c);
