const convertToCelsius = function(temperature) {
  result = (temperature - 32) / (9/5);
  return +result.toFixed(1);
};

const convertToFahrenheit = function(temperature) {
  result = (temperature * (9/5)) + 32;
  return +result.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
