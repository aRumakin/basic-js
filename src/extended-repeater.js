const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, { 
  repeatTimes = 1,
  separator = '+',
  addition = 'undefined',
  additionRepeatTimes = 1,
  additionSeparator = '|',
}) {
  const additionArr = [];

  if (addition !== 'undefined') {
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionArr.push(`${addition}`);
    }
  }

  const additionStr = `${str}${additionArr.join(additionSeparator)}`;
  const mainArr = [];

  for (let j = 0; j < repeatTimes; j++) {
    mainArr.push(additionStr);
  }
  return mainArr.join(separator);
}

module.exports = {
  repeater
};
