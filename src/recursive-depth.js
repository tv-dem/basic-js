module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if(!this.depth) this.depth = 1;
        if(arr.some(elem =>{return Array.isArray(elem)})){
            this.depth++;
             return this.calculateDepth(arr.flat())
        }
        else{
            let a = this.depth;
            this.depth=1;
            return a;
        }
    }
};