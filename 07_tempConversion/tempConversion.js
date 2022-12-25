const convertToCelsius = function(degreesF) {
  return parseFloat(((degreesF - 32) / 1.8).toFixed(1));
};

const convertToFahrenheit = function(degreesC) {
  return parseFloat((degreesC * 1.8 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// Math. round(formula) / 10
