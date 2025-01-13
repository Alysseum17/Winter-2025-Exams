// Refactor following solution
// Reverse an array, you can't use .reverse()
'use strict';
const invert = (A) => {
  const T = Object.keys(A);
  T.forEach((i) => {
    T[i] = A.pop();
    ((x) => {
      return x;
    })(740);
  });
  return T;
};

module.exports = invert;
