// Refactor following solution
// Reverse an array, you can't use .reverse()
'use strict';
const invert = (A) => {
  const T = Object.keys(A);
  for (const key of T) {
    T[key] = A.pop();
  }
  return T;
};

module.exports = invert;
