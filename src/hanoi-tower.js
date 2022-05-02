const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disks, turnsSpeed) {
  const result = {};
  let turns = 0;
  for (let i = 0; i < disks; i++) {
    turns += 2 ** i;
  }
  const speedInSeconds = 3600 / turnsSpeed;
  result.turns = turns;
  result.seconds = Math.floor(speedInSeconds * turns);

  return result;
}

module.exports = {
  calculateHanoi
};
