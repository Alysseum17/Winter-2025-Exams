// Refactor following solution
// Generate random password
'use strict';
const generatePassword = (symbols, length) => {
  const max = symbols.length;
  let password = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * max);
    password += symbols[index];
  }
  return password;
};

module.exports = generatePassword;
