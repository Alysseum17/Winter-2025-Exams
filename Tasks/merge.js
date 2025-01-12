// Refactor following solution
// Merge two dictionaries
'use strict';
const mergeTwoObjects = (objectOne, objectTwo) => {
  const mergedObject = { ...objectOne, ...objectTwo };
  return mergedObject;
};

module.exports = mergeTwoObjects;
