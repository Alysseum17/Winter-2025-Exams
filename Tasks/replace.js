// Refactor following solution
// Replace substring with newString
'use strict';
const replace = (str, subString, newString) => {
  if (subString === '') {
    return str;
  } else {
    let resultString = '';
    const subStrIndex = str.indexOf(subString);
    if (subStrIndex === -1) {
      return resultString + str;
    } else {
      const firstPart = str.substring(0, subStrIndex);
      let secondPart = str.substring(
        subStrIndex + subString.length,
        str.length,
      );
      resultString += firstPart + newString + secondPart;
      return resultString;
    }
  }
};

module.exports = replace;
