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

module.exports = {
  capitalize,
  reverseString
}
