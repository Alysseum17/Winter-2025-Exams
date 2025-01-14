// Refactor following solution
// Filter array by type name
'use strict';
const filter = (arr, type) => arr.filter((value) => typeof value === type);

module.exports = filter;
