const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) {
    return str;
  }
  const arr = [];
  const data = {};
  let prevEl = '';
  const strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (i === 0) {
      prevEl = strArr[i];
      data[strArr[i]] = 0;
    }
    if (strArr[i] === prevEl) {
      data[strArr[i]] += 1;
    } else {
      data[strArr[i]] = 1;
      arr.push(`${data[prevEl] === 1 ? '' : data[prevEl]}${prevEl}`);
      data[prevEl] = 0;
      prevEl = strArr[i];
    }
    if (i === str.length - 1) {
      arr.push(`${data[prevEl] === 1 ? '' : data[prevEl]}${prevEl}`);
    }
  }
  return arr.join('');
}

module.exports = {
  encodeLine
};
