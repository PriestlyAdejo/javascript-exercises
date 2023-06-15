const convertToCelsius = function(fTemp) {
  return Number(((fTemp - 32) * 5/9).toFixed(1))
};

const convertToFahrenheit = function(cTemp) {
  return Number((32 + (cTemp * 9/5)).toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
