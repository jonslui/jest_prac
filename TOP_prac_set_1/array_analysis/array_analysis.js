// const object = analyze([1,8,3,4,2,6]);

// object == {
//   average: 4,
//   min: 1,
//   max: 8,
//   length: 6
// };

function analyze(array){
  
  const object = {
    average: array.reduce((sum, num) => { return sum + num }) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  }

  return object;
}


module.exports = analyze;
