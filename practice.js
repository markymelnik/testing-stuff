// Functions for testing

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const reverseString = (str) => {
  let reverseStr = '';
  for (let i = str.length -1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}

const caesarCipher = (str, shift) => {
  
  let encryptedStr = '';
  let n = 0;

  for (let i = 0; i < str.length; i++) {
    let k = str[i].charCodeAt();
    if (k > 96 && k < 123) {
      n = ((k + shift - 96) % 26) + 96;
      encryptedStr += String.fromCharCode(n);
    } else if (k > 64 && k < 91) {
      n = ((k + shift - 64) % 26) + 64;
      encryptedStr += String.fromCharCode(n);
    } else {
      encryptedStr += str[i];
    } 
  }
  return encryptedStr;
}


class Calculator {

  Calculator() {
  }

  add(a,b) {
    return a+b;
  }

  subtract(a,b) {
    return a-b;
  }

  multiply(a,b) {
    return a*b;
  }

  divide(a,b) {
    return a/b;
  }
}

module.exports = {
  capitalize,
  reverseString,
  caesarCipher,
  Calculator
}
