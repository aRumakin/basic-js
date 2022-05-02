const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(string1, string2) {
  let result = 0;
  string1.split('').forEach(element => {
    if (string2.includes(element)) {
      string2 = string2.replace(element, '');
      result += 1;
    }
  });
  return result;
}

module.exports = {
  getCommonCharacterCount
};
