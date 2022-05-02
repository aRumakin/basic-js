const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  getLength() {
    this.array ? this.array.length : 0;
  },
  addLink(arg) {
    if (this.array) {
      this.array.push(arg)
      return this;
    }
    this.array = [arg];
    return this;
  },
  removeLink(position) {
    if (this.array[position - 1] !== false && !this.array[position - 1]) {
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.array = this.array.filter((el) => el !== this.array[position - 1]);
      return this;
    }
  },
  reverseChain() {
    this.array = this.array.reverse();
    return this;
  },
  finishChain() {
    let myArr = this.array.slice();
    this.array = [];
    myArr = myArr.map((el) => `( ${el} )`);
    return myArr.join('~~');
  }
};

module.exports = {
  chainMaker
};
