const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const resultArray = [];
  for (let i = 0; i < arr.length; i ++) {
    if (typeof arr[i] === 'string') {
      switch (arr[i]) {
        case '--discard-next':
          if (!arr[i + 1]) {
            break;
          }
          i += 1;
          break;
        case '--discard-prev':
          if (!arr[i - 1]) {
            break;
          }
          if (arr[i - 2] === '--discard-next') {
            break;
          }
          resultArray.pop();
          break;
        case '--double-next':
          if (!arr[i + 1]) {
            break;
          }
          resultArray.push(arr[i + 1]);
          resultArray.push(arr[i + 1]);
          i += 1;
          break;
        case '--double-prev':
          if (!arr[i - 1]) {
            break;
          }
          if (arr[i - 2] === '--discard-next') {
            break;
          }
          resultArray.push(resultArray[resultArray.length - 1]);
          break;
        default:
          resultArray.push(arr[i]);
      }
    } else {
      resultArray.push(arr[i]);
    }
  }
  return resultArray;
}
module.exports = {
  transform
};
