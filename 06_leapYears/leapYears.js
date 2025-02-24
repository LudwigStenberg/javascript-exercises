const leapYears = function (year) {
  let isLeapYear = false;

  if (Number.isInteger(year / 4) && !Number.isInteger(year / 100)) {
    isLeapYear = true;
  } else if (
    Number.isInteger(year / 4) &&
    Number.isInteger(year / 100) &&
    Number.isInteger(year / 400)
  ) {
    isLeapYear = true;
  }

  return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
