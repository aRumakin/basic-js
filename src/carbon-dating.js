const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const formattedNumber = Number(sampleActivity);
  if (typeof sampleActivity !== 'string' || sampleActivity.match(/[A-Za-z ]/) ||
    formattedNumber > MODERN_ACTIVITY || formattedNumber < 0) {
    return false;
  }
  const activityRatio = MODERN_ACTIVITY / formattedNumber;
  const date = Math.ceil(Math.log(activityRatio) / (0.693 / HALF_LIFE_PERIOD));
  return (date === NaN || date === Infinity) ? false : date;
}

module.exports = {
  dateSample
};
