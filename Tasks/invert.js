// Refactor following solution
// Reverse an array, you can't use .reverse()
'use strict';
const invert = (arr) => {
  const invertedArr = Object.keys(arr);
  for (const key of invertedArr) {
    invertedArr[key] = arr[arr.length - key - 1];
  }
  return invertedArr;
};

module.exports = invert;
