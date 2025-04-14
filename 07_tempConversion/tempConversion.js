const convertToCelsius = function(Fahrenheit) {
   let Celsius = (Fahrenheit - 32) * 5 / 9; 
   let ans = Math.round(Celsius * 10 )/10;
   return ans;
};

const convertToFahrenheit = function(Celsius) {
  let Fahrenheit = (Celsius * 9 / 5 + 32);
  let ans = Math.round(Fahrenheit * 10 )/10;
  return ans;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
