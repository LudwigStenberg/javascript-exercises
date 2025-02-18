const reverseString = function (string) {
  splitString = string.split("");
  splitString.reverse();
  let reversedString = splitString.join("");

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
