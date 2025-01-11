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
  for (const i of removeArr) arr.splice(i, 1);
  return arr;
};

module.exports = filter;
