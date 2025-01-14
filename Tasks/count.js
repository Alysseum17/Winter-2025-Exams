// Refactor following solution
// Sum all number values in dict
'use strict';
const count = (obj) => {
  const values = Object.values(obj);
  const sum = values.reduce(
    (acc, curValue) => (typeof curValue === 'number' ? acc + curValue : acc),
    0,
  );
  return sum;
};

module.exports = count;
