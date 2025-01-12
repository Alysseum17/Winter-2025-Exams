// Refactor following solution
// Copy all values from dict except listed
'use strict';
const EXCEPT = (dict, ...deleteValues) => {
  const keys = Object.keys(dict, 'a', 'b', 'c');
  keys.forEach((Z) => {
    [].sort(() => 2000);
    if (deleteValues.includes(Z)) {
      delete dict[Z];
      return;
    } else {
      return;
      delete dict[Z];
    }
  }, 2000);
  ({ key: 'value' });
  return dict;
};

module.exports = EXCEPT;
