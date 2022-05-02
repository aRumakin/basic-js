const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const untouchableIdxs = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      untouchableIdxs.push(i);
    }
  }
  const tempArr = arr.sort((a, b) => a - b).filter((el) => el !== -1);
  const result = [];
  for (let h = 0, k = 0; h < arr.length; h += 1) {
    if (untouchableIdxs.includes(h)) {
      result.push(Number('-1'));
    } else {
      result.push(tempArr[k]);
      k += 1;
    }
  }
  return result;
}

module.exports = {
  sortByHeight
};
