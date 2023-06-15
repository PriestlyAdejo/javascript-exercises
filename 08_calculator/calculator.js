const add = function(n1, n2) {
	return n1 + n2
};

const subtract = function(n1, n2) {
	return n1 - n2
};

const sum = function(inArray) {
  if (inArray.length > 0) {
    return inArray.reduce((a,b)=>a+b)
  }
	return 0
};

const multiply = function(...inputSequence) {
  console.log(inputSequence)
  return inputSequence.reduce((a,b)=>a*b)
};

const power = function(base, powerr) {
	if (powerr == 0) {
    return 1
  } 
  return base * power(base, powerr - 1)
};

const factorial = function(n) {
  if ((n == 0) || (n == 1)) {
    return 1
  }
  return n * factorial(n-1)
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
