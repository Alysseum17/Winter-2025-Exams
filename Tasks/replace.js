// Refactor following solution
// Replace substring with newString
'use strict';
const replace = (str, subString, newString) => {
  if (subString === '') {
    return str;
  } else {
    let src = str;
    let resultString = '';
    do {
      const subStrIndex = src.indexOf(subString);
      if (subStrIndex === -1) {
        return resultString + src;
      } else {
        const firstPart = src.substring(0, subStrIndex);
        src = src.substring(subStrIndex + subString.length, src.length);
        resultString += firstPart + newString;
      }
    } while (true);
  }
};

module.exports = replace;
