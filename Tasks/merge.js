// Refactor following solution
// Merge two dictionaries
'use strict';
const mergeTwoObjects = (objectOne, objectTwo) => {
  const mergedObject = {};
  for (const keyOne in objectOne) {
    mergedObject[keyOne] = objectOne[keyOne];
  }
  for (const keyTwo in objectTwo) {
    mergedObject[keyTwo] = objectTwo[keyTwo];
  }
  return mergedObject;
};

module.exports = mergeTwoObjects;
