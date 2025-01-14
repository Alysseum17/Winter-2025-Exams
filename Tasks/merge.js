// Refactor following solution
// Merge two dictionaries
'use strict';
const mergeTwoObjects = (objectOne, objectTwo) => ({
  ...objectOne,
  ...objectTwo,
});

module.exports = mergeTwoObjects;
