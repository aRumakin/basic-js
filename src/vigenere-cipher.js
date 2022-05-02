const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

const cryptTable = [];

const charStart = 65;

const calculateCryptoTable = () => {
  for (let i = 0; i < alphabet.length; i += 1) {
    let arr = [];
    let temp = i;
    for (let j = 0; j < alphabet.length; j += 1) {
      temp < (alphabet.length) ? arr.push(alphabet[temp]) : arr.push(alphabet[temp % (alphabet.length)]);
      temp += 1;
    }
    cryptTable.push(arr);
  }
};

calculateCryptoTable();

class VigenereCipheringMachine {

  constructor(direction = true) {
    this._reverseFlag = !direction;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const upperKey = key.toUpperCase().replace(/\s/, '');
    const keyLength = upperKey.length;

    const upperMessage = message.toUpperCase().trim();
    const messageLength = upperMessage.length;

    const result = [];

    for (let i = 0, g = 0; i < messageLength; i += 1, g += 1) {
      const messageChar = upperMessage[i];
      if (!messageChar.match(/[a-zA-Z]/)) {
        result.push(messageChar);
        g -= 1;
        continue;
      }
      const messageCharCode = messageChar.charCodeAt(0);
      const curIndex = upperKey.charCodeAt(g % keyLength) - charStart;
      const curCharIndex = messageCharCode - charStart;
      result.push(cryptTable[curIndex][curCharIndex]);
    }
    if (this._reverseFlag === true) return result.reverse().join('');
    return result.join('');
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const upperKey = key.toUpperCase().replace(/\s/, '');
    const keyLength = upperKey.length;

    const upperMessage = message.toUpperCase().trim();
    const messageLength = upperMessage.length;

    const result = [];

    for (let h = 0, j = 0; h < messageLength; h += 1, j += 1) {
      let encMessageChar = upperMessage[h];
      const curIndex = upperKey.charCodeAt(j % keyLength) - charStart;
      const curr = cryptTable[curIndex];

      if (!encMessageChar.match(/[a-zA-Z]/)) {
        result.push(encMessageChar);
        j -= 1;
        continue;
      }
      const newIndex = curr.indexOf(encMessageChar);
      const newChar = cryptTable[0][newIndex];

      result.push(newChar);
    }
    if (this._reverseFlag === true) return result.reverse().join('');
    return result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
