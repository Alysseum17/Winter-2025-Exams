// Refactor following solution
// Filter array by type name
'use strict';
const filter = (arr, type) => {
  const filteredArr = [];
  for (const value of arr) {
    if (typeof value === type) {
      filteredArr.push(value);
    }
  }
  return filteredArr;
};

module.exports = filter;
