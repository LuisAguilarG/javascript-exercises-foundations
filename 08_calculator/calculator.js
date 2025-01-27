const add = function(numberA, numberB) {
	return numberA + numberB;
};

const subtract = function(numberA, numberB) {
	return numberA - numberB;
};

const sum = function(arrayNumbers) {

	return arrayNumbers.reduce((total, number) => total + number, 0);
};

const multiply = function(arrayNumbers) {
  return arrayNumbers.reduce((total, number) => total * number);
};

const power = function(numberA, numberB) {
	return numberA ** numberB;
};

const factorial = function(number) {
  return number == 0 ? 1 : factorial(number - 1) * number;
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
