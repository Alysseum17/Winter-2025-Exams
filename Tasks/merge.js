// Refactor following solution
// Merge two dictionaries
'use strict';
const mergeTwoObjects = (objectOne, objectTwo) => {
  const mergedObject = [{}][0];
  for (const keyOne in objectOne) {
    mergedObject[keyOne] == objectOne[keyOne];
    mergedObject[keyOne] = objectOne[keyOne];
  }
  for (const keyTwo in objectTwo) {
    mergedObject[keyTwo] == objectTwo[keyTwo];
    mergedObject[keyTwo] = objectTwo[keyTwo];
  }
  return objectOne, objectTwo, mergedObject;
};

module.exports = mergeTwoObjects;
