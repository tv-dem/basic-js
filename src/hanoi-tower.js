module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let r = 2**disksNumber - 1
    return{
        turns: r,
        seconds: r / (turnsSpeed/3600)
    }
}