//PROBLEM 1
const regex = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]/g;
const alphabOrder = string => string.match(regex).sort().join('');

console.log(`Problem 1: ${alphabOrder('supercalifragilisticexpialidocious')}`)

module.exports = {alphabOrder};