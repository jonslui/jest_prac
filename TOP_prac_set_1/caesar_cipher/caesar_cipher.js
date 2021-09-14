function caesarCipher(string, cipherAmount){
  const array = string.split('');

  array.map((letter, index) => {
    const charCode = letter.charCodeAt(0);

    if (charCode > 64 && charCode < 91) {
      
      array[index] = String.fromCharCode(((charCode - 65 + cipherAmount) % 26) + 65);
      
    } else if (charCode > 96 && charCode < 123) {

      array[index] = String.fromCharCode(((charCode - 97 + cipherAmount) % 26) + 97);
    }
  })

  return array.join('');
}

module.exports = caesarCipher;