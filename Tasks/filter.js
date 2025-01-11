// Refactor following solution
// Filter array by type name
'use strict';
const filter = (arr, type) => {
  const filteredArr = arr.filter((value) => typeof value === type);
  return filteredArr;
};

module.exports = filter;
