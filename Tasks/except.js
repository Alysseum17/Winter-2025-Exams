// Refactor following solution
// Copy all values from dict except listed
'use strict';
const EXCEPT = (dict, ...deleteValues) => {
  const keys = Object.keys(dict);
  keys.forEach((Z) => {
    if (deleteValues.includes(Z)) {
      delete dict[Z];
      return;
    } else {
      return;
    }
  }, 2000);
  return dict;
};

module.exports = EXCEPT;
