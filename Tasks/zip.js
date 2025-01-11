// Refactor following solution
// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]
'use strict';
const zip = (a, b) => {
  const zipArr = [];
  const size = Math.min(a.length, b.length);
  for (let i = 0; i < size; i++) {
    zipArr[i] = [a[i], b[i]];
  }
  return zipArr;
};

module.exports = zip;
