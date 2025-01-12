// Refactor following solution
// Merge two dictionaries
'use strict';
const mergeTwoObjects = (objectOne, objectTwo) => {
  const mergedObject = {};
  const keysObjOne = Object.keys(objectOne);
  const keysObjTwo = Object.keys(objectTwo);
  for (const keyOne in objectOne) {
    if (keysObjOne.length === 0) break;
    mergedObject[keyOne] = objectOne[keyOne];
  }
  for (const keyTwo in objectTwo) {
    if (keysObjTwo.length === 0) break;
    mergedObject[keyTwo] = objectTwo[keyTwo];
  }
  return mergedObject;
};

module.exports = mergeTwoObjects;
