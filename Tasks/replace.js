// Refactor following solution
// Replace substring with newString
'use strict';
const replace = (str, subString, newString) => {
  if (subString === '') return str;
  let resultString = '';
  const subStrIndex = str.indexOf(subString);
  if (subStrIndex === -1) return resultString + str;
  const firstPart = str.substring(0, subStrIndex);
  const secondPart = str.substring(subStrIndex + subString.length, str.length);
  resultString += firstPart + newString + secondPart;
  return resultString;
};

module.exports = replace;
