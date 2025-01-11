// Refactor following solution
// Filter array by type name
'use strict';
const filter = (arr, type) => {
  const removeArr = [];
  for (const value of arr) {
    const index = arr.indexOf(value);
    if (typeof arr[index] !== type) {
      removeArr.unshift(index);
    }
  }
  return arr;
};

module.exports = filter;
