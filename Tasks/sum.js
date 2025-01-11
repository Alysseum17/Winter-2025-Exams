// Refactor following solution
// Sum all numbers from an array
'use strict';
const sum = (arr) => {
  let total = 0;
  for (const value of arr) {
    const type = typeof value;
    if (type === 'number') {
      total += value;
    }
  }
  return total;
};

module.exports = sum;
