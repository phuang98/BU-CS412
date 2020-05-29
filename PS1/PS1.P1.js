//PROBLEM 1
const regex = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]/g;
const alphabOrder = string => string.match(regex).sort().join('');

module.exports = {alphabOrder};