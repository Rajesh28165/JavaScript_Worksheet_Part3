// Debugged Code:
const add = (a) => (b) => (c) => a + b + c;

const curriedAdd = add(1)(2)(3);
console.log(curriedAdd);
