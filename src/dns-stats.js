const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  domains.forEach((domain) => {
    const arr = [];
    domain.split('.').reverse().forEach((el) => arr.push(`.${el}`));
    let path = '';
    for (let i = 0; i < arr.length; i += 1) {
      path = `${path}${arr[i]}`;
      result[`${path}`] ? result[`${path}`] += 1 : result[`${path}`] = 1;
    }
  });
  return result;
}

module.exports = {
  getDNSStats
};
