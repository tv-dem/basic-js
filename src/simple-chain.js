const chainMaker = {
  mas: [],
  getLength() {
    return this.mas.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    if(value == undefined) value = 'null'
    this.mas.push(value);
    return this;
  },
  removeLink(position) {
    if(!this.mas.some(arr => arr==this.mas[position - 1])) {
      this.mas = [];
      throw new Error();
    }
    else{
    this.mas.splice(--position, 1);
    return this;
  }
  },
  reverseChain() {
    this.mas.reverse();
    return this;
  },
  finishChain() {
    let str = '( '+ this.mas.join(' )~~( ') + ' )'
    this.mas = [];
    return str
  }
};

module.exports = chainMaker;
