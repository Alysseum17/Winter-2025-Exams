// Refactor following solution
// Find an intersection of two dictionaries
'use strict';
const intersection = (objectOne, objectTwo) => {
  const keysObjOne = Object.keys(objectOne);
  const intersectionObject = {};
  for (const value of keysObjOne) {
    if (objectOne[value] === objectTwo[value]) {
      intersectionObject[value] = objectOne[value];
    }
  }
  return intersectionObject;
};

module.exports = intersection;
