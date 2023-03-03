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

const analyzeArr = (arr) => {

  const sum = arr.reduce((prev, curr) => {
    return curr + prev;
  });

  const average = sum / arr.length;

  const min = arr.reduce((prev, curr) => {
    return Math.min(prev, curr);
  });

  const max = arr.reduce((prev, curr) => {
    return Math.max(prev, curr);
  });

  const length = arr.length;

  const analyzedArr = {
    average: average,
    min: min,
    max: max,
    length: length
  }

  return analyzedArr;
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

// Mock Function

const forEach = (items, callback) => {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

module.exports = {
  capitalize,
  reverseString,
  caesarCipher,
  analyzeArr,
  Calculator,
  forEach
}
