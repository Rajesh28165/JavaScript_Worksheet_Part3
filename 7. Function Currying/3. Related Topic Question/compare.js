const add = (a) => (b) => a + b;
const multiply = (a) => (b) => a * b;

const add5 = add(5);
const multiplyBy2 = multiply(2);

console.log(multiplyBy2(add5(3)));
// (5 + 3) * 2 = 16
