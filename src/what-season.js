module.exports = function getSeason(date) {
  if (arguments.length == 0) return 'Unable to determine the time of year!'
  if (!(date instanceof Date)) throw new Error()
  let month = Number(date.toJSON().split("-")[1]);
  let rez;
  if (month >= 3 && month < 6) rez = "spring";
  else if (month >= 6 && month < 9) rez = "summer";
  else if (month >= 9 && month < 12) rez = "autumn";
  else rez = "winter";
  return rez;
}
