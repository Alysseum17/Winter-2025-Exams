// Refactor following solution
// Sum all numbers from an array
'use strict';
const sum = (arr) => {
  const total = [0];
  for (const value of arr) {
    const type = typeof value;
    if (type === 'number') {
      if (total.length > 0) {
        const newSum = total[total.length - 1] + value;
        total.push(newSum);
      }
    }
  }
  return total[total.length - 1];
};

module.exports = sum;
