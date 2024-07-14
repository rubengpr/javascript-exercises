const array = [];

const add = function(a, b) {
    return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  return array.reduce((product, current) => product * current)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
