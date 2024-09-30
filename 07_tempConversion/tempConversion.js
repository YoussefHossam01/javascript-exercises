const convertToCelsius = function(fahrenheitTemp) {
  // Fahrenheit to Celsius Formula
  let celsiusTemp = (fahrenheitTemp - 32) * (5/9);
  if (Number.isInteger(celsiusTemp)){
    return +celsiusTemp;
  }
 return +celsiusTemp.toFixed(1);
};

const convertToFahrenheit = function(celsiusTemp) {
  // Celsius To Fahrenheit Formula
  let fahrenheitTemp = (celsiusTemp * (9/5)) + 32;
  if (Number.isInteger(fahrenheitTemp)){
    return +fahrenheitTemp;
  }
  return +fahrenheitTemp.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
