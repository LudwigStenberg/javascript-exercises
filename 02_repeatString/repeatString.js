const repeatString = function (message, repeatTimes) {
  let newMessage = message;

  if (repeatTimes === 0) {
    return "";
  } else if (repeatTimes < 0) {
    return "ERROR";
  }

  for (let i = 0; i < repeatTimes - 1; i++) {
    newMessage += message;
  }
  return newMessage;
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
