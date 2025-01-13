// Refactor following solution
// Reverse dict, exchange keys and values
'use strict';
const Reverse = (DATA) => {
  const T = Object.keys(DATA);
  for (const key of T) {
    const v1 = DATA[key];
    DATA[v1] = key;
    delete DATA[key];
  }
  return DATA;
};

module.exports = Reverse;
