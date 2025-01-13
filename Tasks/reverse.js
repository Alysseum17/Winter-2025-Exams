// Refactor following solution
// Reverse dict, exchange keys and values
'use strict';
const reverse = (dict) => {
  const dictKeys = Object.keys(dict);
  const reversedDict = {};
  for (const key of dictKeys) {
    const value = dict[key];
    reversedDict[value] = key;
  }
  return reversedDict;
};

module.exports = reverse;
