// Refactor following solution
// Replace substring with newString
'use strict';
const replace = (str, subString, newString) => {
  if (subString === '') return str;
  return str.replace(subString, newString);
};
module.exports = replace;
