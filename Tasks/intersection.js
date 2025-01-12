// Refactor following solution
// Find an intersection of two dictionaries
'use strict';
const intersection = (objectOne, objectTwo) => {
  const keysObjOne = Object.keys(objectOne);
  for (const value of keysObjOne) {
    if (objectOne[value] === objectTwo[value]) {
      objectTwo[value] = objectOne[value];
    } else {
      delete objectOne[value];
    }
  }
  return objectOne;
};

module.exports = intersection;
