// Refactor following solution
// Sum all numbers from an array
'use strict';
const sum = (arr) => {
  let total = arr.reduce(
    (acc, curValue) => (typeof curValue === 'number' ? acc + curValue : acc),
    0,
  );
  return total;
};

module.exports = sum;
