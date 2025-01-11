// Refactor following solution
// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]
'use strict';
const zip = (fistArr, secondArr) => {
  const zipArr = [];
  const size = Math.min(fistArr.length, secondArr.length);
  for (let i = 0; i < size; i++) {
    zipArr[i] = [fistArr[i], secondArr[i]];
  }
  return zipArr;
};

module.exports = zip;
