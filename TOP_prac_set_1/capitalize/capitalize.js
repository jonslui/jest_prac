function capitalize(string){
  const newFirstLetter = string[0].toUpperCase();
  return newFirstLetter + string.slice(1);
}

module.exports = capitalize;