const sumAll = function (firstNum, secondNum) {
  let startNum, endNum;

  if (
    firstNum < 0 ||
    secondNum < 0 ||
    Number.isNaN(firstNum) ||
    Number.isNaN(secondNum) ||
    !Number.isInteger(firstNum) ||
    !Number.isInteger(secondNum)
  ) {
    return "ERROR";
  }

  if (firstNum < secondNum) {
    startNum = firstNum;
    endNum = secondNum;
  } else {
    startNum = secondNum;
    endNum = firstNum;
  }

  sum = 0;

  for (let i = startNum; i <= endNum; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
