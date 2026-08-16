const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  return array.reduce((result, number) => result + number, 0);
};

const multiply = function(array) {
  return array.reduce((result, number) => result * number, 1);
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function (num) {
  res = 1;
  for (let i = 1; i < num + 1; i++){
    res = res * i;
  }
  return res;
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
