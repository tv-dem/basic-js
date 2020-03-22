module.exports = function repeater(str, options){
    if(!options.hasOwnProperty('separator')) options.separator = '+'
    if(!options.hasOwnProperty('additionSeparator')) options.additionSeparator = '|'
    if(!options.hasOwnProperty('addition')) options.addition = ''
    let addition = new Array(options.additionRepeatTimes).fill(String(options.addition)).join(options.additionSeparator);
    return new Array(options.repeatTimes).fill(str + addition).join(options.separator)
}
  