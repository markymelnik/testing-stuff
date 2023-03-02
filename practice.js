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
  Calculator
}
