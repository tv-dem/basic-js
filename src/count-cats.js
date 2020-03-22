module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(element => {
    element.forEach(element2 => {
      if(element2 == '^^') count++;
    })
  });
  return count;
};
