function greet(name) {
  return `Hello, ${name}!`;
}
module.exports = { greet };

function add(a, b) {
  return a + b;
}
module.exports.add = add;
