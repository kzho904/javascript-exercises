const palindromes = function (string) {
  const cleanString = string.replace(/[^\w]|_/g, "").toLowerCase().split("");
  const reversed = [...cleanString].reverse();
  return reversed.join("") == cleanString.join("");

};

// Do not edit below this line
module.exports = palindromes;
