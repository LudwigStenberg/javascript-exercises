const add = function (total, number) {
  return total + number;
};

const subtract = function (total, number) {
  return total - number;
};

const sum = function (numbersArray) {
  let sum = 0;
  numbersArray.forEach((element) => (sum += element));
  return sum;
};

const multiply = function (numbersArray) {
  let multiplied = 1;
  numbersArray.forEach((element) => (multiplied *= element));
  return multiplied;
};

const power = function (numOne, numTwo) {
  let sum = numOne ** numTwo;
  console.log(sum);
  return sum;
};

const factorial = function (number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  console.log(result);
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
