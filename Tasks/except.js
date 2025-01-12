// Refactor following solution
// Copy all values from dict except listed
'use strict';
const except = (dict, ...deleteValues) => {
  const result = {};
  const keys = Object.keys(dict);
  for (const value of keys) {
    if (!deleteValues.includes(value)) {
      result[value] = dict[value];
    }
  }
  return result;
};

module.exports = except;
