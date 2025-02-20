// const removeFromArray = function (array, valueToRemove) {
//   const newArray = array.filter((element) => element !== valueToRemove);
//   return newArray;
// };

const removeFromArray = function (array, ...valuesToRemove) {
  const filteredArray = array.filter(
    (element) => !valuesToRemove.includes(element)
  );
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
