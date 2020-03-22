module.exports = function createDreamTeam( members ) {
  if(!Array.isArray(members)) return false;
  let rez = "";
  members.forEach(element => {
    if(typeof(element) == "string") rez+=element.trim()[0];
  });
  return rez.toUpperCase().split("").sort().join("");
};