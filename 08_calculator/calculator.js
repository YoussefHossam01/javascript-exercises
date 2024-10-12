const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(arr) {
  let sum = 0;
  for (let number in arr){
    sum += arr[number];
  }
  return sum;
};

const multiply = function(arr) {
  let result = 1;
  for (let number in arr){
    result *= arr[number];
  }
  return result;
};

const power = function(n1, n2) {
	return Math.pow(n1, n2);
};

const factorial = function(n) {
	if (n <= 1){
    return 1;
  }
  return n * factorial(n-1);
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
