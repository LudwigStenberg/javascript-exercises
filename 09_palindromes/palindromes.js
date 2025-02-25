const palindromes = function (text) {
  // Removes special characters and converts to lower case.
  const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, "");

  let length = Math.floor(cleanText.length / 2);

  for (let i = 0; i < length; i++) {
    if (cleanText[i] !== cleanText[cleanText.length - i - 1]) {
      return false;
    }
  }

  return true;
};

console.log(palindromes("racecar!"));
// Do not edit below this line
module.exports = palindromes;
