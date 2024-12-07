const person = { name: "Alice" };
const { name, address: { city = "Unknown" } = {} } = person;
console.log(name, city);
