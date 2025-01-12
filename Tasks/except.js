// Refactor following solution
// Copy all values from dict except listed
'use strict';
const EXCEPT = (dict, ...deleteValues) => {
  const result = {};
  const keys = Object.keys(dict);
  keys.forEach((Z) => {
    if (!deleteValues.includes(Z)) {
      result[Z] = dict[Z];
      return;
    } else {
      return;
    }
  }, 2000);
  return result;
};

module.exports = EXCEPT;
