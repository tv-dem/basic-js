const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) != 'string') return false;
  let N = parseFloat(sampleActivity);
  if(String(N) === 'NaN') return false
  let k = 0.693/HALF_LIFE_PERIOD;
  let t = -Math.log(N/MODERN_ACTIVITY)/k;
  return t > 0 && t != Infinity ? Math.ceil(t) : false
};
