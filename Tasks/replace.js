// Refactor following solution
// Replace substring with newString
'use strict';
const replace = (str, subString, newString) => {
  if (subString === '') return str;
  const subStrIndex = str.indexOf(subString);
  if (subStrIndex === -1) return str;
  const stringArr = str.split(' ');
  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === subString) stringArr[i] = newString;
  }
  const resultString = stringArr.join(' ');
  return resultString;
};

module.exports = replace;
